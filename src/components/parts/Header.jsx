
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { makeStyles } from '@mui/styles';
import MenuIcon from '@mui/icons-material/Menu';
import {Link,useLocation}  from "react-router-dom";
import { useEffect,useState } from "react";
const styles = makeStyles((theme ) => ({
    NameShop:{
        margin:"auto",
        textAlign:"center",
    },
    departments:{
        margin:"auto",
        width:"1200px"
    },
    departmentItem:{
        display : "inline",
        padding:"5px",
        marginRight:"10px",
        fontFamily:"cursive",
        '&:hover': {
            backgroundColor:"#c5cae9",
            borderRadius:"5px",
            cursor:"pointer",
            color:"white",
            paddingTop:"6px",
            borderBottom:"2px solid red"
        }
        
    },
    link:{
        textDecoration:"none",
        color:"black"
    },
    f:{
        margin:"auto",
        backgroundImage:"url(https://static.wixstatic.com/media/11062b_4b7c9a8e48334d5aad2fd274fddba3bc~mv2.jpg/v1/fill/w_640,h_424,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_4b7c9a8e48334d5aad2fd274fddba3bc~mv2.jpg)",
        width:"1200px",
        height:"250px",
        backgroundSize:"cover",
        [theme.breakpoints.down("lg")]: {
            width:"90%",        
        },
    

    },
  }));

const Header = (props) => {
    
    const [path,setPath] = useState('');
    const classes = styles(props);
    const style = {mb:2}
    const  myPath = useLocation().pathname;
    useEffect(()=>{
      
     
    },[])
    return ( 
        <>
        <AppBar  sx={{color:"#000"}} position="static">
            <Toolbar >
                <Box className={classes.NameShop}>
                    <Typography  variant="h4"> Beautiful Shop  </Typography>
                </Box>
            </Toolbar>

        </AppBar>
        {myPath === "/" ?
        <>
        <Toolbar >
            <Box className={classes.departments}>
                <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mb: 0.5 }}
            >
                <MenuIcon />
            </IconButton>
                <Box className={classes.departmentItem} > <Link className={classes.link} to="/Men">  <Typography sx={{mr:2,fontFamily:"cursive",display:"inline"}} variant="h6" >Men </Typography></Link></Box>
                <Box className={classes.departmentItem} > <Link className={classes.link} to="/Women">  <Typography sx={{mr:2,fontFamily:"cursive",display:"inline"}} variant="h6" >Women </Typography></Link></Box>
                <Box className={classes.departmentItem} > <Link className={classes.link} to="/Boys">  <Typography sx={{mr:2,fontFamily:"cursive",display:"inline"}} variant="h6" >Boys </Typography></Link></Box>
                <Box className={classes.departmentItem} > <Link className={classes.link} to="/Girls">  <Typography sx={{mr:2,fontFamily:"cursive",display:"inline"}} variant="h6" >Girls </Typography></Link></Box>
                <Box className={classes.departmentItem} > <Link className={classes.link} to="/Baby">  <Typography sx={{mr:2,fontFamily:"cursive",display:"inline"}} variant="h6" >Baby </Typography></Link></Box>
            </Box>
        </Toolbar>
        <Box className={classes.f}>
            <Typography variant="h4" sx={{textAlign:"center" ,pt:11}}>Great Clothes</Typography>
        </Box>
        </>
        :
        null
        }
       
       
        <Toolbar/>
        </>
     );
}
 
export default Header;