import React from 'react'
import {Menu,MenuItem,IconButton, Typography,makeStyles} from "@material-ui/core"
import {Notifications} from "@material-ui/icons"

const useStyles = makeStyles((theme)=>({
    card:{
        width:"300px",
        transform :"none",
        transition: " opacity 329ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 219ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        top: "74px",
        left: "756px",
        transformOrigin: "150px 0px",
        opacity: 1

    },

    header:{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "60px",
        marginBottom: 0,
        background: "#3c54db",
        color: "#fff",
        padding: "0 20px",
        fontSize: "16px",
        textTransform: "capitalize",
        fontWeight: 600,

    }
}))


const Notification = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };

      const classes = useStyles()
    return (
        <div>
              <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
             
              onClick={handleMenu}
            >
              <Notifications />
            </IconButton>
             <Menu
              open={open}
              onClose={handleClose}
              anchorEl={anchorEl}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              elevation={1}
              className={classes.card}
            >
            
                <MenuItem className={classes.header}>
                    <Typography>Notifications</Typography>
                    <Typography>Clear all</Typography>
                </MenuItem>
                <MenuItem>Log out</MenuItem>
              
            </Menu>
        </div>
    )
}

export default Notification
