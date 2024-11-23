// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function UserOctagonSvgrepoComSvgIcon(props) {
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
          "M21.08 8.58v6.84c0 1.12-.6 2.16-1.57 2.73l-5.94 3.43c-.97.56-2.17.56-3.15 0l-5.94-3.43a3.15 3.15 0 01-1.57-2.73V8.58c0-1.12.6-2.16 1.57-2.73l5.94-3.43c.97-.56 2.17-.56 3.15 0l5.94 3.43c.97.57 1.57 1.6 1.57 2.73z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M12 12a2.33 2.33 0 100-4.66A2.33 2.33 0 0012 12zm2.68 4.66c.81 0 1.28-.9.83-1.57-.68-1.01-2-1.69-3.51-1.69-1.51 0-2.83.68-3.51 1.69-.45.67.02 1.57.83 1.57h5.36z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default UserOctagonSvgrepoComSvgIcon;
/* prettier-ignore-end */
