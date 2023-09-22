import React from 'react'
import {useAuthenticator} from "@aws-amplify/ui-react";
import {cardStyle, collectionStyle, userTextStyle} from "../styles/styles";
import Loading from "../components/Loading";
import PostCollectionOverwrite from "../components/PostCollectionOverwrite";
import {useAuthUser} from "../services/userService";

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
        "Share38474991": {
            gap: {
                base: "2em",
                small: "5em"

            }
        }
    }
})


export default function Posts() {
    const {route} = useAuthenticator((context) => [context.route]);
    const user = useAuthUser();

    if (route !== 'authenticated' || user === undefined) {
        return (
            <div>
                <Loading/>
            </div>
        )
    } else {
        return (
            <div>
                <h1>Posts</h1>
                <PostCollectionOverwrite
                    templateColumns={collectionStyle.templateColumns}
                    overrideItems={cardOverwrite}
                />
            </div>
        );
    }
}
