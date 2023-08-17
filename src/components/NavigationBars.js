import React, {useState} from "react";
import {MyNavBarHeader, MyNavBarSide} from "../ui-components";
import {useAuthenticator, useBreakpointValue} from "@aws-amplify/ui-react";

import {navBarStyle, sideBarStyle} from "../styles/styles";
import {useAuthUser, useAvatarImage} from "../services/userService";


export default function NavigationBars() {
    const [isVisible, setIsVisible] = useState(false)

    function openSideBar() {
        setIsVisible(true)
    }

    function closeSideBar() {
        setIsVisible(false)
    }

    const tabsBreakPointStyle = {
        display: useBreakpointValue({base: 'none', small: 'flex'})
    }
    const {route} = useAuthenticator((context) => [context.route]);

    const user = useAuthUser()


    return (
        <div>
            <MyNavBarHeader
                imageKey = {useAvatarImage(route === 'authenticated')}

                overrides={{
                    "MyNavBarHeader": navBarStyle,
                    "Frame 32138474710": tabsBreakPointStyle,
                    "icon": {onClick: () => openSideBar()},
                }}
            />
            <MyNavBarSide
                isVisible={isVisible}
                style={{zIndex: "2"}}
                imageKey = {useAvatarImage(route === 'authenticated')}
                overrides={{
                    "MyNavBarSide": sideBarStyle,
                    "Button": {onClick: () => closeSideBar()},
                }}
            />
        </div>
    );

}