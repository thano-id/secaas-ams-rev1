// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qMKbWqzZjuHb1yLhCiN5Mq
// Component: bCVUuc7VYiYw
import * as React from "react";
import { useRouter } from "next/router";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  renderPlasmicSlot
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import MainPageHeaderMinimal from "../../MainPageHeaderMinimal"; // plasmic-import: 8Q71FYMQzUgF/component
import SideMenuItem from "../../SideMenuItem"; // plasmic-import: fvhUR2yOqw0U/component
import SideMenuSectionHead from "../../SideMenuSectionHead"; // plasmic-import: lRSRG8YACsJd/component
import Me from "../../Me"; // plasmic-import: M7n-Yi6ESK-n/component
import { RichTable } from "@plasmicpkgs/plasmic-rich-components/skinny/rich-table";
import NavMenu from "../../NavMenu"; // plasmic-import: 3imnKZ-iAV2D/component
import { useScreenVariants as useScreenVariants_9QPfl0YfbSni } from "./PlasmicGlobalVariant__Mobile"; // plasmic-import: 9qPFL0yfbSNI/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: qMKbWqzZjuHb1yLhCiN5Mq/projectcss
import sty from "./PlasmicMainPageLayout.module.css"; // plasmic-import: bCVUuc7VYiYw/css
import Building3SvgrepoComSvgIcon from "./icons/PlasmicIcon__Building3SvgrepoComSvg"; // plasmic-import: Rf7C0Vgmu0Zn/icon
import UserCirlceAddSvgrepoComSvgIcon from "./icons/PlasmicIcon__UserCirlceAddSvgrepoComSvg"; // plasmic-import: aq1t0PjDqNmi/icon
import UserOctagonSvgrepoComSvgIcon from "./icons/PlasmicIcon__UserOctagonSvgrepoComSvg"; // plasmic-import: ZNIK1Plt2HkI/icon
import BookSavedSvgrepoComSvgIcon from "./icons/PlasmicIcon__BookSavedSvgrepoComSvg"; // plasmic-import: beTsf8tVlWYp/icon
import BuildingsSvgrepoComSvg2Icon from "./icons/PlasmicIcon__BuildingsSvgrepoComSvg2"; // plasmic-import: YnW0xt9auy5O/icon
import BuildingSvgrepoComSvgIcon from "./icons/PlasmicIcon__BuildingSvgrepoComSvg"; // plasmic-import: 8sTcdDxLmqNz/icon
import Archive2SvgrepoComSvgIcon from "./icons/PlasmicIcon__Archive2SvgrepoComSvg"; // plasmic-import: GmE4DgTrkmB4/icon

createPlasmicElementProxy;

export const PlasmicMainPageLayout__VariantProps = new Array();

export const PlasmicMainPageLayout__ArgProps = new Array(
  "title",
  "description",
  "path",
  "children"
);

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicMainPageLayout__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );
  const $props = {
    ...args,
    ...variants
  };
  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const globalVariants = ensureGlobalVariants({
    mobile: useScreenVariants_9QPfl0YfbSni()
  });
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.root
      )}
    >
      <div className={classNames(projectcss.all, sty.freeBox__sKqc4)}>
        <div
          data-plasmic-name={"sideMenu"}
          data-plasmic-override={overrides.sideMenu}
          className={classNames(projectcss.all, sty.sideMenu)}
        >
          <MainPageHeaderMinimal
            data-plasmic-name={"mainPageHeaderMinimal"}
            data-plasmic-override={overrides.mainPageHeaderMinimal}
            className={classNames("__wab_instance", sty.mainPageHeaderMinimal)}
          />

          <div className={classNames(projectcss.all, sty.freeBox__xWhbW)} />
          <SideMenuItem
            className={classNames("__wab_instance", sty.sideMenuItem___22J8)}
            subtitle={``}
            title={"Dashboard"}
          >
            <Building3SvgrepoComSvgIcon
              className={classNames(projectcss.all, sty.svg__meW)}
              role={"img"}
            />
          </SideMenuItem>
          <SideMenuItem
            className={classNames("__wab_instance", sty.sideMenuItem__u1Cgt)}
            subtitle={``}
            title={"Check in"}
          >
            <UserCirlceAddSvgrepoComSvgIcon
              className={classNames(projectcss.all, sty.svg__tZayh)}
              role={"img"}
            />
          </SideMenuItem>
          <SideMenuItem
            className={classNames("__wab_instance", sty.sideMenuItem___6T6Rx)}
            subtitle={``}
            title={"Check out"}
          >
            <UserOctagonSvgrepoComSvgIcon
              className={classNames(projectcss.all, sty.svg__o7Git)}
              role={"img"}
            />
          </SideMenuItem>
          <SideMenuSectionHead
            className={classNames(
              "__wab_instance",
              sty.sideMenuSectionHead__ysVnj
            )}
            title={"Reports & Stats"}
          />

          <SideMenuItem
            className={classNames("__wab_instance", sty.sideMenuItem__bp9Yo)}
            subtitle={``}
            title={"Visitors"}
          >
            <BookSavedSvgrepoComSvgIcon
              className={classNames(projectcss.all, sty.svg__m4Qr9)}
              role={"img"}
            />
          </SideMenuItem>
          <div className={classNames(projectcss.all, sty.freeBox__vv4J)} />
          <SideMenuSectionHead
            className={classNames(
              "__wab_instance",
              sty.sideMenuSectionHead__ul4K3
            )}
            title={"Settings & Parameters"}
          />

          <SideMenuItem
            className={classNames("__wab_instance", sty.sideMenuItem__ciSdN)}
            subtitle={``}
            title={"Properties"}
          >
            <BuildingsSvgrepoComSvg2Icon
              className={classNames(projectcss.all, sty.svg__chCb)}
              role={"img"}
            />
          </SideMenuItem>
          <SideMenuItem
            className={classNames("__wab_instance", sty.sideMenuItem__shQkn)}
            subtitle={``}
            title={"Tenants"}
          >
            <BuildingSvgrepoComSvgIcon
              className={classNames(projectcss.all, sty.svg__qwhav)}
              role={"img"}
            />
          </SideMenuItem>
          <SideMenuItem
            className={classNames("__wab_instance", sty.sideMenuItem__knRp6)}
            subtitle={``}
            title={"Master data"}
          >
            <Archive2SvgrepoComSvgIcon
              className={classNames(projectcss.all, sty.svg__t7BdJ)}
              role={"img"}
            />
          </SideMenuItem>
          <div className={classNames(projectcss.all, sty.freeBox__w6HAx)} />
          <div
            className={classNames(projectcss.all, sty.freeBox__u41YX)}
            onClick={async event => {
              const $steps = {};
              $steps["goToProfilePage"] = true
                ? (() => {
                    const actionArgs = { destination: `/user/profile` };
                    return (({ destination }) => {
                      if (
                        typeof destination === "string" &&
                        destination.startsWith("#")
                      ) {
                        document
                          .getElementById(destination.substr(1))
                          .scrollIntoView({ behavior: "smooth" });
                      } else {
                        __nextRouter?.push(destination);
                      }
                    })?.apply(null, [actionArgs]);
                  })()
                : undefined;
              if (
                $steps["goToProfilePage"] != null &&
                typeof $steps["goToProfilePage"] === "object" &&
                typeof $steps["goToProfilePage"].then === "function"
              ) {
                $steps["goToProfilePage"] = await $steps["goToProfilePage"];
              }
            }}
          >
            <Me
              data-plasmic-name={"me"}
              data-plasmic-override={overrides.me}
              className={classNames("__wab_instance", sty.me)}
            />
          </div>
        </div>
        <div
          data-plasmic-name={"content"}
          data-plasmic-override={overrides.content}
          className={classNames(projectcss.all, sty.content)}
        >
          <div className={classNames(projectcss.all, sty.freeBox__vsyit)}>
            <section
              data-plasmic-name={"section"}
              data-plasmic-override={overrides.section}
              className={classNames(projectcss.all, sty.section)}
            >
              <div className={classNames(projectcss.all, sty.freeBox__coX9N)}>
                {renderPlasmicSlot({
                  defaultContents: (
                    <React.Fragment>
                      <h4
                        className={classNames(
                          projectcss.all,
                          projectcss.h4,
                          projectcss.__wab_text,
                          sty.h4__gREfP
                        )}
                      >
                        {"Enter some text"}
                      </h4>
                      <dd
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.dd__zTOzJ
                        )}
                      >
                        {"Enter some text"}
                      </dd>
                      {(() => {
                        const child$Props = {
                          className: classNames(
                            "__wab_instance",
                            sty.table__xDaNs
                          ),
                          scopeClassName: sty["table__xDaNs__instance"],
                          themeResetClassName: classNames(
                            projectcss.root_reset,
                            projectcss.root_reset_tags,
                            projectcss.plasmic_default_styles,
                            projectcss.plasmic_mixins,
                            projectcss.plasmic_tokens,
                            plasmic_antd_5_hostless_css.plasmic_tokens,
                            plasmic_plasmic_rich_components_css.plasmic_tokens
                          )
                        };
                        return <RichTable {...child$Props} />;
                      })()}
                    </React.Fragment>
                  ),

                  value: args.children
                })}
              </div>
            </section>
          </div>
          <NavMenu
            data-plasmic-name={"navMenu"}
            data-plasmic-override={overrides.navMenu}
            className={classNames("__wab_instance", sty.navMenu)}
          />
        </div>
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "sideMenu",
    "mainPageHeaderMinimal",
    "me",
    "content",
    "section",
    "navMenu"
  ],

  sideMenu: ["sideMenu", "mainPageHeaderMinimal", "me"],
  mainPageHeaderMinimal: ["mainPageHeaderMinimal"],
  me: ["me"],
  content: ["content", "section", "navMenu"],
  section: ["section"],
  navMenu: ["navMenu"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicMainPageLayout__ArgProps,
          internalVariantPropNames: PlasmicMainPageLayout__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicMainPageLayout__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMainPageLayout";
  } else {
    func.displayName = `PlasmicMainPageLayout.${nodeName}`;
  }
  return func;
}

export const PlasmicMainPageLayout = Object.assign(
  // Top-level PlasmicMainPageLayout renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    sideMenu: makeNodeComponent("sideMenu"),
    mainPageHeaderMinimal: makeNodeComponent("mainPageHeaderMinimal"),
    me: makeNodeComponent("me"),
    content: makeNodeComponent("content"),
    section: makeNodeComponent("section"),
    navMenu: makeNodeComponent("navMenu"),
    // Metadata about props expected for PlasmicMainPageLayout
    internalVariantProps: PlasmicMainPageLayout__VariantProps,
    internalArgProps: PlasmicMainPageLayout__ArgProps
  }
);

export default PlasmicMainPageLayout;
/* prettier-ignore-end */