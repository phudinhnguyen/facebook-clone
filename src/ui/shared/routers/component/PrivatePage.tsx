import React, { useEffect } from "react";
import { privateRouter } from "../privateRouter";
import ShowRouter from "./ShowRouter";

interface Props {
  privateLogin?: boolean;
}

const PrivatePage: React.FC<Props> = ({ }) => {
  return <ShowRouter routers={privateRouter} />
};

export default PrivatePage;