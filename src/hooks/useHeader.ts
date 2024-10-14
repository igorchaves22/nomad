import { useCallback } from "react";
import { PhosphorIconsLibraryType } from "~types";
import { useScreen } from "./useScreen";
import { useToggle } from "./useToggle";

const SCREEN_BRAKPOINT = 992;
const INITIAL_STATE_VISIBILITY = {
    initialState: false,
    alternativeState: true
};

export const useHeader = () => {
    const { screenSize } = useScreen();
    const { state: visibility, handleState: handleVisibility } = useToggle(INITIAL_STATE_VISIBILITY);

    const itsOnLargeScreen = screenSize.width >= SCREEN_BRAKPOINT;
    const menuButtonIcon: PhosphorIconsLibraryType = visibility ? "X" : "List";
    const renderMenuButton = !itsOnLargeScreen;
    const renderContent = visibility || itsOnLargeScreen;
    const handleClickToggleVisibility = useCallback(() => {
        if (itsOnLargeScreen) {
            return null;
        }

        handleVisibility();
    }, [itsOnLargeScreen, handleVisibility]);

    return { renderMenuButton, renderContent, menuButtonIcon, handleClickToggleVisibility };
};
