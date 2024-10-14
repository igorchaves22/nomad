import { useCallback, useEffect, useState } from "react";

const INITIAL_STATE_SCREEN_SIZE = {
    width: window.innerWidth,
    height: window.innerHeight
};
const INITIAL_STATE_SCROLL_Y = window.scrollY;

export const useScreen = () => {
    const [screenSize, setScreenSize] = useState(INITIAL_STATE_SCREEN_SIZE);
    const [scrollY, setScrollY] = useState(INITIAL_STATE_SCROLL_Y);

    const handleScreenSize = useCallback(() => {
        setScreenSize({
            width: window.innerWidth,
            height: window.innerHeight
        });
    }, []);
    const handleScrollY = useCallback(() => {
        setScrollY(window.scrollY);
    }, []);
    const handleClickScrollToTop = useCallback(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    useEffect(() => {
        window.addEventListener("resize", handleScreenSize);

        return () => {
            window.removeEventListener("resize", handleScreenSize);
        };
    }, [handleScreenSize]);
    useEffect(() => {
        window.addEventListener("scroll", handleScrollY);

        return () => {
            window.removeEventListener("scroll", handleScrollY);
        };
    }, [handleScrollY]);

    return { screenSize, scrollY, handleClickScrollToTop };
};
