import React, { useState } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  MenuList,
  MenuItem,
  ListItemText,
  Divider,
  ListItemIcon,

} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import {Tv,SportsSoccer,SportsCricket,Home} from '@material-ui/icons';

const useStyles = makeStyles((theme) =>
  createStyles({  
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    drawer: {
      width: 300,
    },
    fullList: {
      width: "auto",
    },
  })
);

const Navbar = () => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsOpen(open);
  };
  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static" style={{backgroundColor:"#14213d"}}>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Ulti-Ecom
            </Typography>
            
          </Toolbar>
        </AppBar>
      </div>
      <Drawer
        classes={{ paper: classes.drawer }}
        open={isOpen}
        onClose={toggleDrawer(false)}
      >
        <div
          className={classes.fullList}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <MenuList>
          <MenuItem>
            <ListItemIcon><Home/></ListItemIcon>
              <ListItemText primary="Home" />
            </MenuItem>
            <Divider/>
            <MenuItem>
            <ListItemText primary="Catergories"/>
            </MenuItem>
            <MenuItem>
            <ListItemIcon><SportsSoccer/></ListItemIcon>
              <ListItemText primary="Football" />
            </MenuItem>
            <MenuItem>
            <ListItemIcon><SportsCricket/></ListItemIcon>
              <ListItemText primary="Cricket" />
            </MenuItem>
            <MenuItem>
               <ListItemIcon><Tv/></ListItemIcon>
              <ListItemText primary="Electronics" />
            </MenuItem>
          </MenuList>
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;
