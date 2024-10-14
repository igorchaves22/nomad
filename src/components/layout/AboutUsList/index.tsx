import { FlexList } from "~components/shared";
import { aboutListItems } from "~utils";
import "./styles.scss";

export function AboutUsList() {
    return (
        <FlexList>
            {aboutListItems.map(({ title, description }) => (
                <li key={description} className="about-us-list__item">
                    <p className="about-us-list__title">{title}</p>
                    <p className="about-us-list__description">{description}</p>
                </li>
            ))}
        </FlexList>
    );
}
