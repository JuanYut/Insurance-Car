import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { firstMayus } from "../helper";

const ContainerResume = styled.div`
  padding: 1rem;
  background-color: #00838f;
  color: #fff;
  margin-top: 1rem;
`;

const Resume = ({ data }) => {
  // extraer data
  const { brand, year, plan } = data;

  if (brand === "" || year === "" || plan === "") return null;

  return (
    <ContainerResume>
      <h2>Resume: </h2>
      <ul>
        <li>Brand: {firstMayus(brand)} </li>
        <li>Year: {firstMayus(year)}</li>
        <li>Plan: {firstMayus(plan)} </li>
      </ul>
    </ContainerResume>
  );
};

Resume.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Resume;
