import { FlexList } from "~components/shared";
import { partnersListItems } from "~utils";
import "./styles.scss";

export function PartnersList() {
    return (
        <FlexList>
            {partnersListItems.map((data) => (
                <li key={data} className="partner-list__item">
                    <img src={data} alt="Partner logo" loading="lazy" className="partner-list__img" />
                </li>
            ))}
        </FlexList>
    );
}
