import { applyClassNameIfTrue } from "~utils";
import "./styles.scss";

interface ICtaLinkProps {
    alternative?: boolean;
    text: string;
}

export function CtaLink({ alternative, text }: ICtaLinkProps) {
    return (
        <a href="/" className={"cta-link" + applyClassNameIfTrue(!!alternative, "cta-link--alternative")}>
            {text}
        </a>
    );
}
