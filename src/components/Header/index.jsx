import React from "react";

import { Container, Button } from "./styles";
import { ReactComponent as Logo } from "./../../assets/logo.svg";
import { AiOutlinePlus } from "react-icons/ai";

const iconStyle = {
  color: "#FFFFFF",
  height: "11,67px",
  width: "11,67px",
  left: "4,17px",
  top: "4,17px",
  align: "right",
}

function Header() {
  return (
    <Container>
      <Logo />
      <Button>
        <AiOutlinePlus style={iconStyle}/>
        Novo ticket
      </Button>
    </Container>
  );
}

export default Header;
