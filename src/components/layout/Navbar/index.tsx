import { AnchorType } from "~types";
import { navbarItems } from "~utils";
import "./styles.scss";

interface INavbarProps extends Pick<AnchorType, "onClick"> {}

export function Navbar({ onClick }: INavbarProps) {
    return (
        <nav className="navbar">
            <ul className="navbar__container">
                {navbarItems.map(({ href, title }) => (
                    <li key={title} className="navbar__item">
                        <a href={href} onClick={onClick} className="navbar__link">
                            {title}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
