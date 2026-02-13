import "./StylesFooter.css";
import { StylesFooterMUI } from "./StylesFooterMUI";
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export function Footer() {
  return (
    <div className="footer-container">
      <footer className="footer-inner">
        <Button
          fullWidth
          variant="contained"
          endIcon={<ArrowForwardIcon />}
          disableRipple
          sx={StylesFooterMUI.button}
        >
          Enter Player Names
        </Button>
      </footer>
    </div>
  );
}
