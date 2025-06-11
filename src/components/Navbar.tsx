import * as React from "react";
import Dropdown from "@mui/joy/Dropdown";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import Switch from "@mui/joy/Switch";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import DarkModeIcon from "@mui/icons-material/DarkMode";

type Props = {
  setMode: React.Dispatch<React.SetStateAction<"system" | "light" | "dark">>;
  mode: "system" | "light" | "dark";
};

const Navbar: React.FC<Props> = ({ mode, setMode }) => {
  return (
    <div className="menu-container" style={{ position: "absolute", top: "20px", right: "20px" }}>
      <Dropdown>
        <MenuButton color={mode === "light" ? "primary" : "neutral"}>Menu</MenuButton>
        <Menu>
          <MenuItem>Generate Invoice</MenuItem>
          <MenuItem>View Invoices</MenuItem>
          <MenuItem>Logout</MenuItem>
          <MenuItem>
            <Switch
              color={mode ? "primary" : "danger"}
              slotProps={{ input: { "aria-label": "dark mode" } }}
              startDecorator={
                <LightbulbIcon sx={[mode ? { color: "text.tertiary" } : { color: "danger.600" }]} />
              }
              endDecorator={
                <DarkModeIcon sx={[mode ? { color: "primary.500" } : { color: "text.tertiary" }]} />
              }
              checked={mode === "light"}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setMode(event.target.checked ? "light" : "dark")
              }
            />
          </MenuItem>
        </Menu>
      </Dropdown>
    </div>
  );
};

export default Navbar;
