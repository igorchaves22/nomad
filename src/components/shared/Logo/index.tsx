import logoIcon from "~assets/logo.svg";
import "./styles.scss";

export function Logo() {
    return <img src={logoIcon} alt="Logo" loading="lazy" className="logo" />;
}
