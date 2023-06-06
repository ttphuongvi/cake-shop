import React from "react";
import PropTypes from "prop-types";
import Appbar from "../components/Appbar";
import { Box } from "@mui/material";

function RootPage({ content }) {
  return (
    <>
      <Appbar />
      <Box sx={(theme) => ({ marginTop: "64px" })}>{content}</Box>
    </>
  );
}

RootPage.propTypes = {
  content: PropTypes.element,
};

export default RootPage;
