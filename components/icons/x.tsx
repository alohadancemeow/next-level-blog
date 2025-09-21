import * as React from "react";
import { SVGProps } from "react";

export const XLogoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    {...props}
  >
    <g stroke="currentColor" strokeWidth={2}>
      <path d="M6 5h6l14 22h-6L6 5ZM14.235 17.941 6 27.001M26 5l-8.235 9.059" />
    </g>
  </svg>
);
export default XLogoIcon;
