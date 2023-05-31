import React from "react";
import PropTypes from "prop-types";
import Appbar from "../components/Appbar";

function RootPage({ content }) {
  return (
    <>
      <Appbar />
      {content}
    </>
  );
}

RootPage.propTypes = {};

export default RootPage;
