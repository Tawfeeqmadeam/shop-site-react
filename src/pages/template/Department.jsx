
import Header from "../../components/parts/Header";
import Box from "@mui/material/Box";
import { makeStyles } from '@mui/styles';
import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import {getItemByDepartment} from '../../components/data/data.js';
import DepartmentItem from "./DepartmentItem";
import Filter from "../../components/Filters/Filter";
import Footer from '../../components/parts/Footer';

const styles = makeStyles((theme ) => ({
  Box: {
      margin:"auto",
      minHeight:530,
      marginBottom:"10px",
      width:"1200px",
      [theme.breakpoints.down("lg")]: {
          width:"90%",        
      },
  },
}));

const Department = (props) => {

  const [items,setItems] = useState([])
  const classes = styles();
  const [filter,setFilter]= useState('');
  
  const filterNames = (name) => {
    setFilter(name);
  };
  const namesHandler = () => {
    if (filter.length !== 0) {
      return items.filter((el) => el.name.includes(filter));
    }
    return items;
  };
  useEffect(()=>{
    const enterData =() =>{
    setItems( getItemByDepartment(props.name))
  }
    enterData();
  },[])
 
    return ( 
        <>
           <Header />
           <Box className={classes.Box} >
              <Typography gutterBottom variant="h3" className={classes.NameShop}>{props.name} </Typography>
              <Filter name={props.name} filterNames={filterNames}/>
              <DepartmentItem name={props.name} items={namesHandler()}/>
           </Box>
           <Footer/>
        </>
     );
}
 
export default Department;