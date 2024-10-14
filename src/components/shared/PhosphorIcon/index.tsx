import { IPhosphorIcon, SvgElementType, SvgPropsType } from "~types";
import { PhosphorIconsLibrary } from "~utils";

interface IPhosphorIconProps extends SvgPropsType, IPhosphorIcon {}

export function PhosphorIcon({ icon, ...rest }: IPhosphorIconProps) {
    const Component = PhosphorIconsLibrary[icon] as SvgElementType;

    return <Component {...rest} />;
}
