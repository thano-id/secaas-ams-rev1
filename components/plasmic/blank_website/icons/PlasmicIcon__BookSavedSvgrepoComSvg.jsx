// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function BookSavedSvgrepoComSvgIcon(props) {
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
          "M12 5.3v16.03c.17 0 .35-.03.49-.11l.04-.02c1.92-1.05 5.27-2.15 7.44-2.44l.29-.04c.96-.12 1.74-1.02 1.74-1.98V4.66c0-1.19-.97-2.09-2.16-1.99-2.1.17-5.28 1.23-7.06 2.34l-.25.15c-.15.09-.34.14-.53.14z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M2 4.67v12.07c0 .96.78 1.86 1.74 1.98l.33.04c2.18.29 5.54 1.4 7.46 2.46.13.08.29.11.47.11V5.3c-.19 0-.38-.05-.53-.14l-.17-.11C9.52 3.93 6.33 2.86 4.23 2.68h-.06C2.98 2.58 2 3.47 2 4.67zm17-1.89v4.29c0 .4-.44.64-.78.42L17 6.68l-1.22.81a.504.504 0 01-.78-.42V3.92c1.31-.52 2.77-.94 4-1.14z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BookSavedSvgrepoComSvgIcon;
/* prettier-ignore-end */