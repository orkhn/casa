import styled, { css } from "styled-components";
import Link from "next/link";

export const Header = styled.header`
  width: 100%;
  position: sticky;
  left: 0px;
  top: 0px;
  z-index: 10;
  background-color: var(--color-primary);
  background-image: url("/images/632c60c6edb43c4b2018fe6b_Noise2.webp");
  background-position: 0 0;
  background-size: 10rem;
`;

export const Nav = styled.nav`
  width: 144rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: end;
`;

export const NavSection = styled.div`
  height: 8rem;
  display: flex;

  & .nav-menu li:hover {
    background: #ffee9d;
    border-radius: 1rem;
  }
`;
export const List = styled.ul`
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ListItem = styled.li``;

export const Logo = styled.div`
  position: relative;
  width: 18rem;
  margin-left: 2rem;
`;

const NextLink = ({ children, className, style, href }) => (
  <Link href={href}>
    <a className={className} style={style}>
      {children}
    </a>
  </Link>
);

export const LangLink = styled(NextLink)`
  font-size: 1.6rem;
  margin-right: 0.5rem;
`;

export const UserLink = styled(NextLink)`
  font-size: 1.6rem;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 1rem;

  &.apply {
    margin-right: 1rem;
    margin-left: 1rem;
    color: #fff;
    background: #212155;
    border: none;
    border-radius: 1rem;
  }
`;

export const MenuLink = styled(NextLink)`
  font-size: 1.6rem;
  padding: 0.8rem 1.5rem;
  margin: 0 0.6rem 0 0.6rem;
  transition: 0.3s;
  display: flex;
  align-items: center;
  position: relative;

  & li:hover {
    background: #b79a3b;
    border-radius: 1rem;
  }

  span {
    padding-left: 0.8rem;
    font-size: 0.8rem;
  }
`;

export const Dropdown = styled.div`
  padding-top: 1.5rem;
  width: 20rem;
  filter: none;
  position: absolute;
  top: 3.6rem;
  left: -0.7rem;

  & ul {
    background: #fff;
    border-radius: 1.4rem;
    padding: 1rem;
    height: min-content;
    text-align: start;
    display: flex;
    flex-direction: column;
    font-size: 1.6rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 25px 0;

    & li {
      padding: 1rem 1.5rem;
      gap: 1rem;
      border-radius: 0.8rem;

      &:hover {
        background: #eee;
      }
    }
  }
`;

export const LangPicker = styled.div``;
