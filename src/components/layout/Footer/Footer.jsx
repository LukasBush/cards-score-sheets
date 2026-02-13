import "./StylesFooter.css";
import { StylesFooterMUI } from "./StylesFooterMUI";
import { Button } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

export function Footer() {
  return (
    <div className="footer-container">
      <footer className="footer-inner">
        <Button
          fullWidth
          variant="contained"
          endIcon={<PlayArrowIcon />}
          disableRipple
          sx={StylesFooterMUI.button}
        >
          Start Game
        </Button>
      </footer>
    </div>
  );
}
