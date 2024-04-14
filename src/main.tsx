import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
//import Types from "./app/types.tsx";

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />
  },
  // {
  //   path:"/types",
  //   element: <Types />
  // }
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);



