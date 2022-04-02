import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
const useStyles= makeStyles({
    Box:{
            boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            padding:2
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
    name:{
        padding: "5px",
        textAlign: "center",
    },
    link:{
        textDecoration:"none",
        '&:active': {
        color: 'black',
      }
    }
})
const DepartmentItem = (props) => {
    const {items, name} = props;
    const classes = useStyles(props);
    return ( 
        <>
        <Grid container spacing={3}>
        {
         items.map(index => {
           return(
                   <Grid key={index.id} item xs={12} sm={6} md={4}  >
                     <Link className={classes.link} to={`/${name}/${index.name.replaceAll(' ','_')}`} state={index} > 
                        <Box className={classes.Box}>
                            <img src={index.img} alt={name} className={classes.img}/>
                            <Box fullWidth  className={classes.name} >{index.name}</Box>  
                        </Box>
                     </Link>
                   </Grid>
                 )
           }
            )       
        }
        </Grid>

        </>
     );
}
 
export default DepartmentItem;