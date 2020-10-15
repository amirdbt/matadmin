import React from 'react'
import { Typography ,makeStyles, Grid,Card, Button} from '@material-ui/core'
import {AccountCircle,Lock,ExitToApp} from "@material-ui/icons"
import Footer from "./Footer"

const useStyles = makeStyles((theme)=>({
    bigCard:{
        padding: "25px 30px",
        minHeight: "100%",
        background: "#ffffff",
        boxShadow: "0px 14px 60px rgba(0,0,0,0.06)",
        borderRadius: "9px",
        transition : "all 0.4s ease-in-out 0s"
    },
    profileInfoWrap :{
        background: "#fff",
        padding: "30px",
        textAlign: "center",
        marginBottom: "32px",
        borderRadius: "4px",
    },
    profileImg:{
        width: "150px",
        borderRadius: "50%",
        border : "5px solid #f1f1f1"
    },
    subtitle:{
        fontSize: "18px",
        lineHeight:"18px",
        marginBottom:"5px"
    },
    btns:{
        display: "flex",
        justifyContent: "center",
        marginTop:"15px"
    },
    btn1:{
        width: "100px",
        height: "35px",
        background: "#02ae14",
        textTransform: "capitalize",
        color: "#ffffff",
        '&:hover': {
            background: '#02ae14',
           
          },
    },
    btn2:{
        width: "100px",
        height: "35px",
        background: "#3c54db",
        textTransform: "capitalize",
        color: "#ffffff",
        '&:hover': {
            background: '#3c54db',
           
          },
    },
    btngroup:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start"
    },
    a :{
        minWidth: "100%",
        padding: "0px",
        justifyContent: "flex-start",
        minHeight: "50px",
        opacity: 1,
        textTransform: "capitalize",
        fontSize: "15px",
        color: "#676B79",
    },
    atext:{
        fontFamily: "Lato, sans-serif"
    },
    fields: {
        marginBottom: 0,
        padding: "15px",
        background: "#fafafa",
        fontSize:"16px"
    },
    label:{
        marginBottom: 5,
        fontSize: "12px"
    }
}))

const Profile = () => {
    const classes = useStyles()
    return (
        <>
        <div className="content">
            <Typography variant="h4">Profile Page</Typography>
            <div style={{marginBottom: "20px"}}></div>

            <Grid container>
                <Grid item xs={12} sm={12}>
                    <Card className={classes.bigCard}>
                        <div className={classes.profileInfoWrap}>
                            <img className={classes.profileImg} src="https://pbs.twimg.com/profile_images/1253036000357597186/BEJwGPL1_400x400.jpg" alt="profile img"/>
                            <div >
                                <Typography variant="h4" className={classes.subtitle}>Amir DBT</Typography>
                                <Typography component="p">ahmedh920@gmail.com</Typography>
                            </div>
                            <div className={classes.btns}>
                                <Button variant="contained" style={{marginRight:"10px"}}  className={classes.btn1}>Chat</Button>
                                <Button variant="contained" className={classes.btn2}>Follow</Button>
                            </div>
                        </div>
                    </Card>
                </Grid>
            </Grid>

            <div style={{marginBottom: "80px"}}></div>
            
            <Grid container>
                <Grid item xs={12} sm={12}>
                    <Card className={classes.bigCard}>
                       <div className={classes.btngroup}>
                           <Button className={classes.a } style={{color: "#3c54db"}}>
                               <span style={{marginRight:"10px", marginTop:"10px"}}> <AccountCircle  /> </span>
                               <span className={classes.atext}> My Profile </span>
                           </Button>
                           <Button className={classes.a }>
                               <span style={{marginRight:"10px", marginTop:"10px"}}> <AccountCircle /> </span>
                               <span className={classes.atext}> Edit Profile </span>
                           </Button>
                           <Button className={classes.a }>
                               <span style={{marginRight:"10px", marginTop:"10px"}}> <Lock /> </span>
                               <span className={classes.atext}> Reset Password </span>
                           </Button>
                           <Button className={classes.a }>
                               <span style={{marginRight:"10px", marginTop:"10px"}}> <ExitToApp /> </span>
                               <span className={classes.atext}> Logout </span>
                           </Button>
                          
                       </div>
                    </Card>
                </Grid>
            </Grid>

            <div style={{marginBottom: "80px"}}></div>

            <Grid container>
                <Grid item xs={12} sm={12}>
                    <Card className={classes.bigCard}>
                        <Typography variant="h3" style={{fontSize:"18px",marginBottom:5}}>My Profile</Typography>
                   <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <span className={classes.label}>First Name</span>
                            <Typography variant="h4" className={classes.fields}>
                                Amir
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        <span className={classes.label}>Last Name</span>
                            <Typography variant="h4" className={classes.fields}>
                                DBT
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <span className={classes.label}>Email</span>
                            <Typography variant="h4" className={classes.fields}>
                                ahmedh920@gmail.com
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        <span className={classes.label}>Phone Number</span>
                            <Typography variant="h4" className={classes.fields}>
                                +23489289839898
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <span className={classes.label}>Address</span>
                            <Typography variant="h4" className={classes.fields}>
                                NAIJA
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        <span className={classes.label}>Status</span>
                            <Typography variant="h4" className={classes.fields}>
                                Admin
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <span className={classes.label}>Zip Cide</span>
                            <Typography variant="h4" className={classes.fields}>
                                15352552
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        <span className={classes.label}>Active Status</span>
                            <Typography variant="h4" className={classes.fields}>
                                Active
                            </Typography>
                        </Grid>
                   </Grid>
                    </Card>
                </Grid>
            </Grid>
            <div style={{marginBottom: "80px"}}></div>
        </div>
        <Footer />
        </>
    )
}

export default Profile
