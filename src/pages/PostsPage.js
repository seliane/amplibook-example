import React from 'react'
import {useAuthenticator} from "@aws-amplify/ui-react";
import {cardStyle, collectionStyle, headerStyle, homeStyle, userTextStyle} from "../styles/styles";
import Loading from "../components/Loading";
import PostCollectionOverwrite from "../components/PostCollectionOverwrite";
import {addUser, useAuthUser} from "../services/userService";

export const cardOverwrite = (item, index) => ({
    style: {cardStyle},
    overrides: {
        "Lorem ipsum": {
            display: "inline-block",
            style: userTextStyle,
        },
        "\u201CLorem ipsum dolor sit amet, consectetur adipiscing elit. \u201D": {
            display: "inline-block",
            style: userTextStyle,
        },
    }
})


export default function Posts() {
    const {route} = useAuthenticator((context) => [context.route]);
    const user = useAuthUser();

// TODO: Fix this
    const userEntry = route === 'authenticated' ? addUser() : undefined

    if (route !== 'authenticated' || user === undefined) {
        return (
            <div>
                <Loading/>
            </div>
        )
    } else {
        return (
            <div style={homeStyle}>
                <h1 style={headerStyle}>Posts</h1>
                <PostCollectionOverwrite
                    templateColumns={collectionStyle.templateColumns}
                    overrideItems={cardOverwrite}
                />
            </div>
        );
    }
}
