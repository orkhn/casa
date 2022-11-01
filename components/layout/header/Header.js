import * as styled from "./styles";
import Navbar from "./Navbar";

import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const url = router.pathname;

  return (
    <styled.Header url={url}>
      <Navbar url={url} />
    </styled.Header>
  );
};

export default Header;
