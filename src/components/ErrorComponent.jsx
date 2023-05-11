import React from "react";
import { Alert, AlertIcon } from "@chakra-ui/react";

const ErrorComponent = ({ message }) => {
  return (
    <Alert
      status="error"
      position={fixed}
      bottom={"4"}
      left={"50%"}
      transform={"translate(-50%)"}
      width={"container.lg"}
    >
      <AlertIcon />
      {message}
    </Alert>
  );
};

export default ErrorComponent;
