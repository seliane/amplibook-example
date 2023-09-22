import {getImagePublic} from "./imageService";
import {Auth, DataStore} from "aws-amplify";
import {useEffect, useState} from "react";
import {defaultAvatarIconKey, getProfileImageKey} from "./profileImageService";
import {User} from "../models";

async function updateUser(userID, name) {
    const dataList = await DataStore.query(User, el =>
        el.userID.eq(userID)
    );
    const original = dataList[0]
    await DataStore.save(
        User.copyOf(original, updated => {
            updated.name = name
        })
    );
}

export async function updateUserName(name) {
    const user = await Auth.currentAuthenticatedUser();
    await Auth.updateUserAttributes(user, {
        'name': name,
    });
    await updateUser(user.attributes.sub, name)
}

export const useAuthUser = () => {
    const [user, setUser] = useState(undefined);

    useEffect(() => {
        Auth.currentAuthenticatedUser()
            .then((user) => {
                    setUser(user)
                }
            )
            .then(async () => {
                await addUser()
            })
            .catch((err) => console.error(err))
    }, []);
    return user;
}

export async function addUser() {
    try {
        const user = await Auth.currentAuthenticatedUser();

        const userList = await getUser(user.attributes.sub);

        if (userList.length === 0) {
            await DataStore.save(
                new User({
                    "name": user.attributes.name,
                    "email": user.attributes.email,
                    "userID": user.attributes.sub,
                })
            );
        }
    } catch (err) {
        console.error(err)
    }
}

export async function getUser(userID) {
    return DataStore.query(User, el =>
        el.userID.eq(userID));
}

export const useUserName = (userID) => {
    const [name, setName] = useState(undefined);

    useEffect(() => {
        getUser(userID)
            .then((list) => {
                if (list && list.length !== 0) {
                    return list[0].name
                }
                return ''
            })
            .then((name) => {
                setName(name)
            })

    })
    return name
}

export const useUserImage = (userID) => {
    const [image, setImage] = useState(undefined);
    useEffect(() => {
        getProfileImageKey(userID)
            .then(async (imageKey) => {
                if (imageKey && imageKey !== undefined) {
                    return await getImagePublic(imageKey)
                }
                return await getImagePublic(defaultAvatarIconKey)
            })
            .then((image) => {
                setImage(image)
            })
    })
    return image
}