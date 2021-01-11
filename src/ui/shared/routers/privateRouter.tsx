import Dashboard from "@view/Dashboard";


export const privateRouter: Array<object> = [
  {
    path: "/",
    exact: true,
    permissionCode: "ALLOW",
    main: () => <Dashboard />,
  },
];
