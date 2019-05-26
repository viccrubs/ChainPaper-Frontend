import React from "react";
import { RouteComponentProps, navigate } from "@reach/router";
import { Button } from "antd";

const AnotherPage: React.FunctionComponent<RouteComponentProps> = () => {
  return (
    <Button onClick={() => navigate("/")}>Hello From Antd in AnotherPage!</Button>
  );
};

export default AnotherPage;
