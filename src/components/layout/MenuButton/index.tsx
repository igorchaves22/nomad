import { PhosphorIcon } from "~components/shared";
import { ButtonType, IPhosphorIcon } from "~types";
import { renderElementIfTrue } from "~utils";
import "./styles.scss";

interface IMenuButtonProps extends Pick<ButtonType, "onClick">, IPhosphorIcon {
    isVisible: boolean;
}

export function MenuButton({ isVisible, icon, onClick }: IMenuButtonProps) {
    return renderElementIfTrue(
        isVisible,
        <button type="button" onClick={onClick} className="menu-button">
            <PhosphorIcon icon={icon} className="menu-button__icon" />
        </button>
    );
}
