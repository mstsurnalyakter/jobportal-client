import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Registration from "../pages/Authentication/Registration";
import Login from "../pages/Authentication/Login";
import AllJobs from "../pages/AllJobs/AllJobs";
import AddJob from "../pages/AddJob/AddJob";
import MyJobs from "../pages/MyJobs/MyJobs";
import JobDetails from "../pages/JobDetails/JobDetails";
import AppliedJobs from "../pages/AppliedJobs/AppliedJobs";
import UpdateJob from "../pages/UpdateJob/UpdateJob";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement:<ErrorPage/>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/all-jobs",
        element: <AllJobs />,
      },
      {
        path: "/add-job",
        element: <AddJob />,
      },
      {
        path: "/my-jobs",
        element: <MyJobs />,
      },
      {
        path: "/job/:id",
        element: <JobDetails />,
      },
      {
        path: "/applied-jobs",
        element:<AppliedJobs/>
      },
      {
        path:"/update-job/:id",
        element:<UpdateJob/>
      }
    ],
  },
]);


export default router;