import React from 'react'
import {makeStyles, Typography, TextField, Button} from "@material-ui/core"

const useStyles = makeStyles((theme)=>({
    root:{       
        width: "100%",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        minHeight: "100vh",
        padding: "100px 0",
        background: "#3B7CDD",    
    },
    accountWrapper: {
        width: "920px",
        display: "flex",
        flexWrap: "wrap",
        background: "#fff",
        margin: "auto",
        boxShadow: "0px 14px 60px rgba(0,0,0,0.06)",
        borderRadius: "5px",
        overflow: "hidden",
        position: "relative",
        zIndex: 1,
    },
    bgShaperight: {
        position: "absolute",
        right: 0,
        top: 0,
        zIndex: -1,
        width: "55%",
        height: "100%",
        background: "url('https://akavo.itech-theme.com/9c0ed2e09590dbdcad0f1066f0d7791b.png') left center / cover no-repeat"
    },
    accountForm: {
        width: "50%",
        padding: "70px 85px",
        minHeight: "600px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    formTitle:{
        marginTop: "-100px"
    },
    formDetails:{
        marginTop: "60px",
        display:"flex",
        flexDirection:"column",
        // justifyContent: "space-between"
    },
    accountBtn :{
        fontSize: "16px",
        padding: "10px 20px",
        width:"300px",
        background: "#3c54db",
        color:"#fff",
        "&:hover": {
            color: "#3c54db",
            border: "2px solid #3c54db",
            // borderColor: "#4578e0",
            // background: "rgba(52,58,153,0.36)",
          
          },
    },
    a: {
        display: "inline-block",
        fontSize: "14px",
        color: "#3c54db",
        marginLeft:"40px"
    }
}))

const Signup = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <form className={classes.accountWrapper}>
                <div className={classes.bgShaperight}></div>
                <div className={classes.accountForm}>
                    <div className={classes.formTitle}>
                        <Typography variant="h4">Signup</Typography>
                        <Typography component="p">Sign into your pages ccount</Typography>

                       <div className={classes.formDetails}>
                       <TextField id="outlined-basic" label="Full Name" variant="outlined" style={{marginBottom:"20px",width:"300px"}} />
                       <TextField id="outlined-basic" label="Email" variant="outlined" style={{marginBottom:"20px",width:"300px"}} />
                       <TextField id="outlined-basic" label="Password" variant="outlined"  style={{marginBottom:"20px",width:"300px"}} />
                       <TextField id="outlined-basic" label="Confirm Password" variant="outlined"  style={{marginBottom:"20px",width:"300px"}} />
                       </div>

                        <Button  className={classes.accountBtn} href="/">Signup</Button>

                      <div style={{ marginLeft:"60px", marginTop:"20px"}}>
                      <Typography component="p" style={{color:"#ac968c"}}>Already have an account?</Typography>
                        <a href="/login" className={classes.a}>Return to Sign in</a>
                      </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Signup
