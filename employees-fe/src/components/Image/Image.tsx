import clsx from "clsx";
import style from "./Image.module.scss";

type ImageElementProps = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

interface ImageProps
  extends Omit<ImageElementProps, "src" | "srcSet" | "sizes"> {
  src: string | null;
  alt: string;
  variant: "grid-portrait" | "row-portrait";
}

/**
 * Component to handle images
 * @remarks
 * - We don't support srcSet/sizes (altough it would've been nice)
 * @param props
 * @returns
 */
const Image = ({ variant, src, className, ...rest }: ImageProps) =>
  src ? (
    <img
      src={src}
      className={clsx(style.image, className, [
        variant === "grid-portrait" && style["image--grid-portrait"],
        variant === "row-portrait" && style["image--row-portrait"],
      ])}
      {...rest}
    />
  ) : (
    <div
      className={clsx(style.image, style["image--without-src"], [
        variant === "grid-portrait" && style["image--grid-portrait"],
        variant === "row-portrait" && style["image--row-portrait"],
      ])}
    />
  );

export default Image;
