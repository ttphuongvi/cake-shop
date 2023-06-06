import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ButtonPrimary = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  boxShadow: "0px 17px 27px rgba(240,69,6,0.27)",
  backgroundImage: "linear-gradient(to left, #F04506, #d83e06, #F04506)",
  color: theme.palette.common.white,
  padding: theme.spacing(1, 3),
  fontWeight: 400,
  borderRadius: 30,
}));
