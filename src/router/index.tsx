import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import App from "../App";

import {
  Home,
  SignIn,
  SignUp,
  Products,
  Categories,
  Users,
  Product,
  Upload
} from "../pages";

const index = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index element={<SignIn />} />
        <Route path="/admin-panel/*" element={<Home />}>
          <Route path="" element={<Products />} />
          <Route path=":id" element={<Product />} />
          <Route path="upload" element={<Upload />} />
          <Route path="singlepage" element={<Product />} />
          <Route path="categories" element={<Categories />} />
          <Route path="users" element={<Users />} />
        </Route>
        <Route path="/signup" element={<SignUp />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default index;
