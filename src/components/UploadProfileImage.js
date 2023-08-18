import {MyProfileImageCreateForm, MyProfileImageUpdateForm2} from "../ui-components";
import {disable, formStyle} from "../styles/styles";
import {useState} from "react";

export function UploadProfileImage(props) {
    const {isVisible, imageRecord, userID} = props
    const imageFormOverrides = {
        image: {disable, display: "none"},
        userID: {disable, display: "none"},
    }
    const [newImageID, setNewImageID] = useState(undefined)

    if (isVisible) {
        if (imageRecord !== undefined) {
            return (
                <MyProfileImageUpdateForm2
                    overrides={imageFormOverrides}
                    profileImage={imageRecord}
                    width={formStyle.width}
                    maxWidth={formStyle.maxWidth}
                    onChange={fields => {
                        setNewImageID(fields["imageKey"])
                        return fields
                    }
                    }
                    onSubmit={(fields) => {
                        console.log(fields, newImageID)
                        if (newImageID !== undefined) {
                            fields["image"] = newImageID
                        }
                        return fields
                    }}
                    onSuccess={() => window.location.reload()}
                    onCancel={() => window.location.reload()}
                />
            )
        } else {
            return (
                <MyProfileImageCreateForm
                    overrides={imageFormOverrides}
                    width={formStyle.width}
                    maxWidth={formStyle.maxWidth}
                    onSubmit={(fields) => {
                        fields["image"] = fields["imageKey"]
                        fields["userID"] = userID
                        return fields
                    }}
                    onSuccess={() => window.location.reload()}
                    onCancel={() => window.location.reload()}
                />
            )
        }
    }
}