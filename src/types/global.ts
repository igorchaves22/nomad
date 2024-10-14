import {
    AnchorHTMLAttributes,
    ButtonHTMLAttributes,
    ComponentType,
    HTMLAttributes,
    ImgHTMLAttributes,
    ReactNode,
    SVGProps
} from "react";
import { PhosphorIconsLibraryType } from "./phosphor-icons";

export type FunctionType<T = void, R = void> = (params: T) => R;
export type AnchorType = AnchorHTMLAttributes<HTMLAnchorElement>;
export type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>;
export type DivType = HTMLAttributes<HTMLDivElement>;
export type ImageType = ImgHTMLAttributes<HTMLImageElement>;
export type SvgElementType = ComponentType<SVGProps<SVGSVGElement>>;
export type SvgPropsType = SVGProps<SVGSVGElement>;
export type ChildrenType = ReactNode;

export interface IChildren {
    children: ChildrenType;
}
export interface IPhosphorIcon {
    icon: PhosphorIconsLibraryType;
}
