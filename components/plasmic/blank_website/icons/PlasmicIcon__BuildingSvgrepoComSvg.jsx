// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function BuildingSvgrepoComSvgIcon(props) {
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
          "M12.5 7.41V22H4.08c-1.16 0-2.11-.93-2.11-2.07V5.09c0-2.62 1.96-3.81 4.35-2.64l4.43 2.19c.96.47 1.75 1.72 1.75 2.77z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M8.97 9.75H5.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.47a.749.749 0 110 1.5zm0 4H5.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.47a.749.749 0 110 1.5z"
        }
        fill={"currentColor"}
      ></path>

      <path
        opacity={".6"}
        d={
          "M22 15.05v4.45a2.5 2.5 0 01-2.5 2.5h-7V10.42l.47.1 4.04.9.48.11 2.04.46c.49.1.94.27 1.33.52 0 .01.01.01.01.01.1.07.2.15.29.24.46.46.76 1.13.83 2.11 0 .06.01.12.01.18z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M12.5 10.42v6c.46.61 1.18 1 2 1 1.39 0 2.51-1.12 2.51-2.5v-3.49l-4.04-.9-.47-.11zm9.49 4.45c-.07-.98-.37-1.65-.83-2.11-.09-.09-.19-.17-.29-.24 0 0-.01 0-.01-.01-.39-.25-.84-.42-1.33-.52l-2.04-.46-.48-.11v3.5a2.5 2.5 0 002.5 2.5A2.5 2.5 0 0022 15.06v-.01c0-.06-.01-.12-.01-.18z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BuildingSvgrepoComSvgIcon;
/* prettier-ignore-end */