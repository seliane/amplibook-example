import {useAuthenticator} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import Loading from "../components/Loading";
import {MyEditProfile, MyLogout} from "../ui-components";
import {formStyle, headerStyle} from "../styles/styles"
import {tryGetCurrentProfileImage, useAvatarImage,} from "../services/profileImageService";
import {updateUserName, useAuthUser} from "../services/userService";
import {useEffect, useState} from "react";
import {UploadProfileImage} from "../components/UploadProfileImage";

export default function Profile() {
    const [name, setName] = useState("");
    const [imageRecord, setImageRecord] = useState("")
    const [isVisible, setIsVisible] = useState(false)

    const user = useAuthUser();
    const {route} = useAuthenticator((context) => [context.route]);
    useEffect(() => {
        if (user) {
            tryGetCurrentProfileImage(user.attributes.sub).then(imageList => {
                if (imageList && imageList.length !== 0) {
                    setImageRecord(imageList[0])
                }
            })
        }
    })
    function showForm() {
        setIsVisible(true)
    }
    const profileOverrides = {
        "TextField38475054": {
            onChange: (event) => {
                setName(event.target.value)
            },
        },
        "Button3848594": {
            onClick: () => updateUserName(name),
        },
        "image": {
            src: useAvatarImage(true),
        },
    }

    if (route !== 'authenticated' || user === undefined) {
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
                        imageUploadAction={showForm}
                    />
                    <UploadProfileImage
                        isVisible = {isVisible}
                        imageRecord={imageRecord}
                        userID={user.attributes.sub}
                        />

                    <MyLogout
                        width={formStyle.width}
                        maxWidth={formStyle.maxWidth}/>
                </div>
            </div>
        );
    }
}
