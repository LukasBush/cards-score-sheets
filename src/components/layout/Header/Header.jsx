import "./Header.css";
import { StylesHeaderMUI } from "./StylesHeaderMUI";
import HomeIcon from "@mui/icons-material/Home";

export function Header() {
  return (
    <>
      <div className="header-container">
        <header className="main-menu">
          <div className="main-menu-text">
            <h1 className="main-menu-title">Main Menu</h1>
            <p className="main-menu-subtitle">Select a game</p>
          </div>

          <HomeIcon sx={StylesHeaderMUI.icon} />
        </header>
      </div>
    </>
  );
}
