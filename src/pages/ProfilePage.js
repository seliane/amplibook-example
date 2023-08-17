import {useAuthenticator} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import Loading from "../components/Loading";
import {MyEditProfile, MyLogout, MyProfileImageUpdateForm} from "../ui-components";
import {formStyle, headerStyle} from "../styles/styles"
import {updateProfileImage} from "../services/profileImageService";
import {updateUser, useAuthUser, useAvatarImage} from "../services/userService";
import {useState} from "react";


export default function Profile() {
    const [name, setName] = useState("");
    const user = useAuthUser();
    const {route} = useAuthenticator((context) => [context.route]);

    const profileOverrides = {
        "TextField38475054": {
            onChange: (event) => {
                setName(event.target.value)
            },
        },
        "Button3848594": {
            onClick: () => updateUser(name),
        },
        /*
        "Button Cancel": {
            onClick: () => window.location.reload(),
        },

         */
        "image": {
            src: useAvatarImage(true),
        },
    }

    if (route !== 'authenticated') {
        return (
            <div>
                <Loading/>
            </div>
        )
    } else {
        return (
            <div>
                <h1 style={headerStyle}>My Profile</h1>
                <div>
                    <MyEditProfile
                        overrides={profileOverrides}
                        width={formStyle.width}
                        maxWidth={formStyle.maxWidth}
                    />
                    <MyProfileImageUpdateForm
                        width={formStyle.width}
                        maxWidth={formStyle.maxWidth}
                        onSubmit={async (fields) => {
                            const updatedFields = fields
                            if (!user || !user.attributes.sub) {
                                throw "User not logged in";
                            }
                            await updateProfileImage(updatedFields["imageKey"], user.attributes.sub)
                            return updatedFields
                        }}
                        onSuccess={() => window.location.reload()}
                        onCancel={() => window.location.reload()}
                    />
                    <MyLogout
                        width={formStyle.width}
                        maxWidth={formStyle.maxWidth}/>
                </div>
            </div>
        );
    }
}
