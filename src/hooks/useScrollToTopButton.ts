import { useEffect } from "react";
import { useScreen } from "./useScreen";
import { useToggle } from "./useToggle";

const INITIAL_STATE_VISIBLE = {
    initialState: false,
    alternativeState: true
};
const SCROLL_THRESHOLD = 20;

export const useScrollToTopButton = () => {
    const { state: isVisible, handleState: handleIsVisible } = useToggle(INITIAL_STATE_VISIBLE);
    const { scrollY, handleClickScrollToTop } = useScreen();

    useEffect(() => {
        handleIsVisible(scrollY >= SCROLL_THRESHOLD);
    }, [handleIsVisible, scrollY]);

    return { isVisible, handleClickScrollToTop };
};
