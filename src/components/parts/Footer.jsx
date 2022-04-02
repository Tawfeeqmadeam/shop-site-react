import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { makeStyles } from '@mui/styles';
import { Typography } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from '@mui/material/Link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const styles = makeStyles((theme ) => ({
    footer: {
        width:'100%',
        backgroundColor:"#e0e0e0",
    },
    mainFooter:{
        margin:"auto",
        width:"1200px",
        paddingTop:"50px",
        [theme.breakpoints.down("lg")]: {
            width:"90%",        
        },
    },
    boxgroup:{
        marginBottom:"2rem",
    },
    group:{
        '&:hover':{
            color:"blue",
        },
        [theme.breakpoints.down("md")]: {
        },
    },
    groupItem:{
    }
    ,
    socialBox:{
        marginBottom:"0.3rem"
    },
    Icon:{
        marginBottom:'-6px',
    }

  }));
const Footer = () => {
    const classes = styles();
    const styleGroupTiltw = {fontWeight:"bold"};
    const styleStyleSocial = {display: 'inline',marginLeft:'5px'};
    const styleStyleSocialIcon = {display: 'inline',marginLeft:'5px'};
    const styleLinks = {color:'black',
                             '&:hover':{
                                 color:"blue",
                                },
                        }

    return ( 
        <>
        <footer className={classes.footer}>
            <Box className={classes.mainFooter}>
            <Grid container spacing={2} >
                <Grid item xs={6} md={4} lg={2.4} >
                  <Box className={classes.boxgroup} >
                    <Typography variant="h5" gutterBottom className={classes.group} sx={styleGroupTiltw}>Brands</Typography>
                    <Typography gutterBottom className={classes.groupItem} >Nike</Typography>
                    <Typography gutterBottom className={classes.groupItem} >addidas</Typography>
                    <Typography gutterBottom className={classes.groupItem} >Puma</Typography>
                  </Box>
                </Grid>
                <Grid item xs={6} md={4} lg={2.4}  >
                <Box className={classes.boxgroup} >
                    <Typography variant="h5" gutterBottom className={classes.group}  sx={styleGroupTiltw}>Company</Typography>
                    <Typography gutterBottom className={classes.groupItem} >About</Typography>
                    <Typography gutterBottom className={classes.groupItem} >Career</Typography>
                    <Typography gutterBottom className={classes.groupItem} >Find a store</Typography>
                    <Typography gutterBottom className={classes.groupItem} >Rules and terms</Typography>
                    <Typography gutterBottom className={classes.groupItem} >Sitemap</Typography>
                  </Box>
                </Grid>
                <Grid item xs={6} md={4} lg={2.4}  >
                    <Box className={classes.boxgroup} >
                        <Typography variant="h5" gutterBottom className={classes.group}  sx={styleGroupTiltw}>Help</Typography>
                        <Typography gutterBottom className={classes.groupItem} >Contact us</Typography>
                        <Typography gutterBottom className={classes.groupItem} >Money refund</Typography>
                        <Typography gutterBottom className={classes.groupItem} >Order status</Typography>
                        <Typography gutterBottom className={classes.groupItem} >Shipping info </Typography>
                        <Typography gutterBottom className={classes.groupItem} >Open dispute  </Typography>
                    </Box>
                </Grid>
                <Grid item xs={6} md={4} lg={2.4}  >
                    <Box className={classes.boxgroup} >
                        <Typography variant="h5" gutterBottom className={classes.group}  sx={styleGroupTiltw}>Account</Typography>
                        <Typography gutterBottom className={classes.groupItem} >User Login </Typography>
                        <Typography gutterBottom className={classes.groupItem} >User register </Typography>
                        <Typography gutterBottom className={classes.groupItem} >Account Setting </Typography>
                        <Typography gutterBottom className={classes.groupItem} >My Orders </Typography>
                    </Box>
                </Grid>
                <Grid item xs={6} md={4} lg={2.4}  >
                    <Box className={classes.boxgroup} >
                        <Typography variant="h5" gutterBottom className={classes.group}  sx={styleGroupTiltw}>Social</Typography>
                        <Box className={classes.socialBox} ><FacebookIcon className={classes.Icon} /><Link href="https://www.facebook.com/profile.php?id=100005509998819" sx={styleLinks} target="_blank" underline="none" ><Typography gutterBottom className={classes.groupItem} sx={styleStyleSocial}>Facebook</Typography></Link></Box>
                        <Box className={classes.socialBox} ><TwitterIcon className={classes.Icon} /><Link href="https://twitter.com/TMadeam" sx={styleLinks} target="_blank" underline="none" ><Typography gutterBottom className={classes.groupItem} sx={styleStyleSocial}>Twitter</Typography></Link></Box>
                        <Box className={classes.socialBox} ><InstagramIcon className={classes.Icon} /><Link href="https://www.instagram.com/tawfeeq1998/" sx={styleLinks} target="_blank" underline="none" ><Typography gutterBottom className={classes.groupItem} sx={styleStyleSocial}>Instgram</Typography></Link></Box>
                        <Box className={classes.socialBox} ><GitHubIcon className={classes.Icon} /><Link href="https://www.facebook.com/profile.php?id=100005509998819" sx={styleLinks} target="_blank" underline="none" ><Typography gutterBottom className={classes.groupItem} sx={styleStyleSocial}>GitHub</Typography></Link></Box>
                        <Box className={classes.socialBox} ><LinkedInIcon className={classes.Icon} /><Link href="https://www.linkedin.com/in/tawfeeq-madeam-139b191a6/?fbclid=IwAR3xhXKcEHu5-BKhdu1kHsLNe8lefW6w-Q94o2OYbavzgn-jayPNAS7LWH8" sx={styleLinks} target="_blank" underline="none" ><Typography gutterBottom className={classes.groupItem} sx={styleStyleSocial}>LinkedIn</Typography></Link></Box>
                    </Box>
                </Grid>                                
                
            </Grid>

            
            </Box>
        
        </footer>
        </>
     );
}
 
export default Footer;