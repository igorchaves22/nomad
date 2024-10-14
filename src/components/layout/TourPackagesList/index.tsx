import { FlexList, PhosphorIcon } from "~components/shared";
import { tourPackagesListItems } from "~utils";
import "./styles.scss";

export function TourPackagesList() {
    return (
        <FlexList>
            {tourPackagesListItems.map(({ image, location, rating, price, days }) => (
                <li key={location} className="tour-packages-list__item">
                    <div className="tour-packages-list__box">
                        <PhosphorIcon icon="Sparkle" />
                        <p className="tour-packages-list__text tour-packages-list__text--sm">{rating}</p>
                    </div>
                    <div className="tour-packages-list__box">
                        <PhosphorIcon icon="CurrencyCircleDollar" />
                        <p className="tour-packages-list__text tour-packages-list__text--sm">{price}</p>
                    </div>
                    <img src={image} alt={location} loading="lazy" className="tour-packages-list__img" />
                    <h6 className="tour-packages-list__text">{location}</h6>
                    <p className="tour-packages-list__text tour-packages-list__text--sm">{days} days tour</p>
                </li>
            ))}
        </FlexList>
    );
}
