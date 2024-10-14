import { DivType, IChildren } from "~types";
import { applyClassNameIfTrue } from "~utils";
import "./styles.scss";

interface ISectionContainerProps extends Pick<DivType, "id">, IChildren {
    heroSectionLayout?: boolean;
    horizontalContentOnLargeScreen?: boolean;
    toggleContentPositionOnLargeScreen?: boolean;
}

export function SectionContainer({
    id,
    heroSectionLayout,
    horizontalContentOnLargeScreen,
    toggleContentPositionOnLargeScreen,
    children
}: ISectionContainerProps) {
    return (
        <section
            id={id}
            className={
                "section-container" +
                applyClassNameIfTrue(!!heroSectionLayout, "section-container--hero") +
                applyClassNameIfTrue(!!horizontalContentOnLargeScreen, "section-container--horizontal") +
                applyClassNameIfTrue(!!toggleContentPositionOnLargeScreen, "section-container--toggle-position")
            }
        >
            {children}
        </section>
    );
}
