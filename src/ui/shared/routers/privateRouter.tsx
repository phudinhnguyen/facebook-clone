import Home from "@view/Home";

export const privateRouter: Array<object> = [
  {
    path: "/",
    exact: true,
    permissionCode: "ALLOW",
    main: () => <Home />,
  },
];
