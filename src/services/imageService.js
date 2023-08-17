import {Storage} from "@aws-amplify/storage";
import {useEffect, useState} from "react";

export async function getImagePublic(key) {
    return await Storage.get(key, {
        level: 'public'
    });
}

export const useStorageGetPublic = (key) => {
    const [data, setData] = useState(undefined)

    useEffect(() => {
        getImagePublic(key)
            .then((res) => {
                    setData(res)
                }
            ).catch((err) => console.error(err))
    }, [key])

    return data;
}
