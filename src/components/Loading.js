import {Loader} from "@aws-amplify/ui-react";

export default function Loading() {

    return (
        <div>
            <h1>Loading...</h1>
            <Loader
                variation="linear"
                padding={"24px"}
                width={"50%"}
                strokeFilled={"colors.brand.secondary.80"}
            />
        </div>
    )
}