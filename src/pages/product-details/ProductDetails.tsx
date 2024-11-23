import { Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

import useProduct from "../../hooks/useProduct";
import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import { signIn, signOut } from '../../redux/authSlice';

export default function ProductDetails() {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn)
  console.log('isLoggedIn', isLoggedIn);
  const dispatch = useAppDispatch();
  // Utils
  const navigate = useNavigate();
  const { productId } = useParams<{ productId: string }>();
  const { product } = useProduct(productId!);

  // Handlers
  function logIn() {
    dispatch(signIn())
  }

  function logOut() {
    dispatch(signOut())
  }

  // Render
  return (
    <>
      <pre>
        {
          JSON.stringify(product, null, 2)
        }
      </pre>
      <Button onClick={logIn} variant="contained">Sign in</Button>
      <Button onClick={logOut} variant="contained">Sign out</Button>
      <Button onClick={() => navigate('/')} variant="outlined">Back to Products</Button>
    </>
  );
}