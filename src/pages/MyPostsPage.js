import React from 'react'
import {Divider, useAuthenticator} from "@aws-amplify/ui-react";
import {cardStyle, collectionStyle, formStyle, headerStyle, userTextStyle} from "../styles/styles"
import Loading from "../components/Loading";
import MyPostCollectionOverwrite from "../components/MyPostCollectionOverwrite";
import {PostCreateForm} from "../ui-components";
import {addUser, useAuthUser} from "../services/userService";
import {cardOverwrite} from "./PostsPage";

export default function MyPosts() {
    const {route} = useAuthenticator((context) => [context.route]);
    const user = useAuthUser();

    // TODO: Fix this
    const userEntry = route === 'authenticated' ? addUser() : undefined

    const postCreateOverwrite = {
        "userID": {
            value: user ? user.attributes.sub : '',
            isDisabled: "True",
            display: "none"
        }
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
                <h1 style={headerStyle}>My Posts</h1>
                <MyPostCollectionOverwrite
                    templateColumns={collectionStyle.templateColumns}
                    userID={user.attributes.sub}
                    overrideItems={cardOverwrite}
                />
                <Divider></Divider>
                <PostCreateForm
                    width={formStyle.width}
                    maxWidth={formStyle.maxWidth}
                    overrides={postCreateOverwrite}
                    onSubmit={(fields) => {
                        if (!user || !user.attributes.sub) {
                            throw "User not logged in";
                        }
                        fields.userID = user.attributes.sub;
                        return fields
                    }}
                    onSuccess={() => window.location.reload()}
                />
            </div>
        );
    }
}
