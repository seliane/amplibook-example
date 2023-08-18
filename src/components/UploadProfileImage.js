import {MyProfileImageCreateForm, MyProfileImageUpdateForm} from "../ui-components";
import {disable, formOverlayContainerStyle, formStyle} from "../styles/styles";
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
                <div
                    style={formOverlayContainerStyle}
                >
                    <MyProfileImageUpdateForm
                        overrides={imageFormOverrides}
                        profileImage={imageRecord}
                        style={formStyle}
                        onChange={fields => {
                            // TODO: Hack, because imageKey is undefined in onSubmit
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
                </div>
            )
        } else {
            return (
                <div style={formOverlayContainerStyle}>
                    <MyProfileImageCreateForm
                        overrides={imageFormOverrides}
                        style={formStyle}
                        onSubmit={(fields) => {
                            fields["image"] = fields["imageKey"]
                            fields["userID"] = userID
                            return fields
                        }}
                        onSuccess={() => window.location.reload()}
                        onCancel={() => window.location.reload()}
                    />
                </div>
            )
        }
    }
}