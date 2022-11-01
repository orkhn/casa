import * as styled from "./styles";
import { useState } from "react";
import Image from "next/image";

export default function Subscribe() {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <styled.Subscribe>
      <styled.Avocado>
        <Image
          src={`/images/avocado.png`}
          objectFit="cover"
          layout="fixed"
          alt="avocado"
          width={80}
          height={80}
          quality={100}
        />
      </styled.Avocado>
      <styled.Ribbon1>
        <Image
          src={`/images/ribbon1.svg`}
          objectFit="cover"
          layout="fixed"
          alt="avocado"
          width={60}
          height={60}
          quality={100}
        />
      </styled.Ribbon1>
      <styled.Sushi>
        <Image
          src={`/images/sushi.png`}
          objectFit="cover"
          alt="avocado"
          width={320}
          height={280}
          quality={100}
        />
      </styled.Sushi>
      <styled.ImageSection></styled.ImageSection>
      <styled.FormSection>
        <styled.Title>
          <span className="header">Newsletter</span>
          <span>Subscribe for </span>
          <span>Offer Updates</span>
        </styled.Title>
        <styled.Wrapper>
          <styled.InputField>
            <styled.Input
              type="email"
              id="email"
              autoComplete="email"
              minLength="5"
              placeholder="Enter Email Address"
              required
              value={inputValue}
              onChange={onInputChange}
            />
          </styled.InputField>
          <styled.SubmitBtn>
            Subscribe
            <styled.RightArrow />
          </styled.SubmitBtn>
        </styled.Wrapper>
      </styled.FormSection>
    </styled.Subscribe>
  );
}
