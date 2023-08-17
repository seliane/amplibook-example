import {API, DataStore, graphqlOperation} from "aws-amplify";
import {ProfileImage} from "../models";

async function createProfileImage(imageKey, userID) {
    /*
    await API.graphql(graphqlOperation(createProfileImages, {
        input: {
            user: userID,
            image: imageKey
        }
    }))*/
    await DataStore.save(
        new ProfileImage({
            "userID": userID,
            "image": imageKey
        })
    );
}

async function updateExistingProfileImage(newImageKey, currentImage) {

        const original = await DataStore.query(ProfileImage, currentImage.id);

        await DataStore.save(
            ProfileImage.copyOf(original, updated => {
                updated.image = newImageKey
            })
        );

/*
    await API.graphql(graphqlOperation(updateProfileImages, {
        input: {
            id: currentImage.id,
            user: currentImage.user,
            image: newImageKey,
            createdAt: currentImage.createdAt,
            updatedAt: currentImage.updatedAt,
        }
    }))

 */
}

async function tryGetCurrentProfileImage(userID) {
    await DataStore.query(ProfileImage, el =>
        el.userID.eq(userID)
    );
    /*
    const variables = {
        filter: {
            user: {
                eq: userID
            }
        }
    };
    const data = await API.graphql({query: listProfileImages, variables: variables})
    return data.data.listProfileImages.items

     */
}

export async function updateProfileImage(imageKey, userID) {
    try {
        if (!userID || !imageKey) throw "userID " + userID + "or imageKey " + imageKey + " is not defined"
        const profileImages = await tryGetCurrentProfileImage(userID)
        if (profileImages && profileImages.length !== 0) {
            const currentProfileImage = profileImages[0]
            await updateExistingProfileImage(imageKey, currentProfileImage)
        } else {
            await createProfileImage(imageKey, userID)
        }
        return imageKey
    } catch (err) {
        console.log('error creating profile image entry:', err)
    }
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