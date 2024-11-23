// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function BuildingsSvgrepoComSvg2Icon(props) {
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
        opacity={".6"}
        d={"M10.11 4c-.08.3-.11.63-.11 1v3H5V6c0-1.1.9-2 2-2h3.11z"}
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M10 19V8H5c-2 0-3 1-3 3v8c0 2 1 3 3 3h8c-2 0-3-1-3-3zm-3.25-2c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-4c0-.41.34-.75.75-.75s.75.34.75.75v4z"
        }
        fill={"currentColor"}
      ></path>

      <path
        opacity={".4"}
        d={
          "M14 22h-1c-2 0-3-1-3-3V5c0-2 1-3 3-3h6c2 0 3 1 3 3v14c0 2-1 3-3 3h-1"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M18 18v4h-4v-4c0-.55.45-1 1-1h2c.55 0 1 .45 1 1zm-4-4.25c-.41 0-.75-.34-.75-.75V8c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75zm4 0c-.41 0-.75-.34-.75-.75V8c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BuildingsSvgrepoComSvg2Icon;
/* prettier-ignore-end */
