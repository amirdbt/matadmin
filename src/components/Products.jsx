import React from 'react'
import {Grid,Typography,Card,makeStyles,CardActionArea,CardMedia,CardContent} from "@material-ui/core"
import {Rating} from "@material-ui/lab"

const useStyles = makeStyles((theme)=>({
    productWrapper: {
        background: "#fff",
        boxShadow: "0px 14px 60px rgba(0,0,0,0.06)",
    },
    media: {
        height: "200px",
        width:"100%",
        objectFit:"contain"
      },
      productProduct: {
        background: "#fafafa",
        padding: "50px",
        height: "300px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
    },
    productContent: {
        padding: "30px",
        display: "flex",
        flexDirection: "column",
        // alignItems: "center",
        fontSize: "16px",
        justifyContent: "space-between",
    },
    productSmall:{
        display: "flex",
        justifyContent: "space-between",
    }
}))

const Products = () => {
    const classes = useStyles()
    const [value, setValue] = React.useState(2);

    return (
        <div className="content">
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6}>
                    <Card className={classes.productWrapper}>
                    <CardActionArea className={classes.productProduct}>
                        <CardMedia
                        className={classes.media}
                        image="https://akavo.itech-theme.com/c33aaaff7475bf608b8382d465171919.png"
                        title="Jug"
                        />
                    </CardActionArea>
                        <CardContent className={classes.productContent}>
                        <Typography gutterBottom variant="span" component="span">
                            Dbt Jug
                        </Typography>
                       <div className={classes.productSmall}>
                       <Rating
                        name="simple-controlled"
                        value={value}
                       style={{ fontSize: "16px"}}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                        />
                        <Typography>$150.00</Typography>
                       </div>
                       <Typography variant="caption">Stock: 15</Typography> 
                        </CardContent>
                   
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                <Card className={classes.productWrapper}>
                    <CardActionArea className={classes.productProduct}>
                        <CardMedia
                        className={classes.media}
                        image="https://akavo.itech-theme.com/c33aaaff7475bf608b8382d465171919.png"
                        title="Jug"
                        />
                    </CardActionArea>
                        <CardContent className={classes.productContent}>
                        <Typography gutterBottom variant="span" component="span">
                            Dbt Jug
                        </Typography>
                       <div className={classes.productSmall}>
                       <Rating
                        name="simple-controlled"
                        value={value}
                       style={{ fontSize: "16px"}}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                        />
                        <Typography>$150.00</Typography>
                       </div>
                       <Typography variant="caption">Stock: 15</Typography> 
                        </CardContent>
                   
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Card className={classes.productWrapper}>
                    <CardActionArea className={classes.productProduct}>
                        <CardMedia
                        className={classes.media}
                        image="https://akavo.itech-theme.com/c33aaaff7475bf608b8382d465171919.png"
                        title="Jug"
                        />
                    </CardActionArea>
                        <CardContent className={classes.productContent}>
                        <Typography gutterBottom variant="span" component="span">
                            Dbt Jug
                        </Typography>
                       <div className={classes.productSmall}>
                       <Rating
                        name="simple-controlled"
                        value={value}
                       style={{ fontSize: "16px"}}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                        />
                        <Typography>$150.00</Typography>
                       </div>
                       <Typography variant="caption">Stock: 15</Typography> 
                        </CardContent>
                   
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                <Card className={classes.productWrapper}>
                    <CardActionArea className={classes.productProduct}>
                        <CardMedia
                        className={classes.media}
                        image="https://akavo.itech-theme.com/c33aaaff7475bf608b8382d465171919.png"
                        title="Jug"
                        />
                    </CardActionArea>
                        <CardContent className={classes.productContent}>
                        <Typography gutterBottom variant="span" component="span">
                            Dbt Jug
                        </Typography>
                       <div className={classes.productSmall}>
                       <Rating
                        name="simple-controlled"
                        value={value}
                       style={{ fontSize: "16px"}}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                        />
                        <Typography>$150.00</Typography>
                       </div>
                       <Typography variant="caption">Stock: 15</Typography> 
                        </CardContent>
                   
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Card className={classes.productWrapper}>
                    <CardActionArea className={classes.productProduct}>
                        <CardMedia
                        className={classes.media}
                        image="https://akavo.itech-theme.com/c33aaaff7475bf608b8382d465171919.png"
                        title="Jug"
                        />
                    </CardActionArea>
                        <CardContent className={classes.productContent}>
                        <Typography gutterBottom variant="span" component="span">
                            Dbt Jug
                        </Typography>
                       <div className={classes.productSmall}>
                       <Rating
                        name="simple-controlled"
                        value={value}
                       style={{ fontSize: "16px"}}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                        />
                        <Typography>$150.00</Typography>
                       </div>
                       <Typography variant="caption">Stock: 15</Typography> 
                        </CardContent>
                   
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                <Card className={classes.productWrapper}>
                    <CardActionArea className={classes.productProduct}>
                        <CardMedia
                        className={classes.media}
                        image="https://akavo.itech-theme.com/c33aaaff7475bf608b8382d465171919.png"
                        title="Jug"
                        />
                    </CardActionArea>
                        <CardContent className={classes.productContent}>
                        <Typography gutterBottom variant="span" component="span">
                            Dbt Jug
                        </Typography>
                       <div className={classes.productSmall}>
                       <Rating
                        name="simple-controlled"
                        value={value}
                       style={{ fontSize: "16px"}}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                        />
                        <Typography>$150.00</Typography>
                       </div>
                       <Typography variant="caption">Stock: 15</Typography> 
                        </CardContent>
                   
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Card className={classes.productWrapper}>
                    <CardActionArea className={classes.productProduct}>
                        <CardMedia
                        className={classes.media}
                        image="https://akavo.itech-theme.com/c33aaaff7475bf608b8382d465171919.png"
                        title="Jug"
                        />
                    </CardActionArea>
                        <CardContent className={classes.productContent}>
                        <Typography gutterBottom variant="span" component="span">
                            Dbt Jug
                        </Typography>
                       <div className={classes.productSmall}>
                       <Rating
                        name="simple-controlled"
                        value={value}
                       style={{ fontSize: "16px"}}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                        />
                        <Typography>$150.00</Typography>
                       </div>
                       <Typography variant="caption">Stock: 15</Typography> 
                        </CardContent>
                   
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                <Card className={classes.productWrapper}>
                    <CardActionArea className={classes.productProduct}>
                        <CardMedia
                        className={classes.media}
                        image="https://akavo.itech-theme.com/c33aaaff7475bf608b8382d465171919.png"
                        title="Jug"
                        />
                    </CardActionArea>
                        <CardContent className={classes.productContent}>
                        <Typography gutterBottom variant="span" component="span">
                            Dbt Jug
                        </Typography>
                       <div className={classes.productSmall}>
                       <Rating
                        name="simple-controlled"
                        value={value}
                       style={{ fontSize: "16px"}}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                        />
                        <Typography>$150.00</Typography>
                       </div>
                       <Typography variant="caption">Stock: 15</Typography> 
                        </CardContent>
                   
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}

export default Products
