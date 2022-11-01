import * as styled from "./styles";
import Image from "next/image";
import { useRouter } from "next/router";

export default function FooterContent() {
  const router = useRouter();
  const url = router.pathname;
  return (
    <styled.ContentContainer>
      <styled.Info>
        <styled.CompanyLogo>
          <Image
            src={`/images/casa-dark.png`}
            objectFit="contain"
            alt="casa logo"
            width={200}
            height={65}
            quality={100}
          />
        </styled.CompanyLogo>
        <styled.Service>
          <styled.Header>Service</styled.Header>
          <styled.FooterList>
            <styled.FooterListItem>
              <styled.FooterLink href="/about">About CASA</styled.FooterLink>
            </styled.FooterListItem>
            <styled.FooterListItem>
              <styled.FooterLink href={"#"}>Our Team</styled.FooterLink>
            </styled.FooterListItem>
            <styled.FooterListItem>
              <styled.FooterLink href={"#"}>Accreditation</styled.FooterLink>
            </styled.FooterListItem>
            <styled.FooterListItem>
              <styled.FooterLink href={"#"}>
                CSR / Sustainability
              </styled.FooterLink>
            </styled.FooterListItem>
          </styled.FooterList>
        </styled.Service>
        <styled.Resources>
          <styled.Header>Resources</styled.Header>
          <styled.FooterList>
            <styled.FooterListItem>
              <styled.FooterLink href={"#"}>
                Our Sponsors&Partners
              </styled.FooterLink>
            </styled.FooterListItem>
            <styled.FooterListItem>
              <styled.FooterLink href={"#"}>Sponsorship</styled.FooterLink>
            </styled.FooterListItem>
            <styled.FooterListItem>
              <styled.FooterLink href={"#"}>Partnership</styled.FooterLink>
            </styled.FooterListItem>
            <styled.FooterListItem>
              <styled.FooterLink href={"#"}>Privacy Policy</styled.FooterLink>
            </styled.FooterListItem>
          </styled.FooterList>
        </styled.Resources>
        <styled.Contact>
          <styled.Header>Contact</styled.Header>
          <styled.FooterList>
            <styled.FooterListItem>
              <styled.FooterLink href={"#"}>About CASA</styled.FooterLink>
            </styled.FooterListItem>
            <styled.FooterListItem>
              <styled.FooterLink href={"#"}>Our Team</styled.FooterLink>
            </styled.FooterListItem>
            <styled.FooterListItem>
              <styled.FooterLink href={"#"}>Accreditation</styled.FooterLink>
            </styled.FooterListItem>
            <styled.FooterListItem>
              <styled.FooterLink href={"#"}>
                CSR / Sustainability
              </styled.FooterLink>
            </styled.FooterListItem>
          </styled.FooterList>
        </styled.Contact>
      </styled.Info>
      <styled.Copyrights>
        <span>&copy; 2022 Casa.az &nbsp; All rights reserved</span>
      </styled.Copyrights>
    </styled.ContentContainer>
  );
}
