import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  overflow: hidden;
  position: relative;
`;

export const StyledTypography = styled(Typography)`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 1rem;
  padding-top: 4rem;
  width: 100%;
  background-image: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.9) 67.8%
  );
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
  border-radius: 0.5rem;
`;

export const StyledImg = styled.img`
  border-radius: 0.5rem;
  width: 225px;
  height: 320px;
  pointer-events: none;
`;
