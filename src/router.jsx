// import { createBrowserRouter, Navigate } from "react-router-dom";
// import Home from "./pages/Home";
// import ProductList from "./pages/ProductList";
// import Product from "./pages/Product";
// import Cart from "./pages/Cart";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Success from "./pages/Success";
// import { useSelector } from "react-redux";

//  const user = useSelector((state) => state.user);

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/products/:category",
//     element: <ProductList />,
//   },
//   {
//     path: "/product/:id",
//     element: <Product />,
//   },
//   {
//     path: "/cart",
//     element: <Cart />,
//   },
//   {
//     path: "/success",
//     element: <Success />,
//   },
//   {
//     path: "/login",
//     element: user ? <Navigate to="/" /> : <Login />,
//   },
//   {
//     path: "/register",
//     element: user ? <Navigate to="/" /> : <Register />,
//   },
// ]);
