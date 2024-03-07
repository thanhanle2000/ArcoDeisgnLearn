import { ReactElement } from "react";
import Analysis from "src/Presentation/Pages/Analysis";
import Dashboard from "src/Presentation/Pages/Dashboard";

export interface Routes {
  path: string;
  element: ReactElement<any, any>;
}

// PRIVATE ROUTE
export const PRIVATE_ROUTE: Routes[] = [
  { path: "/", element: <Dashboard /> },
  { path: "/analysis", element: <Analysis /> },
];
