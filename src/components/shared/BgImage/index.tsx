import { ImageType } from "~types";
import "./styles.scss";

interface IBgImageProps extends Pick<ImageType, "src" | "alt"> {}

export function BgImage({ ...rest }: IBgImageProps) {
    return <img loading="lazy" className="bg-image" {...rest} />;
}
