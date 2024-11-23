import { Button } from "@mui/material";

import ProductsTable from "../../components/ProductsTable";
import useProducts from "../../hooks/useProducts";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { toggleThemeColor } from "../../redux/themeSlice";
import { useColorScheme } from "@mui/material";

export default function Products() {
  // Utils
  const { pending, products } = useProducts();
  const dispatch = useAppDispatch();
  const themeColor = useAppSelector(state => state.theme.themeColor);
  const { mode, setMode } = useColorScheme();

  // Handlers
  function onToggleTheme() {
    dispatch(toggleThemeColor());
    setMode(themeColor === "dark" ? "light" : "dark")
  }

  // Render
  if (!mode) {
    return null;
  }

  return (
    <>
      <ProductsTable loading={pending} products={products} />
      <p>{themeColor}</p>
      <Button onClick={onToggleTheme} variant="contained">Toggle Theme</Button>
    </>
  );
}