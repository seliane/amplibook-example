import {getImagePublic} from "./imageService";
import {API, Auth, DataStore, graphqlOperation} from "aws-amplify";
import {useEffect, useState} from "react";
import {getProfileImageKey} from "./profileImageService";
import {User} from "../models";

const defaultAvatarIconKey = 'female-user-icon.png'

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

export async function updateUser(name) {
    const user = await Auth.currentAuthenticatedUser();
    await Auth.updateUserAttributes(user, {
        'name': name,
    });
    window.location.reload()
}

export const useAuthUser = () => {
    const [user, setUser] = useState(undefined);

    useEffect(() => {
        Auth.currentAuthenticatedUser()
            .then((user) => {
                    setUser(user)
                    console.log(user)
                }
            ).catch((err) => console.error(err))
    }, []);
    return user;
}

export const useUserEntry = () => {
    const [user, setUser] = useState(undefined);
    useEffect(() => {
        Auth.currentAuthenticatedUser()
            .then((user) => {
                if (user) {
                    return addUser(user)
                }
                return undefined
            })
            .then((user) => setUser(user))
    })
    return user
}


export async function addUser() {
    try {
        const user = await Auth.currentAuthenticatedUser();

        const variables = {
            filter: {
                userID: {
                    eq: user.attributes.sub
                }
            }
        };
        // const data = await API.graphql({query: listUsers, variables: variables})
        // const userList = data.data.listUsers.items

        const userList = await DataStore.query(User);

        if (userList.length === 0) {
            await DataStore.save(
                new User({
                    "name": user.attributes.name,
                    "email":  user.attributes.email,
                    "userID":  user.attributes.sub,
                })
            );
/*
            const userEntry = await API.graphql(graphqlOperation(createUser, {
                input: {
                    name: user.attributes.name,
                    email: user.attributes.email,
                    userID: user.attributes.sub,
                }
            }))
            return userEntry.data.createUser
 */
        }
        return userList[0]
    } catch (err) {
        console.error(err)
    }
}

export async function getUser(userID) {
    return DataStore.query(User, el =>
        el.userID.eq(userID));
    /*
    const variables = {
        filter: {
            userID: {
                eq: userID
            }
        }
    };
    const data = await API.graphql({query: listUsers, variables: variables})
    return data.data.listUsers.items

     */
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