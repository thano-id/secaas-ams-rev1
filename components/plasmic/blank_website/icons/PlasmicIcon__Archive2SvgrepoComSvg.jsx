// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Archive2SvgrepoComSvgIcon(props) {
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
          "M16.19 2H7.82C4.18 2 2.01 4.17 2.01 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M19 15h-.25V7.75C18.75 6.23 17.52 5 16 5H8C6.48 5 5.25 6.23 5.25 7.75V15H5c-.41 0-.75.34-.75.75s.34.75.75.75h3.84C9.18 17.93 10.47 19 12 19c1.53 0 2.82-1.07 3.16-2.5H19c.41 0 .75-.34.75-.75S19.41 15 19 15zm-2.21-3.12a4.39 4.39 0 00-.19-.06c-.2-.04-.4-.07-.61-.07h-8c-.21 0-.41.03-.61.07-.06.01-.12.04-.19.06-.13.04-.26.08-.38.14-.03.01-.06.02-.08.03V11c0-.69.56-1.25 1.25-1.25h8c.69 0 1.25.56 1.25 1.25v1.05c-.03-.01-.05-.02-.08-.03-.1-.06-.23-.1-.36-.14zM8 6.5h8c.69 0 1.25.56 1.25 1.25v.81c-.38-.19-.8-.31-1.25-.31H8c-.45 0-.87.12-1.25.31v-.81c0-.69.56-1.25 1.25-1.25zm6.5 8.5c-.41 0-.75.34-.75.75 0 .96-.79 1.75-1.75 1.75s-1.75-.79-1.75-1.75c0-.41-.34-.75-.75-.75H6.75v-.5c0-.69.56-1.25 1.25-1.25h8c.69 0 1.25.56 1.25 1.25v.5H14.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Archive2SvgrepoComSvgIcon;
/* prettier-ignore-end */