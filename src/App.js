
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./Component/Layout/AppLayout";
import { CountryDetails } from "./Component/Layout/CountryDetails";

//  import Page

import { Home } from "./Pages/Home"
import { About } from "./Pages/About"
import { Country } from "./Pages/Country"
import { Contact } from "./Pages/Contact"
import { ErrorPage } from "./Pages/ErrorPage";

import "./App.css"

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },

            {
                path: "about",
                element: <About />,
            },

            {
                path: "country",
                element: <Country />,
            },

            {
                path: "country/:id",
                element: <CountryDetails />,
            },
            
            {
                path: "contact",

                element: <Contact />,
            },
        ]
    }

]);



export const App = () => {

    return <RouterProvider router={router}></RouterProvider>

}

export default App;

