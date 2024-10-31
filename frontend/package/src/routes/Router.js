import React, { lazy } from "react";
import { Navigate } from "react-router-dom";
import Loadable from "../layouts/full/shared/loadable/Loadable";

/* ***Layouts**** */
const FullLayout = Loadable(lazy(() => import("../layouts/full/FullLayout")));
const BlankLayout = Loadable(
  lazy(() => import("../layouts/blank/BlankLayout"))
);

/* ****Pages***** */
const Dashboard = Loadable(lazy(() => import("../views/dashboard/Dashboard")));

const SamplePage = Loadable(
  lazy(() => import("../views/sample-page/SamplePage"))
);
                   // admin pages
const AdminPage = Loadable(lazy(() => import("../views/admin-page/adminPage")));
const ManageOfficer = Loadable(
  lazy(() => import("../views/manage-officerPage/manageOfficer"))
);
const OfficerRegister = Loadable(
  lazy(() => import("../views/officer-registrationPage/officerRegister"))
);
            // officer pages

 const IncidentAsigned = Loadable(
              lazy(() => import("../views/inc-asignedPage/incidentAsigned"))
            );
 const IncidentDetail = Loadable(
              lazy(() => import("../views/inc-detailPage/incidentDetail"))
            );
 const ManageIncidents = Loadable(
              lazy(() => import("../views/inc-statusPage/manageIncidents"))
            );


const Icons = Loadable(lazy(() => import("../views/icons/Icons")));
const TypographyPage = Loadable(
  lazy(() => import("../views/utilities/TypographyPage"))
);
const Shadow = Loadable(lazy(() => import("../views/utilities/Shadow")));
const Error = Loadable(lazy(() => import("../views/authentication/Error")));
const Register = Loadable(
  lazy(() => import("../views/authentication/Register"))
);
const Login = Loadable(lazy(() => import("../views/authentication/Login")));

// Router

const Router = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/dashboard" /> },
      { path: "/dashboard", exact: true, element: <Dashboard /> },
      { path: "/sample-page", exact: true, element: <SamplePage /> },
                 // Admin Pages
      { path: "/admin-page", exact: true, element: <AdminPage /> },
      { path: "/manage-officerPage", exact: true, element: <ManageOfficer /> },
      {
        path: "/officer-registrationPage",
        exact: true,
        element: <OfficerRegister />,
      },
                      // Officer pages
      { path: "/inc-asignedPage", exact: true, element: <IncidentAsigned /> },
      { path: "/inc-detailPage", exact: true, element: <IncidentDetail /> },
      { path: "/inc-statusPage", exact: true, element: <ManageIncidents /> },

      { path: "/icons", exact: true, element: <Icons /> },
      { path: "/ui/typography", exact: true, element: <TypographyPage /> },
      { path: "/ui/shadow", exact: true, element: <Shadow /> },
      { path: "*", element: <Navigate to="/auth/404" /> },
    ],
  },
  {
    path: "/auth",
    element: <BlankLayout />,
    children: [
      { path: "404", element: <Error /> },
      { path: "/auth/register", element: <Register /> },
      { path: "/auth/login", element: <Login /> },
      { path: "*", element: <Navigate to="/auth/404" /> },
    ],
  },
];

export default Router;
