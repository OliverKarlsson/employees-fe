import clsx from "clsx";
import style from "./Image.module.scss";

type ImageElementProps = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

interface ImageProps extends Omit<ImageElementProps, "srcSet" | "sizes"> {
  src: string;
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
const Image = ({ variant, ...rest }: ImageProps) => (
  <img
    className={clsx(style.image, [
      variant === "grid-portrait" && style["image--grid-portrait"],
      variant === "row-portrait" && style["image--row-portrait"],
    ])}
    {...rest}
  />
);

export default Image;
