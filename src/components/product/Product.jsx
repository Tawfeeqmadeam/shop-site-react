import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Rating from '@mui/material/Rating';
const useStyles= makeStyles({
    Box:{
           /* boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",*/
            border:"1px solid #eeeeee"
            ,
        },
    img: {
        width:"100%",
        height:"18rem",
        transition: "transform .4s",
        '&:hover': {
            transform: "scale(0.97)"
        }
    },
    button:{
        padding: "5px",
        textAlign: "center",
        borderRadius: "5px",
        /*
        '&:hover': {
                backgroundColor:"#c5cae9",
                border: "1.5px solid black",
        }
        */
    }
})

const Product = (props) => {
const classes = useStyles(props);
    const {src , name,rat} = props;
    return ( 
        <Box className={classes.Box}>
            <img src={src} alt={name} className={classes.img}/>
            <Box fullWidth className={classes.button} >
            <Typography>{name}</Typography>
            { rat ? 
            <Rating
            readOnly 
            name="read-only"
            value={2}
            />: null}
            <Typography>$50.00</Typography>
            </Box> 
        </Box>
     );
}
 
export default Product;