import React, { Component } from "react";
//**** */
import Header from "./Header";
import Meta from "./Meta";
import styled from "styled-components";

const Mybutton = styled.button`
  background: red;
  font-size: 100px;
`;

export default class Page extends Component {
  render() {
    return (
      <div>
        <Meta />
        <Header />
        <Mybutton>Click Me</Mybutton>
        <p>Hey I'm the page component HERO 6</p>
        {this.props.children}
      </div>
    );
  }
}
