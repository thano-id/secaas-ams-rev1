// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function CardPosSvgrepoComSvgIcon(props) {
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
        d={
          "M21.25 22H2.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18.5c.41 0 .75.34.75.75s-.34.75-.75.75z"
        }
        fill={"currentColor"}
      ></path>

      <path
        opacity={".4"}
        d={
          "M20.59 13.7l-7.23 7.23a3.618 3.618 0 01-5.12.01l-4.61-4.61L15.99 3.97l4.61 4.61a3.618 3.618 0 01-.01 5.12z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M15.99 3.97L3.62 16.33l-.91-.91a3.618 3.618 0 01.01-5.12l7.23-7.23a3.618 3.618 0 015.12-.01l.92.91zm-3.1 13.63l-1.35 1.35c-.28.28-.73.28-1.01 0a.712.712 0 010-1.01l1.35-1.35c.28-.28.73-.28 1.01 0s.28.73 0 1.01zm4.38-4.38l-2.69 2.69c-.28.28-.73.28-1.01 0a.712.712 0 010-1.01l2.69-2.69c.28-.28.73-.28 1.01 0 .27.28.27.73 0 1.01z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CardPosSvgrepoComSvgIcon;
/* prettier-ignore-end */
