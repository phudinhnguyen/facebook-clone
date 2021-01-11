import { getInfoFromToken, getToken } from "@api/auth";
import { useAsync } from "src/ui/shared/hook/useAsync";
import React, { useEffect } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { useRecoilState } from "recoil";

function PrivateLogin(Component: React.ComponentType<any | string>) {
  return withRouter(({ history }: RouteComponentProps) => {

    // useEffect(() => {
    //   if (getToken()) {
    //     const { UserName = "" } = getInfoFromToken();
    //     setLogin((pre) => ({
    //       ...pre,
    //       privateLogin: true,
    //       controlLogin: true,
    //       name: UserName,
    //     }));
    //   } else {
    //     setLogin((pre) => ({ ...pre, controlLogin: true }));
    //   }
    // }, []);
    return (
      <>
        {/* {login.controlLogin ? ( */}
        <Component privateLogin={true} />
        {/* ) : null} */}
      </>
    );
  });
}

export default PrivateLogin;
