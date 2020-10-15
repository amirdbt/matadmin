import React from "react";
import { Link } from "react-router-dom";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  makeStyles,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Hidden,
  ListSubheader
} from "@material-ui/core";
import {
  PowerSettingsNew, 

} from "@material-ui/icons";
import MenuIcon from "@material-ui/icons/Menu";

const drawerWidth = 230;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#33569f",
    color: "#fff",
  },
  header: {
    fontSize: "10px",
    lineHeight: "67px",
    marginLeft: 20,
    marginTop: 10,
    userSelect: "none",
    // backgroundColor: "#2563a4"

  },
  img:{
      maxWidth : "97px",
    //   position: "absolute"
  },
  subheader:{
    fontSize: "15px",
    lineHeight: "17px",
    fontWeight: 500,
    display: "block",
    fontStyle:"normal",
    padding: "15px 0",
    paddingLeft:"50px",
    borderRight: "5px solid transparent",
    position: "relative",
    color: "#ffffff",
    zIndex: 1,
    marginTop: "20px"
  },
  listItems: {
   fontSize: "14px",
   lineHeight: "17px",
   fontWeight: 500,
   display: "block",
   fontStyle:"normal",
   padding: "15px 0",
   paddingLeft:"58px",
   borderRight: "5px solid transparent",
   position: "relative",
   color: "#b6c0e7",
   zIndex: 1,
   
//    color: "#ffffff",
    "&:hover": {
      color: "#ffffff",
      borderColor: "#4578e0",
      background: "rgba(52,58,153,0.36)",
    
    },
    // borderBottom: "1px solid #8d8d8d",
  },
  iconColor: {
    color: "#ffffff",
    fontSize: "10px",
  },
  topBar: {
    height: "80px",
    backgroundColor: "#ffffff",
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      backgroundColor: "#ffffff",
    },
  },
  
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  search: {
    display: "flex",
    flexGrow: 1,
  },
  searchIcon: {
    marginRight: "10px",
  },
  appIcons: {
    display: "flex",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
  },
  link1: {
    textDecoration: "none",
    color: "#000000",
  },
  listText: {
    // fontSize: "20px",
  },
}));

const SideBar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const classes = useStyles();
  
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
 

  const drawer = (
    <>
      <div className={classes.toolbar} />
      <header className={classes.header}>
        <img className={classes.img} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAABHBAMAAADclkelAAAALVBMVEVHcEz////////////////////////////////////////////////////////NXt0CAAAADnRSTlMA36O/gDwg7xBgkHDPUJGhrZEAAAYmSURBVGje7VjPa1xVFH7JzHuZSVJoQy0VZBimainaR0gXWoQhaFCKEEYbTEvLMCpF3AR/RKkVhqlQQmgJsbgRYagBQbCEihbBRYib4kKCG124CMzkx5iYvL/Bee/de+53zrsvEDdu5qzm3rnnfvec891zzn2OkyZ9QSQbzv8iPfQeeg+9h95D76H30HvoPfT/JrnLP068+kfjUOhepHMolCtL50oXKmL21lI9gto7m4ruTSh5WU3M31c636iJKbXAmCA0nKlyvOcLNTzRDwHJSC0FfVivGI8P85LReTxeMaOGZJqrJrYTMG1jvlsOQI6noC+r/zej0W2mE8Nn1Oie3mFQTRTj4U+gsUFG+gGTR1b0bIB75+pcJ5ocUoP3xPmVM64yjU29aJLv1KrZ0Ne1z+JhmevsNeBIW3rjqtrQwbNpOaEWLdjnGbpXUH+uxn+uCJ1fwYm7Gn0FDpwTHiYjM3K+kUR/E43sypzQaSdsNQ6KSHcnkPJRvOiInL+XRNeePikIRbLYnRzgpPfUcNRCLmO8pJAKHKJnhbvoMpFch1XxnXTycLBskJST/DLRdUigrwiqJGgXcdhFY01EwxM3Lei7wM3WMeOCikB3penqorx/jFQ6MtDE5jaSNvig9ByH6R6y88wb3SWfs8ADuubcxyY/LgStM5e65/oat1Iu+ide0jRx7NerPumylmBiHw3dqPCbf1SgK8p0oDxkZuOB50NCm2MpwjebzeCVIRWVGHRdyGJiNuj5QKSRkKp0DDixNjHer26O5TOiZer28qkCt8PRbwJ5k0VTbfU38OMBXuSauXsdcclEqa1CEjbokyycUtS/+2BuFNB+Y+CgSO4rsh6x7Npm6Jqw43b0GfDXpLn8Wn8HqrNm7ZysR7HAeQ16XqRvewe2Cb7bgd/bQLqiyJTbuM+1L7+wofeJ9M2ifu2ri4CeAd/5BnFdxFnzY4f2eXep6+AzAETo1SDN81ee7ercBXRVRjsh6QsGcZLdhe6ZebZz5k93wuEFG7oPqRzldpy1Xgd0zeYK2dcCN+yRaoE1CxeV1mUbeoE3FrIZ/Az57BOZB0GpLDfwMZiU++Yt6K7Iywr8FV2S+hG9SmQeBmIVJG+XoTi8Rj1C3oJuyv8ooFOLuMPQBygrzoBOQfRyRATWKWzZ0E1phnTzNk0eZehZsrIJ+fEA9Jwp1UUbujlch94JpmIGDxi6Sy4tm+J+EPow9Do29H7ZckHJDXnM0DVoxUOiHRD3ZWhmU9A7vihyxvTnBbpK4eN51FhL4fwedGjHG2noWzd5STRUOO8I9DnOhqOO9b6v6f10fb7xp2kEZdwX87zGasfPXnIkuhptL2BmxwsWCeU6dTP2ak4K+lCYjgusDVV83m04CXTlys11IB31lDLP7+tAnXDS0I+ECb5po1bRSaKrEr/hY6hmRKUwNa6MPrWhe5tmoJoTZopAV5epjkWsT9RzPV7FUkQB5Xl+HF4Go/xShzLN0asByDZnqa6oTaJRAAHSSaSVfMMW4AZh+XLcOkdnr8Iij7N6IeYKBIps1ly2oDdB38VyPS16NvZSroiXT5GFvU2N4CqYYUPvA+K4kPro6m+KHpe1Q1XWTiybuOhCX3NcP0hHz0Nj6BlA89WlbfkU0pZNf/BY2ExAXPTidmktOACddQjavJFSPYlUTZAOn7wjE/dNWUl+hUhDr0IofYsOoQ8EloZg2aKxb/luoqu+RM8EhiC2E9OzCJ7q5vFzx6IxbvluQmwW6C60GHMWFSohnpkzD25oCJizXBt6JYmuAx+2GLYvEZ3khwVsQ6cTCsXUkCxa0Ktwz9YsOmQoxQXfvAnj28mQtKYNgkTPwJ7voMvjRNT53RGvNFXcE+0Qqzh4qkdZQ1aJ7gK9XEgp32ZE29Uv8qzo5czFj+QtmtptqBR83YJO8VxklnzqeHV+vdwk6SIry3DkWWpQne+1VRW97ZYNXQc+PFpOs6WbIxWjzEMr5dMEfI0GcMeL4T8MmZ57sdSV8DP9YCmSJ2lZNp4oPRXpnI77sVDHWwqnn6aFd+N1Z+Wj01OPr875BpufOvXb2MOGcxjJ/XXqibGHzuHk1s/nfhn7zrzI/gV2h2wGE9lR1wAAAABJRU5ErkJggg==" alt=""/>
      </header>

      <Divider style={{color: "#2563a4"}} />
      <List  subheader={<ListSubheader className={classes.subheader} component="div" id="nested-list-subheader">Dashboard</ListSubheader>}>
        
            {/* <Link className={classes.link} to="/profile">
              <ListItem button className={classes.listItems}>
                <ListItemIcon className={classes.iconColor}>
                    <Dashboard />
                </ListItemIcon>
                <Typography variant="h6">
                  Dashboard
                </Typography>
              </ListItem>
            </Link> */}
            <Link className={classes.link} to="/share-records">
              <ListItem button className={classes.listItems}>
              
                <Typography variant="span">
                  Campaign Monitoring 
                </Typography>
              </ListItem>
            </Link>
            <Link className={classes.link} to="/hospitals">
              <ListItem button className={classes.listItems}>
               
                <Typography variant="span">
                  Cryptocurrency
                </Typography>
              </ListItem>
            </Link>
            <Link className={classes.link} to="/hospitals">
              <ListItem button className={classes.listItems}>
               
                <Typography variant="span">
                  Banking System
                </Typography>
              </ListItem>
            </Link>
            <Link className={classes.link} to="/hospitals">
              <ListItem button className={classes.listItems}>
               
                <Typography variant="span">
                  Event Management
                </Typography>
              </ListItem>
            </Link>
            <Link className={classes.link} to="/hospitals">
              <ListItem button className={classes.listItems}>
               
                <Typography variant="span">
                  Crm
                </Typography>
              </ListItem>
            </Link>
            <Link className={classes.link} to="/ecommerce">
              <ListItem button className={classes.listItems}>
               
                <Typography variant="span">
                  Ecommerce
                </Typography>
              </ListItem>
            </Link>
        
       
      
      </List>
    </>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <div className={classes.root}>
      <AppBar className={classes.topBar} color="default" elevation={0}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.search}>
            <div className={classes.searchIcon}>{/* <Search /> */}</div>
            <InputBase />
          </div>
          <div />
          <div className={classes.appIcons}>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              onClick={handleMenu}
            >
              <PowerSettingsNew />
            </IconButton>
            <Menu
              open={open}
              onClose={handleClose}
              anchorEl={anchorEl}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              elevation={0}
            >
             <Link to="/profile" className={classes.link1}>
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                </Link>
              <Link to="/users" className={classes.link1}>
                <MenuItem>Log out</MenuItem>
              </Link>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    
      <nav>
        <Hidden smUp implementation="css">
          <Drawer
            className={classes.drawer}
            container={container}
            variant="temporary"
            anchor="left"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
};

export default SideBar;
