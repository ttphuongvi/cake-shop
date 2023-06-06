import React from "react";
import PropTypes from "prop-types";
import DialogAdvanced from "./Advanced/DialogAdvanced";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
} from "@mui/material";
import { ButtonPrimary } from "./Styled/ButtonPrimary";
import { Visibility, VisibilityOff } from "@mui/icons-material";

function DialogLogin({ open, onClose, onLogin }) {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <DialogAdvanced
      open={open}
      onClose={onClose}
      title={"Đăng nhập"}
      content={
        <Stack spacing={2}>
          <FormControl>
            <InputLabel htmlFor="component-outlined">Email</InputLabel>
            <OutlinedInput
              id="component-outlined-email"
              defaultValue="Email"
              label="Email"
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="component-outlined">Mật khẩu</InputLabel>
            <OutlinedInput
              id="component-outlined-password"
              type={showPassword ? "text" : "password"}
              label="Mật khẩu"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Stack>
      }
      action={<ButtonPrimary onClick={onLogin}>Đăng nhập</ButtonPrimary>}
    ></DialogAdvanced>
  );
}

DialogLogin.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onLogin: PropTypes.func, // hàm xử lý khi đăng nhập
};

export default DialogLogin;
