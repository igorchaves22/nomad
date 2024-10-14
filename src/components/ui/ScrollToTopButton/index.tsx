import { PhosphorIcon } from "~components/shared";
import { useScrollToTopButton } from "~hooks";
import { renderElementIfTrue } from "~utils";
import "./styles.scss";

export function ScrollToTopButton() {
    const { isVisible, handleClickScrollToTop } = useScrollToTopButton();

    return renderElementIfTrue(
        isVisible,
        <button type="button" onClick={() => handleClickScrollToTop()} className="scroll-to-top-button">
            <PhosphorIcon icon="CaretUp" className="scroll-to-top-button__icon" />
        </button>
    );
}
