import React from 'react'
import {makeStyles, Typography} from "@material-ui/core"

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
        marginTop: "-578px"
    }
}))

const Login = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <form className={classes.accountWrapper}>
                <div className={classes.bgShaperight}></div>
                <div className={classes.accountForm}>
                    <div className={classes.formTitle}>
                        <Typography variant="h4">Log In</Typography>
                        <Typography component="p">Welcome Back! Please sign in to your Account</Typography>
                        
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login
