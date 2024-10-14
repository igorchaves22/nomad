import { topDestinationListItems } from "~utils";
import "./styles.scss";

export function TopDestinationList() {
    return (
        <ul className="top-destination-list">
            {topDestinationListItems.map(({ image, name, country }) => (
                <li key={name} className="top-destination-list__item">
                    <span className="top-destination-list__county">{country}</span>
                    <figure className="top-destination-list__box">
                        <img src={image} alt={name} loading="lazy" className="top-destination-list__img" />
                        <figcaption className="top-destination-list__name">{name}</figcaption>
                    </figure>
                </li>
            ))}
        </ul>
    );
}
