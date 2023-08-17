import React from 'react'
import {MyPostUpdate, PostUpdateForm} from '../ui-components'
import {useNavigate, useParams} from "react-router-dom";
import {useAuthenticator} from "@aws-amplify/ui-react";
import {formStyle, headerStyle} from "../styles/styles";
import Loading from "../components/Loading";

export default function PostEditPage() {
    const navigate = useNavigate();
    const disable = {
        isReadOnly: true,
        isDisabled: true
    }
    let {postId} = useParams();
    const {route} = useAuthenticator((context) => [context.route]);

    if (route !== 'authenticated') {
        return (
            <div>
                <Loading/>
            </div>
        )
    } else {
        return (
            <div>
                <h1 style={headerStyle}>Edit Post</h1>
                <PostUpdateForm
                    id={postId}
                    onSuccess={() => navigate(-1)}
                    onCancel={() => navigate(-1)}
                    overrides={{
                        userID: {disable, display: "none"},
                    }}
                    width={formStyle.width}
                    maxWidth={formStyle.maxWidth}
                />
            </div>
        );
    }
}
