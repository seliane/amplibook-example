import React from 'react'
import {headerStyle} from "../styles/styles";
import {HeroLayout1} from "../ui-components";
import {useStorageGetPublic} from "../services/imageService";

export default function Home() {

    const image = useStorageGetPublic('animal-friends-which-make-selfies-wiht-a-cellphone.png');

    return (
        <div>
            <h1 style={headerStyle}>Home</h1>
            <HeroLayout1
                width={"100%"}
                mode={"Light"}
                overrides={{
                    "image": {src: image},
                }}
            ></HeroLayout1>
        </div>
    );
}
