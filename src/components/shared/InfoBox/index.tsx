import { ChildrenType } from "~types";
import { applyClassNameIfTrue, renderElementIfTrue } from "~utils";
import "./styles.scss";

interface IInfoBoxProps {
    size?: "sm" | "md" | "lg";
    leftLayoutOnLargeScreen?: boolean;
    subtitle: string;
    title?: string;
    description?: string;
    content?: ChildrenType;
}

export function InfoBox({ size, leftLayoutOnLargeScreen, subtitle, title, description, content }: IInfoBoxProps) {
    return (
        <section
            className={
                "info-box" +
                applyClassNameIfTrue(!!size, `info-box--size-${size}`) +
                applyClassNameIfTrue(!!leftLayoutOnLargeScreen, "info-box--left-layout-on-large-screen")
            }
        >
            <section
                className={
                    "info-box__panel" +
                    applyClassNameIfTrue(!!leftLayoutOnLargeScreen, "info-box--left-layout-on-large-screen")
                }
            >
                <h6
                    className={
                        "info-box__text info-box__text--subtitle" +
                        applyClassNameIfTrue(!!leftLayoutOnLargeScreen, "info-box__text--left-layout-on-large-screen")
                    }
                >
                    {subtitle}
                </h6>
                {renderElementIfTrue(
                    !!title,
                    <h1
                        className={
                            "info-box__text info-box__text--title" +
                            applyClassNameIfTrue(
                                !!leftLayoutOnLargeScreen,
                                "info-box__text--left-layout-on-large-screen"
                            )
                        }
                    >
                        {title}
                    </h1>
                )}
                {renderElementIfTrue(
                    !!description,
                    <p
                        className={
                            "info-box__text" +
                            applyClassNameIfTrue(
                                !!leftLayoutOnLargeScreen,
                                "info-box__text--left-layout-on-large-screen"
                            )
                        }
                    >
                        {description}
                    </p>
                )}
            </section>
            {renderElementIfTrue(!!content, content)}
        </section>
    );
}
