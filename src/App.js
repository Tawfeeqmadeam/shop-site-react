
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Home from './pages/Home';
import Department from "./pages/template/Department";
import { ThemeProvider } from "@mui/styles";

import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import PrductDetails from "./components/product/PrductDetails";
let theme = createTheme();
theme = responsiveFontSizes(theme);

function App(props) {
    
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home mh="mh" /> }/>
      <Route exact path="/Men" element={<Department name="Men" /> }/>
      <Route exact path="/Women" element={<Department name="Women" /> }/>
      <Route exact path="/Boys" element={<Department name="Boys" /> }/>
      <Route exact path="/Girls" element={<Department name="Girls" /> }/>
      <Route exact path="/Baby" element={<Department name="Baby" /> }/>
      <Route exact path="/Men/:NameItem" element={<PrductDetails /> }/>
      <Route exact path="/Women/:NameItem" element={<PrductDetails  /> }/>
      <Route exact path="/Boys/:NameItem" element={<PrductDetails /> }/>
      <Route exact path="/Girls/:NameItem" element={<PrductDetails /> }/>
      <Route exact path="/Baby/:NameItem" element={<PrductDetails  /> }/>
    </Routes>

    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
