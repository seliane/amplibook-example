import {Auth, DataStore} from "aws-amplify";
import {ProfileImage} from "../models";
import {useEffect, useState} from "react";
import {getImagePublic} from "./imageService";


export const defaultAvatarIconKey = 'female-user-icon.png'

export const useAvatarImage = (isLoggedIn) => {
    const [avatar, setAvatar] = useState(undefined);

    useEffect(() => {
        if (isLoggedIn) {
            Auth.currentAuthenticatedUser()
                .then(async (user) => {
                    if (user && user !== undefined) {
                        const imageKey = await getProfileImageKey(user.attributes.sub)
                        return imageKey
                    }
                })
                .then(async (imageKey) => {
                    if (imageKey && imageKey !== undefined) {
                        return await getImagePublic(imageKey)
                    } else {
                        return await getImagePublic(defaultAvatarIconKey)
                    }
                })
                .then((data) => {
                    setAvatar(data)
                })
                .catch((err) => console.log(err))

        } else {
            getImagePublic(defaultAvatarIconKey)
                .then((data) => {
                    setAvatar(data)
                })
                .catch((err) => console.log(err))
        }
    })
    return avatar;
}


export async function tryGetCurrentProfileImage(userID) {
    return await DataStore.query(ProfileImage, el =>
        el.userID.eq(userID)
    );
}

export async function getProfileImageKey(userID) {
    try {
        const profileImages = await tryGetCurrentProfileImage(userID)
        if (profileImages && profileImages.length !== 0) {
            return profileImages[0].image
        }
        return undefined

    } catch (err) {
        console.log('error creating profile image entry:', err)
    }
}