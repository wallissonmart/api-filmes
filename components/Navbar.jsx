import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "../src/App.scss";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 2rem 0;

  .link {
    text-decoration: none;
  }
`;

const Ul = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  list-style-type: none;
`;

const Li = styled.span`
  color: #fff;
  font-size: 2.0rem;
  font-weight: 600;

  &:hover {
    color: #8f8484;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Ul>
        <li>
          <Link className="link" to={`/`}>
            <Li className="li-filmes">FILMES</Li>
          </Link>
        </li>
        <li>
          <Link className="link" to={`/series`}>
            <Li className="li-series">SÉRIES</Li>
          </Link>
        </li>
      </Ul>
    </Nav>
  );
};

export default Navbar;
