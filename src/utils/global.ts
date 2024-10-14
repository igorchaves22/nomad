import { ChildrenType } from "~types";

export const renderElementIfTrue = (condition: boolean, element: ChildrenType) => {
    return condition ? element : null;
};

export const applyClassNameIfTrue = (condition: boolean, className: string) => {
    return condition ? ` ${className}` : "";
};
