// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function GrammerlySvgrepoComSvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      fill={"none"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        opacity={".4"}
        d={
          "M19.07 4.95c3.97 3.97 3.9 10.45-.2 14.34-3.79 3.59-9.94 3.59-13.74 0C1.02 15.4.95 8.92 4.93 4.95c3.9-3.91 10.24-3.91 14.14 0z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M12 18.32c-1.58 0-3.15-.57-4.35-1.7a.755.755 0 01-.03-1.06c.29-.3.76-.31 1.06-.03 1.83 1.73 4.81 1.73 6.64 0 .3-.28.78-.27 1.06.03.28.3.27.78-.03 1.06-1.2 1.13-2.77 1.7-4.35 1.7z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default GrammerlySvgrepoComSvgIcon;
/* prettier-ignore-end */