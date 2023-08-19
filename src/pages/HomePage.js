import React from 'react'
import {HeroLayout1} from "../ui-components";
import {useStorageGetPublic} from "../services/imageService";

export default function Home() {

    const image = useStorageGetPublic('animal-friends-which-make-selfies-wiht-a-cellphone.png');

    const heroOverrides ={
        "image": {src: image},
    }

    return (
        <div>
            <h1>Home</h1>
            <HeroLayout1
                width={"100%"}
                mode={"Light"}
                overrides={heroOverrides}
            ></HeroLayout1>
        </div>
    );
}
