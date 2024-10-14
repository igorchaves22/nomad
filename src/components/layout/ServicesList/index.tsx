import { FlexList } from "~components/shared";
import { serviceListItems } from "~utils";
import "./styles.scss";

export function ServicesList() {
    return (
        <FlexList>
            {serviceListItems.map(({ icon, title, description }) => (
                <li key={title} className="services-list__item">
                    <fieldset className="services-list__box">
                        <legend className="services-list__header">
                            <img src={icon} alt={title} className="services-list__img" />
                        </legend>
                        <h5 className="services-list__text services-list__text--title">{title}</h5>
                        <p className="services-list__text">{description}</p>
                    </fieldset>
                </li>
            ))}
        </FlexList>
    );
}
