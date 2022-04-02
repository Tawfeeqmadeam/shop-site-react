
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { makeStyles } from '@mui/styles';
import { Divider, Typography } from "@mui/material";
const styles = makeStyles((theme ) => ({
    NameShop:{
        [theme.breakpoints.down("md")]: {
              fontSize:"2rem" 
        },
    },
    brand:{
        margin:"auto",
        width:"1200px",
        [theme.breakpoints.down("lg")]: {
            width:"90%",        
        },
    }
    ,
    brandImg:{
        width:"100%"
    }
  }));
const Brand = () => {
    const classes = styles();
    return ( 
        <Box sx={{bgcolor:"#fafafa" , mt:4}}>
        <Box className={classes.brand}>
        <Typography sx={{pt:5}} variant="h4" className={classes.NameShop}>Our brands</Typography> 
        <Grid sx={{mt:1}} container spacing={3}>
            <Grid item xs={6} md={4} lg={2} sx={{mb:4}}>
                <Box sx={{bgcolor:"white"}}>
                <img className={classes.brandImg} src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWCZER?ver=2918&q=90&m=6&h=195&w=348&b=%23FFFFFFFF&l=f&o=t&aim=true" />
                <Divider  variant="middle" />   
                <Typography  variant="h6" sx={{textAlign: 'center',p:1}}>365 Prodect  </Typography>    
                </Box>     
            </Grid>
            <Grid item xs={6} md={4} lg={2} sx={{mb:2}} >
                <Box sx={{bgcolor:"white"}}>
                <img className={classes.brandImg} src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWCZER?ver=2918&q=90&m=6&h=195&w=348&b=%23FFFFFFFF&l=f&o=t&aim=true" />
                <Divider  variant="middle" />   
                <Typography  variant="h6" sx={{textAlign: 'center',p:1}}>365 Prodect  </Typography>    
                </Box>     
            </Grid>
            <Grid item xs={6} md={4} lg={2} sx={{mb:2}}>
                <Box sx={{bgcolor:"white"}}>
                <img className={classes.brandImg} src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWCZER?ver=2918&q=90&m=6&h=195&w=348&b=%23FFFFFFFF&l=f&o=t&aim=true" />
                <Divider  variant="middle" />   
                <Typography  variant="h6" sx={{textAlign: 'center',p:1}}>365 Prodect  </Typography>    
                </Box>     
            </Grid>
            <Grid item xs={6} md={4} lg={2} sx={{mb:2}}>
                <Box sx={{bgcolor:"white"}}>
                <img className={classes.brandImg} src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWCZER?ver=2918&q=90&m=6&h=195&w=348&b=%23FFFFFFFF&l=f&o=t&aim=true" />
                <Divider  variant="middle" />   
                <Typography  variant="h6" sx={{textAlign: 'center',p:1}}>365 Prodect  </Typography>    
                </Box>     
            </Grid>
            <Grid item xs={6} md={4} lg={2} sx={{mb:2}}>
                <Box sx={{bgcolor:"white"}}>
                <img className={classes.brandImg} src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWCZER?ver=2918&q=90&m=6&h=195&w=348&b=%23FFFFFFFF&l=f&o=t&aim=true" />
                <Divider  variant="middle" />   
                <Typography  variant="h6" sx={{textAlign: 'center',p:1}}>365 Prodect  </Typography>    
                </Box>     
            </Grid>
            <Grid item xs={6} md={4} lg={2} sx={{mb:2}} >
                <Box sx={{bgcolor:"white"}}>
                <img className={classes.brandImg} src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWCZER?ver=2918&q=90&m=6&h=195&w=348&b=%23FFFFFFFF&l=f&o=t&aim=true" />
                <Divider  variant="middle" />   
                <Typography  variant="h6" sx={{textAlign: 'center',p:1}}>365 Prodect  </Typography>    
                </Box>     
            </Grid>
            
            
        </Grid> 
        </Box>
        </Box>
     );
}
 
export default Brand;