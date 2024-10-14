import { keyFeaturesItems } from "~utils";
import "./styles.scss";

export function KeyFeaturesList() {
    return (
        <ul className="key-features-list">
            {keyFeaturesItems.map(({ icon, title, text }) => (
                <li key={title} className="key-features-list__item">
                    <img src={icon} alt="Icon" loading="lazy" className="key-features-list__img" />
                    <p className="key-features-list__title">{title}</p>
                    <p className="key-features-list__text">{text}</p>
                </li>
            ))}
        </ul>
    );
}
