import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Route, Routes } from 'react-router-dom';

import ProductDetails from './pages/product-details/ProductDetails';
import Products from './pages/products/Products';


const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
});

function ToggleColorMode() {
  // Render
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/products/:productId' element={<ProductDetails />} />
      </Routes>
    </ThemeProvider>
  )
}

export default ToggleColorMode
