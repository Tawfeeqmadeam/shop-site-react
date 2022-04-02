
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { makeStyles } from '@mui/styles';
import { useState, useEffect } from "react";
import {Arrived,Popular,Recommended} from '../components/data/data';
import Product from "../components/product/Product";
import { Typography } from "@mui/material";
import Header from "../components/parts/Header";
import Footer from "../components/parts/Footer";
import Brand from "../components/parts/Brand";
const styles = makeStyles((theme ) => ({
    Box: {
        margin:"auto",
        width:"1200px",
        [theme.breakpoints.down("lg")]: {
            width:"90%",        
        },
    
    },
    NameShop:{
        [theme.breakpoints.down("md")]: {
              fontSize:"2rem" 
        },
        
    },
    a:{
        textDecoration:"none",
        '&:active': {
        color: 'black',
      }
    },
    brand:{
        margin:"auto",
        width:"1200px",
        [theme.breakpoints.down("lg")]: {
            width:"90%",        
        },
    },
    brandImg:{
        width:"100%"
    }
  }));

const Home = (props) => {
    const classes = styles();
    return (
        <>
        <Header />
        <Box className={classes.Box} >
        <Typography sx={{mb:3}} variant="h4" className={classes.NameShop}>Popular prodects </Typography>
    
            <Grid container spacing={3}>
            {
                Popular.map(index => {
                            return(
                                
                                <Grid key={index.id} item xs={12} sm={6} lg={3} >
                                    <Product productId={index.id}
                                            src={index.img}  
                                            name={index.type}
                                            rat 
                                    />
                                </Grid>
                            
                            )
                           })            
            }
            </Grid>
            <Typography sx={{mb:3,mt:3}} variant="h4" className={classes.NameShop}>New arrived </Typography>
            
            <Grid container spacing={3}>
            {
                Arrived.map(index => {
                            return(
                                
                                <Grid key={index.id} item xs={12} sm={6} lg={3} >
                                    <Product productId={index.id}
                                            src={index.img}  
                                            name={index.type} 
                                            rat
                                    />
                                </Grid>
                            
                            )
                           })            
            }
            </Grid>
            <Typography sx={{mb:3,mt:3}} variant="h4" className={classes.NameShop}>Recommended</Typography> 
            
            <Grid container spacing={3}>
            {
                Recommended.map(index => {
                            return(
                                
                                <Grid key={index.id} item xs={12} sm={6} lg={3} >
                                
                                    <Product productId={index.id}
                                            src={index.img}  
                                            name={index.type} 
                                    />
                               
                                </Grid>
                            
                            )
                           })            
            }
            </Grid>
        </Box>
        <Brand />

        <Footer/>
            </>
     );
}
 
export default Home;