import styled from "styled-components";
import {COLORS} from "../../constants/colors";

export const StyledNavBar = styled.nav`
  height: 64px;
  background-color: ${COLORS.NAVBAR};
  font-size: 14px;
  font-weight: 400;
  display: flex;              
  align-items: center;     
  justify-content: flex-start;
  padding: 0 62px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.24);
  position: fixed;
  z-index: 1000;
  width: 100%;
`;

export const StyledLinksList = styled.ul`
  display: flex;
  list-style: none;
  gap: 16px;
  margin: 0;
  padding: 0;
  height: 100%;
`;