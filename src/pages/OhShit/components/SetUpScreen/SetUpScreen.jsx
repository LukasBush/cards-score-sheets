import StyleIcon from "@mui/icons-material/Style";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { StylesSetUpScreenMUI } from "./StylesSetUpScreenMUI";
import "./StylesSetUpScreen.css";
import { IconButton, Box, Select, Typography, MenuItem } from "@mui/material";

export function SetUpScreen() {
  return (
    <>
      <div className="setup-header">
        <Box sx={StylesSetUpScreenMUI.iconBadge}>
          <StyleIcon />
        </Box>
        <h1>Setup Game Rules</h1>
        <h3>Configure game parameters</h3>
      </div>

      <div className="setup-sub-header">
        <h3>How many are playing?</h3>
        <p>* 2 players are required</p>
      </div>
      <div className="player-count-button-row">
        <Box sx={StylesSetUpScreenMUI.counterBox}>
          <IconButton sx={StylesSetUpScreenMUI.counterIcon}>
            <RemoveIcon />
          </IconButton>

          <Box sx={StylesSetUpScreenMUI.counterValueBox}>
            <Typography sx={StylesSetUpScreenMUI.counterValueText}>
              4
            </Typography>
          </Box>

          <IconButton sx={StylesSetUpScreenMUI.counterIcon}>
            <AddIcon />
          </IconButton>
        </Box>
      </div>

      <div className="setup-sub-header">
        <h3>How many rounds?</h3>
        <p>* Max rounds detemined by player count</p>
      </div>
      <div className="round-select">
        <Select sx={StylesSetUpScreenMUI.select} label="Number of rounds">
          <MenuItem>10 rounds</MenuItem>
          <MenuItem>10 rounds</MenuItem>
          <MenuItem>10 rounds</MenuItem>
          <MenuItem>10 rounds</MenuItem>
          <MenuItem>10 rounds</MenuItem>
          <MenuItem>10 rounds</MenuItem>
          <MenuItem>10 rounds</MenuItem>
          <MenuItem>10 rounds</MenuItem>
          <MenuItem>10 rounds</MenuItem>
          <MenuItem>10 rounds</MenuItem>
          <MenuItem>10 rounds</MenuItem>
          <MenuItem>10 rounds</MenuItem>
          <MenuItem>10 rounds</MenuItem>
          <MenuItem>10 rounds</MenuItem>
          <MenuItem>10 rounds</MenuItem>
          <MenuItem>10 rounds</MenuItem>
          <MenuItem>10 rounds</MenuItem>
          <MenuItem>10 rounds</MenuItem>
          <MenuItem>10 rounds</MenuItem>
          <MenuItem>10 rounds</MenuItem>
          <MenuItem>10 rounds</MenuItem>
          <MenuItem>10 rounds</MenuItem>
        </Select>
      </div>
    </>
  );
}
