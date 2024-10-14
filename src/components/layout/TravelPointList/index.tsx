import { FlexList } from "~components/shared";
import { travelPointListItems } from "~utils";
import "./styles.scss";

export function TravelPointList() {
    return (
        <FlexList>
            {travelPointListItems.map(({ title, description }) => (
                <li key={title} className="travel-point-list__item">
                    <p className="travel-point-list__title">{title}</p>
                    <p className="travel-point-list__description">{description}</p>
                </li>
            ))}
        </FlexList>
    );
}
