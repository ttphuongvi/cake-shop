import { AppBar, Button, Grid, Link, Toolbar } from "@mui/material";
import React from "react";
import logo from "../images/logo_bum.png";
import menuRoutes from "../routes/menuRoutes";
import { styled } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import DialogLogin from "./DialogLogin";
import MenuUser from "./MenuUser";
import DialogRegister from "./DialogRegister";
import CallIcon from "@mui/icons-material/Call";

const StyledNav = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: "400",
}));

const Appbar = () => {
  // handle DialogLogin
  const [openLogin, setOpenLogin] = React.useState(false);
  const handleOpenLogin = () => {
    setOpenLogin(true);
  };
  const handleCloseLogin = () => {
    setOpenLogin(false);
  };

  // hàm xử lý khi đăng nhập
  const [isLogin, setIsLogin] = React.useState(false);
  const handleLogin = () => {
    setIsLogin(true);
    handleCloseLogin();
  };

  // hàm xử lý khi đăng xuất
  const handleLogout = () => {
    setIsLogin(false);
  };

  // handle DialogRegister
  const [openRegister, setOpenRegister] = React.useState(false);
  const handleOpenRegister = () => {
    setOpenRegister(true);
  };
  const handleCloseRegister = () => {
    setOpenRegister(false);
  };

  // hàm xử lý khi đăng ký
  const handleRegister = () => {
    handleCloseRegister();
    handleOpenLogin();
  };
  return (
    <>
      <AppBar
        sx={(theme) => ({
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,
        })}
      >
        <Toolbar>
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent={"space-between"}
          >
            {/* navbar */}
            <Grid item>
              <Grid container spacing={2} alignItems="center">
                {/* logo */}
                <Grid item>
                  <img
                    style={{ transform: "scale(0.8)" }}
                    src={logo}
                    alt="logo"
                  ></img>
                </Grid>

                {menuRoutes.map((item) => {
                  return (
                    <Grid item key={item.label}>
                      <StyledNav component={NavLink} to={item.path}>
                        {item.label}
                      </StyledNav>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>

            {/* action, setting */}
            <Grid item>
              {/* order by call */}
              <Button
                component={Link}
                href="tel:0327009334"
                startIcon={<CallIcon />}
              >
                0327009334
              </Button>
              |{/* order by login */}
              {isLogin ? (
                <MenuUser handleLogout={handleLogout} />
              ) : (
                <>
                  <Button onClick={handleOpenLogin}>Đăng nhập</Button>|{" "}
                  <Button onClick={handleOpenRegister}>Đăng ký</Button>{" "}
                </>
              )}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <DialogLogin
        open={openLogin}
        onClose={handleCloseLogin}
        onLogin={handleLogin}
      />
      <DialogRegister
        open={openRegister}
        onClose={handleCloseRegister}
        onRegister={handleRegister}
      />
    </>
  );
};

export default Appbar;
