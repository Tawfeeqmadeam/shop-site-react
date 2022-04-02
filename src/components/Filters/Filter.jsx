
import { TextField } from "@mui/material";
import { useState } from "react";

const Filter = (props) => {
    const [filter,setFilter]= useState('');
    const filterHandler = (e) => {
		const name = e.target.value;
		setFilter(name);
		props.filterNames(name);
	};
    return ( 
        <>
        <TextField  sx={{marginBottom:2,borderRadius:10}} value={filter} onChange={filterHandler} 
                    fullWidth id="outlined-basic" label={`Search item  in  ${props.name}`} variant="outlined" />

        </>
     );
}
 
export default Filter;