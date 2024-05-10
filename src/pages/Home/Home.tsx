import React, { useEffect, useState } from "react";
import { Button } from "components";
import { toastError, toastSucess } from "utils/functions";

const Home = () => {
  return (
    <div>
      Home
      <Button handleOnclick={() => toastSucess("Succeess")} title="Success" />
      <Button handleOnclick={() => toastError("Errror")} title="Errror" />
    </div>
  );
};

export default Home;
