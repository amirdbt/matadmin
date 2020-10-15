import React from 'react'
import {
    makeStyles,
    Typography
  
  } from "@material-ui/core";

  const useStyles = makeStyles((theme) => ({

    footBar: {
      padding: "20px 60px",
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
      justifyContent: "center",
      backgroundColor: "#33569f",
    //   position: "fixed",
    //   bottom: 0,
      boxShadow: "0px 14px 60px rgba(0,0,0,0.06)",
    
    },
 
  }));
  
const Footer = () => {
    const classes = useStyles()
    return (
        <div>
              <footer className={classes.footBar}>
        <Typography>Footer</Typography>
      </footer>
        </div>
    )
}

export default Footer
