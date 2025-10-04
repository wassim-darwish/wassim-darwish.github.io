/* eslint-disable react/jsx-props-no-spreading */
import {
  LazyLoadImage,
  LazyLoadImageProps,
} from "react-lazy-load-image-component";

export default function Image({ ...rest }: LazyLoadImageProps) {
  return <LazyLoadImage {...rest} />;
}
