import { IChildren } from "~types";
import "./styles.scss";

interface IFlexListProps extends IChildren {}

export function FlexList({ children }: IFlexListProps) {
    return <ul className="flex-list">{children}</ul>;
}
