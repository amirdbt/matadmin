import React from 'react'
import {Typography,makeStyles,Grid,Card,Table,TableBody,TableCell,TableContainer,TableHead,TableRow} from "@material-ui/core"
import Footer from "./Footer"

const useStyles = makeStyles((theme) => ({
    title:{
        fontSize: "28px",
        lineHeight: "33px",
        marginBottom:"35px"
    },
    cards:{
        alignItems: "center",
        borderRadius: "8px",
        padding: "30px",
        display: "flex",
    },
    cards2:{
        borderRadius: "10px",
        padding: "25px",
        margin: "0 8px",
        flexBasis: "calc(100% * (1/2) - 16px)",
        marginBottom: "30px",
     
    },
    subtexts:{
        marginBottom: "10px",
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "16px",
        lineHeight: "19px",      
        letterSpacing: "0.1px",
        color: "#878aa0"
    },
    subtexts2:{
        marginBottom: "5px",
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "18px",
        lineHeight: "22px",      
        letterSpacing: "0.5px",
        color: "#ffffff"
    },
    maintexts:{
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "28px",
        lineHeight: "34px",
        letterSpacing: "0.11",
        color: "#111026",
        marginTop: "10px"
    },
    maintexts2:{
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "24px",
        lineHeight: "29px",
        letterSpacing: "0.5",
        color: "#ffffff",
       
    },
    bigCard:{
        padding: "25px 30px",
        minHeight: "100%",
        background: "#ffffff",
        boxShadow: "0px 14px 60px rgba(0,0,0,0.06)",
        borderRadius: "9px",
        transition : "all 0.4s ease-in-out 0s"
    },
    cardTitle:{
        fontSize: "16px",
        lineHeight:"28px",
        textTransform: "capitalize",
        fontWeight: 800
    },
    cardTitle2:{
        fontSize: "28px",
        lineHeight:"34px",
        textTransform: "capitalize",
        fontWeight: "bold",
        fontStyle: "normal",
        color:"#111026",
        marginBottom:"40px"
    },
    tableHeader:{
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "14px",
        lineHeight: "17px",
        letterSpacing: "0.1px",
        color: "#878aa0",
        borderBottom: "1px solid #f1f1f5",
        paddingTop: "0"
    }

 
  }));
  
const Ecommerce = () => {
    const classes = useStyles()
    return (
        <>
        <div className="content">
          <Typography variant="h3" className={classes.title}>Dashboard &gt; Ecommerce</Typography>

        <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
            <Card elevation={0} className={classes.cards}>               
                <div style={{marginRight:"20px"}}>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAAJ1BMVEU9UuBHcEw6Uts4UN46Uts6UOA7VN06UNo7U9w7U906U9s7Ud07U9ue0jOLAAAADHRSTlMZAI0KxhNSVLF26DtcwWItAAAAxElEQVQokZ3TPQ6CQBAF4CeGUNi4MfaEyp8GC25BgeECHMAjWFlTm5B4AAsKwxmMQTKHcjYkJrOzhfjKL29IBgYYY7IC34QlA4xJIVJaXMHJgTF1cW6gilzFWuMMaprnUWgM/Tg5XcLZO5gT5yktGGyzjQWee4v1S08T9RIvtrmRD82rBmgiFwkghW0VDQpv991bYUAUK0R3hUbO31iPG8k1T+Pu8oUsbDHZPjA1v39379ksNR79p+g9Wv95m8wtWtS/zAffLjwXTDW1RwAAAABJRU5ErkJggg==" alt=""/>
                </div>
                <div>
                <Typography variant="span" className={classes.subtexts}> Total Sale</Typography>
                  <Typography variant="h4" className={classes.maintexts}>
                   $46,434
                  </Typography>
                </div>
               
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
            <Card elevation={0} className={classes.cards}>
               <div style={{marginRight:"20px"}}>
               <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAAMFBMVEXCH9ZHcEzCHdq+H9TCHNe+H9O9INO+INO8INO+Hta9H9O+INO9H9PAH9i9H9K9INM4cz45AAAAD3RSTlMZAAlMEMaDt/E142iaJ9RTUL4KAAAA6klEQVQoz2MQFBRUYUACTkABBkFBBQYUwAQSFGFAA45AQQd0QRZBBiEGDKDIIIApyMiggCnIxOCAKciCTZBagDO1miFnAprgjP//D/QvRhNcX73j9/R/qGLMvxjYvjP0G6AK/mNg/soQjyrI22/A/of5/wVU/ee/9q+s/4ZmEdv/fwbrD6A79LIBw100oWmhoaHhG9hOovin/z8Q/OH4hWw91/fNxsbW/TvrHyAJ8i8AkfkFHB+QBQNApH0AK0FB1gQQeTWBrYBWUcOCPTFgTTZYExjWpIiZaJmAKVkIW/LGmhGAWcYBLcsAAEqhOyx8Pbt6AAAAAElFTkSuQmCC" alt=""/>

               </div>
                <div>
                <Typography  variant="span" className={classes.subtexts}> Visitors</Typography>
                  <Typography variant="h4" className={classes.maintexts}>
                   $1,32,3434
                  </Typography>
                </div>
              
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
            <Card elevation={0} className={classes.cards}>
              <div style={{marginRight:"20px"}}>

                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAALVBMVEVHcEz1Zin1YiDxaCzyaCz0YiTyZiv1YSf0ZiryZyvyZyzxaSvyaCzyaCzxaCxstOLKAAAADnRSTlMAGQnoyBVRDzJtfreUqaIYDv4AAADuSURBVCjPY2BgYFAPFIQD0SIGMFAURAFBIDF2QTRQABQsRBcUZ2BgEsQACgysmIIC6NaAgBCmkSBDAzEFRRkEsQD8gqJdKzAFZeweL0QXFLN7cu/xRFRBMb93lpJ2rxtRBPMeH37nIWn3DEVw35PGye9u+r1GEfSze9tx7t27J6iCc95ZLX53Ek0wsffdOw8xdEHBec8EMQXlHhIluG8HUFC05zWa4yfKPZRCc7zEvsfzntk9SUQNEEm7d+8eJ4aiBZ2U3eODmCGPLZCBYU8gjrBGMdbEgDXZYElgAdiTItZEiz15M6iiWwMGGFkGABticF6NrI3AAAAAAElFTkSuQmCC" alt=""/>
              </div>
                 <div>
                 <Typography  variant="span" className={classes.subtexts}> New Orders</Typography>
                  <Typography variant="h4" className={classes.maintexts}>
                   $46,434
                  </Typography>
                 </div>
              
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
            <Card elevation={0} className={classes.cards}>
               <div style={{marginRight:"20px"}}>

                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAAMFBMVEVHcEwKuP8Ftf8Itf8Ot/8OuP8Ot/4Mt/8Nt/8NvP8Ot/4Nt/8MuP8LuP8Ot/0Ot/7v9V7IAAAAD3RSTlMAGQoS38OQUnUn8WA1RKkUsvhdAAAAvElEQVQoz2NgYGBQFkQCRgxgoCiIAoRAYkyCaEABUyFYKYZCkFJGTEEBTN0g/YaYgsLYBAUZBKkjKJkagSl45P9/TwzB995bvmEIrj8o+wtD8P9Ewf8YgvGJYl8wBOu/+P/AEJTw/9WI6XjxmxjunBYKBI2ogjL+/4Hgy0QUQbkv28vLq/0TUQSl/oDI+wtRBOU/Ikj8gmKNCJJ60UEo3oWxJxusCQxrUsQ0VAhb8jbAlRGAWQbJBGFQlgEAu6RXX/jt+M8AAAAASUVORK5CYII=" alt=""/>
               </div>
                 <div>
                 <Typography  variant="span" className={classes.subtexts}> Customers</Typography>
                  <Typography variant="h4" className={classes.maintexts}>
                   $1,32,3434
                  </Typography>
                 </div>
              
              </Card>
            </Grid>
        </Grid>

        <div style={{marginBottom:"20px"}}></div>
        <Grid container>
            <Grid item xs={12} sm={12}>
                <Card className={classes.bigCard}>
                    <Typography className={classes.cardTitle}>Orders</Typography>
                    <Typography className={classes.cardTitle2}>Total 1,784</Typography>

                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                        <Card elevation={0} style={{ background : "#3b53db"}} className={classes.cards2}>               
                            <div>
                            <Typography variant="p" className={classes.subtexts2}> Today</Typography>
                            <Typography variant="h4" className={classes.maintexts2}>
                            314
                            </Typography>
                            </div>
                        
                          </Card>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        <Card elevation={0} style={{ background : "#bd20d3"}} className={classes.cards2}>               
                            <div>
                            <Typography variant="p" className={classes.subtexts2}> Shipped</Typography>
                            <Typography variant="h4" className={classes.maintexts2}>
                            876
                            </Typography>
                            </div>
                        
                          </Card>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        <Card elevation={0} style={{ background : "#f1682c"}} className={classes.cards2}>               
                            <div>
                            <Typography variant="p" className={classes.subtexts2}> Delivered</Typography>
                            <Typography variant="h4" className={classes.maintexts2}>
                            416
                            </Typography>
                            </div>
                        
                          </Card>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        <Card elevation={0} style={{ background : "#0eb7fe"}} className={classes.cards2}>               
                            <div>
                            <Typography variant="p" className={classes.subtexts2}> Pending</Typography>
                            <Typography variant="h4" className={classes.maintexts2}>
                            231
                            </Typography>
                            </div>
                        
                          </Card>
                        </Grid>

                    </Grid>
                </Card>
            </Grid>
        </Grid>
        
        <div style={{marginBottom:"80px"}}></div>

        <Grid container>
            <Grid item xs={12} sm={12}>
                <Card className={classes.bigCard}>
                    <Typography className={classes.cardTitle} style={{marginBottom: "15px"}}>Order List</Typography>

                    <TableContainer >
                        <Table  aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell className={classes.tableHeader}>Invoice</TableCell>
                                <TableCell className={classes.tableHeader}>Customer</TableCell>
                                <TableCell className={classes.tableHeader}>Date</TableCell>
                                <TableCell className={classes.tableHeader}>Amount</TableCell>
                                <TableCell className={classes.tableHeader}>Status</TableCell>
                                <TableCell className={classes.tableHeader}>Tracking</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>                         
                                <TableRow >
                                <TableCell>#0102019</TableCell>
                                <TableCell>David Ohara</TableCell>
                                <TableCell>05 Nove 2019</TableCell>
                                <TableCell>$350</TableCell>
                                <TableCell>Received</TableCell>
                                <TableCell>FD45AS</TableCell>
                                </TableRow>                            
                                <TableRow >
                                <TableCell>#0102019</TableCell>
                                <TableCell>David Ohara</TableCell>
                                <TableCell>05 Nove 2019</TableCell>
                                <TableCell>$350</TableCell>
                                <TableCell>Received</TableCell>
                                <TableCell>FD45AS</TableCell>
                                </TableRow>                            
                                <TableRow >
                                <TableCell>#0102019</TableCell>
                                <TableCell>David Ohara</TableCell>
                                <TableCell>05 Nove 2019</TableCell>
                                <TableCell>$350</TableCell>
                                <TableCell>Received</TableCell>
                                <TableCell>FD45AS</TableCell>
                                </TableRow>                            
                                <TableRow >
                                <TableCell>#0102019</TableCell>
                                <TableCell>David Ohara</TableCell>
                                <TableCell>05 Nove 2019</TableCell>
                                <TableCell>$350</TableCell>
                                <TableCell>Received</TableCell>
                                <TableCell>FD45AS</TableCell>
                                </TableRow>                            
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Card>
            </Grid>
        </Grid>
        <div style={{marginBottom:"80px"}}></div>
        </div>
        <Footer />
        </>
    )
}

export default Ecommerce
