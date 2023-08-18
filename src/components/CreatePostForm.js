import {PostCreateForm} from "../ui-components";
import {disable, formOverlayContainerStyle, formStyle} from "../styles/styles";
import React from "react";

export function CreatePostForm(props) {
    const {isVisible, userID} = props

    const postCreateOverwrite = {
        userID: {
            disable,
            display: "none",
            value: userID
        },
    }
    if (isVisible && userID !== undefined) {
        return (
            <div
                style={formOverlayContainerStyle}
            >
                <PostCreateForm
                    style={formStyle}
                    overrides={postCreateOverwrite}
                    onSubmit={(fields) => {
                        fields.userID = userID;
                        return fields
                    }}
                    onSuccess={() => window.location.reload()}
                    onCancel={() => window.location.reload()}

                />
            </div>
        )
    }
}