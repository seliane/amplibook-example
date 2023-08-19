import {HeroLayout2} from "../ui-components";

export default function About() {
    const aboutStyleOverrides ={
        "HeroLayout2": {
            padding: {
                    base: "2em 5em 2em 5em",
                    medium: "5em 10em 5em 10em",
                    large: "10em 15em 10em 15em",
                }
        },
        "Button": {
            display: "none"
        }
    }
    return (
        <div>
            <h1>About</h1>
            <HeroLayout2
                overrides={aboutStyleOverrides}
                width={"100%"}
            />
        </div>
    );
}