//https://stackoverflow.com/questions/61339259/how-to-dynamically-import-svg-and-render-it-inline
import { ComponentProps } from "react";

import dynamic from "next/dynamic";

interface LazySvgProps extends ComponentProps<"svg"> {
  name: string;
}

export const LazySvg = async ({ name, ...props }: LazySvgProps) => {
  const Svg = dynamic(() => import(`/assets/images/CCA-Logo-mobile.svg`));

  // Or without using `dynamic`:
  // We use `default` here because `@svgr/webpack` converts all other *.svg imports to React components, this might be different for other loaders.
  // const Svg = (await import(`@/assets/${name}.svg`)).default;

  return <Svg {...props} />;
};
