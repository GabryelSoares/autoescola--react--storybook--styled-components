import React from "react";
import { useParams } from "react-router-dom";

const Loja = () => {  
  const { id } = useParams();

  return (
  <>
    <h1>{'Loja: ' + id}</h1>
  </>
)};

export default Loja;
