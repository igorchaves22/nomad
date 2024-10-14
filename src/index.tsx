import { ChildrenType } from "~types";
import { applyClassNameIfTrue } from "~utils";
import "./styles.scss";

interface ISectionContainerProps {
    heightScreen?: boolean;
    paddingTopBig?: boolean;
    horizontalContentOnLargeScreen?: boolean;
    toggleContentPositionOnLargeScreen?: boolean;
    content: {
        first: ChildrenType;
        second: ChildrenType;
    };
}

export function SectionContainer({
    heightScreen,
    paddingTopBig,
    horizontalContentOnLargeScreen,
    toggleContentPositionOnLargeScreen,
    content
}: ISectionContainerProps) {
    return (
        <section
            className={
                "section-container" +
                applyClassNameIfTrue(!!heightScreen, "section-container--height-screen") +
                applyClassNameIfTrue(!!paddingTopBig, "section-container--padding-top-big") +
                applyClassNameIfTrue(
                    !!horizontalContentOnLargeScreen,
                    "section-container--horizontal-content-on-large-screen"
                ) +
                applyClassNameIfTrue(
                    !!toggleContentPositionOnLargeScreen,
                    "section-container--toggle-content-position-on-large-screen"
                )
            }
        >
            {content.first}
            {content.second}
        </section>
    );
}
