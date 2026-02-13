//Material UI
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Box from "@mui/material/Box";
import ListItemText from "@mui/material/ListItemText";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Typography } from "@mui/material";

//Project Imports
import { GameArray } from "./GameObject.js";
import { useNavigate } from "react-router-dom";

//Styles
import { StylesMainMenuMUI } from "./StylesMainMenuMUI.js";
import "./StylesMainMenu.css";

export function MainMenu() {
  const navigate = useNavigate();
  return (
    <>
      <nav className="main-menu-container">
        <List sx={StylesMainMenuMUI.list}>
          {GameArray.map((item, index) => {
            const Icon = item.icon;

            return (
              <ListItem
                key={index}
                disablePadding
                sx={StylesMainMenuMUI.listItem}
              >
                <ListItemButton
                  sx={StylesMainMenuMUI.button}
                  onClick={() => navigate(item.route)}
                >
                  <Box sx={StylesMainMenuMUI.iconBadge}>{Icon && <Icon />}</Box>
                  <ListItemText
                    primary={
                      <Typography sx={StylesMainMenuMUI.title}>
                        {item.name}
                      </Typography>
                    }
                  />
                  <ChevronRightIcon sx={StylesMainMenuMUI.chevron} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </nav>
    </>
  );
}
