import styled, { css } from "styled-components";
import Link from "next/link";
export const Footer = styled.footer`
  width: 100%;
  height: 40rem;

  background: var(--color-secondary);
  padding: 0 15rem;
`;

export const ContentContainer = styled.div`
  margin: 0 auto;
  width: 80%;
  height: 100%;
  padding-bottom: 2rem;
  font-size: 1.6rem;
  color: var(--color-white);
  display: flex;
  flex-direction: column;
`;

export const Info = styled.section`
  width: 100%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > div {
    display: flex;
    flex-direction: column;
    padding-top: 5rem;
  }
`;

const NextLink = ({ children, className, style, href }) => (
  <Link href={href}>
    <a className={className} style={style}>
      {children}
    </a>
  </Link>
);
export const Copyrights = styled.section`
  width: 100%;
  height: 30%;
  border-top: 0.1rem solid #7b7d8e;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CompanyLogo = styled.div`
  height: 100%;
  font-size: 1.2rem;
`;
export const Service = styled.div`
  height: 100%;
`;
export const Resources = styled.div`
  height: 100%;
`;
export const Contact = styled.div`
  height: 100%;
`;

export const Header = styled.h4`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #7b7d8e;
`;

export const FooterList = styled.ul``;

export const FooterListItem = styled.li`
  padding-bottom: 1.5rem;
`;
export const FooterLink = styled(NextLink)``;
