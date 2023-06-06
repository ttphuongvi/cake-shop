import React from "react";
import PropTypes from "prop-types";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

function DialogAdvanced({ open, onClose, title, content, action }) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Dialog open={open} onClose={onClose} fullScreen={fullScreen}>
      <DialogTitle sx={{ m: 0, p: 2 }}>
        {title}
        <IconButton
          aria-label="close"
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
          onClick={onClose}
        >
          <Close />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers>{content}</DialogContent>
      <DialogActions sx={{ padding: 2 }}>{action}</DialogActions>
    </Dialog>
  );
}

DialogAdvanced.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  title: PropTypes.string, // tiêu đề của dialog
  content: PropTypes.element, // nội dung của dialog
  action: PropTypes.element, // hành động của dialog
};

export default DialogAdvanced;
