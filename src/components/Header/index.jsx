import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../colors';

const StyledLink = styled(Link)`
   padding: 15px;
   color: #8186a0;
   text-decoration: none;
   font-size: 18px;
   ${(props) => props.$isFullLink
      && `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`;

function Header(props) {
  console.log(props); // eslint-disable-line 
  return (
    <nav>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/survey/1" $isFullLink>Fair le test</StyledLink>
      <StyledLink to="/results">result</StyledLink>
      {/* <StyledLink to="/freelancers">freelancers</StyledLink> */}
    </nav>
  );
}

export default Header;
