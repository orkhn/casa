import * as styled from "./styles";
import { MenuItems } from "./MenuItems";

import Link from "next/link";

function Dropdown() {
  return (
    <>
      <styled.Dropdown className={"dropdown-menu"}>
        <ul>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link href={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </styled.Dropdown>
    </>
  );
}

export default Dropdown;
