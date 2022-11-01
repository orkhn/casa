import * as styled from "./styles";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Dropdown from "./Dropdown";
import useTranslation from "next-translate/useTranslation";

const Navbar = ({ url }) => {
  const { t } = useTranslation();
  let router = useRouter();

  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const href = "/";

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <styled.Nav url={url}>
      <styled.NavSection>
        <styled.List>
          <styled.ListItem>
            <styled.List>
              {router.locales.map((locale) => (
                <styled.ListItem
                  key={locale}
                  style={{ paddingRight: "0.5rem" }}
                >
                  <Link href={router.asPath} locale={locale}>
                    <a>{locale}</a>
                  </Link>
                </styled.ListItem>
              ))}
            </styled.List>
          </styled.ListItem>
          <styled.ListItem>
            <Link href={href}>
              <a>
                <styled.Logo url={url}>
                  <Image
                    src="/images/logo.png"
                    alt="Casa logo"
                    width={200}
                    height={65}
                    layout="responsive"
                  />
                </styled.Logo>
              </a>
            </Link>
          </styled.ListItem>
          <styled.ListItem>
            <styled.List>
              <styled.ListItem>
                <styled.UserLink href="#">
                  {t("common:loginBtn")}
                </styled.UserLink>
                <styled.UserLink href="#" className={"apply"}>
                  {t("common:applyBtn")}
                </styled.UserLink>
              </styled.ListItem>
            </styled.List>
          </styled.ListItem>
        </styled.List>
      </styled.NavSection>
      <styled.NavSection style={{ height: "5rem" }}>
        <styled.List
          className="nav-menu"
          style={{ borderTop: "1px solid #000", justifyContent: "center" }}
        >
          <styled.ListItem
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <styled.MenuLink href="#">
              <p> {t("common:aboutBtn")}</p> <span>▼</span>
              {dropdown && <Dropdown />}
            </styled.MenuLink>
          </styled.ListItem>
          <styled.ListItem>
            <styled.MenuLink href="#">
              {t("common:educationBtn")}
            </styled.MenuLink>
          </styled.ListItem>
          <styled.ListItem>
            <styled.MenuLink href="#">
              {t("common:restaurantBtn")}
            </styled.MenuLink>
          </styled.ListItem>
          <styled.ListItem>
            <styled.MenuLink href="#">
              {t("common:networkBtn")}
              <span>▼</span>
            </styled.MenuLink>
          </styled.ListItem>
          <styled.ListItem>
            <styled.MenuLink href="#">
              {t("common:visitBtn")} <span>▼</span>
            </styled.MenuLink>
          </styled.ListItem>
          <styled.ListItem>
            <styled.MenuLink href="/contact">
              {t("common:contactBtn")}
            </styled.MenuLink>
          </styled.ListItem>
        </styled.List>
      </styled.NavSection>
    </styled.Nav>
  );
};

export default Navbar;
