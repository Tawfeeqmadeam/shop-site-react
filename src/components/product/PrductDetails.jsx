
import { useLocation } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import Header from '../parts/Header';
import Footer from '../parts/Footer';
import { Typography } from "@mui/material";
const useStyles= makeStyles({
    boxMain:{
            width:1000,
            height:492,
            margin: "auto",
            paddingTop:50            
        },
    boxImg:{
        width:"100%",
        border: "1px solid black",
        borderRadius:5,
        padding:5
    },
    img: {
        width:"100%",
         height:"18rem",
        borderRadius: "5px",
        transition: "transform .4s",
        '&:hover': {
            transform: "scale(0.97)"
        }
    },
    boxDetails:{
        width:"100%",
        padding:5
    }
})

const PrductDetails= (props) => {
     const  myLocation = useLocation();
     const {name,img,price } = myLocation.state;
    const classes = useStyles(props);
    return ( 
        <>
        <Header />
        <Box className={classes.boxMain}>
        <Grid sx={{m:'auto 0'}} container columnSpacing={10}>
            <Grid item sm={5}>
                <Box className={classes.boxImg} >
                    <img className={classes.img} src={img} />
                </Box>
            </Grid>
            <Grid item sm={7}>
            <Box className={classes.boxDetails} >
                <Typography variant="h5"> {name}  </Typography>
                <Typography variant="h5"> {price}$  </Typography>
            </Box>
            
            </Grid>
        
        </Grid>
        </Box>
        <Footer/>
       
        </>
     );
}
 
export default PrductDetails;