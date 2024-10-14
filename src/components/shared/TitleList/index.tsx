import { ChildrenType } from "~types";
import "./styles.scss";

interface ITitleListProps {
    title: string;
    items: ChildrenType;
}

export function TitleList({ title, items }: ITitleListProps) {
    return (
        <section className="title-list">
            <h6 className="title-list__title">{title}</h6>
            <ul className="title-list__list">{items}</ul>
        </section>
    );
}
