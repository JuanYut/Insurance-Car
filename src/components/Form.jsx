import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { getYearDif, increaseBrand, getPlan } from "../helper";

const Field = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

const Label = styled.label`
  flex: 0 0 100px;
`;

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  --webkit-appearance: none;
`;

const InputRadio = styled.input`
  margin: 0 1rem;
`;

const Button = styled.button`
  background-color: #00838f;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  margin-top: 2rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #26c6da;
    cursor: pointer;
  }
`;

const Error = styled.div`
  background-color: red;
  color: white;
  padding: 1rem;
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;
`;

const Form = ({ saveResume, saveLoading }) => {
  const [data, setData] = useState({
    brand: "",
    year: "",
    plan: "basic",
  });
  const [error, setError] = useState(false);

  // extraer los valores del state
  const { brand, year, plan } = data;

  // leer los datos del form y colocarlos en el state
  const getInfo = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  // cuando el usuario presione el submit
  const handleInsurance = (e) => {
    e.preventDefault();
    if (brand.trim() === "" || year.trim() === "" || plan.trim() === "") {
      setError(true);
      return;
    }
    setError(false);

    // base de 2000
    let resu = 2000;
    // obtener la diferencia de años
    const yearDif = getYearDif(year);
    // por cada año hay que restar el 3%
    resu -= (yearDif * 3 * resu) / 100;
    // calcular incremento depende la marca
    resu = increaseBrand(brand) * resu;
    // calcular incremento depende del plan
    const increasePlan = getPlan(plan);
    resu = parseFloat(increasePlan * resu).toFixed(2);

    saveLoading(true);
    setTimeout(() => {
      // pasa la informacion al componente padre
      saveLoading(false);
      saveResume({
        quotation: Number(resu),
        data,
      });
    }, 2000);
  };

  return (
    <form onSubmit={handleInsurance}>
      {error ? <Error>All fields are required</Error> : null}
      <Field>
        <Label>Marca</Label>
        <Select name="brand" value={brand} onChange={getInfo}>
          <option value="">-- Select one --</option>
          <option value="american">American</option>
          <option value="european">European</option>
          <option value="asian">Asian</option>
        </Select>
      </Field>

      <Field>
        <Label>Marca</Label>
        <Select name="year" value={year} onChange={getInfo}>
          <option value="">-- Select year --</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </Select>
      </Field>

      <Field>
        <Label>Plan</Label>
        <InputRadio
          type="radio"
          name="plan"
          value="basic"
          checked={plan === "basic"}
          onChange={getInfo}
        />{" "}
        Basic
        <InputRadio
          type="radio"
          name="plan"
          value="complete"
          checked={plan === "complete"}
          onChange={getInfo}
        />{" "}
        Complete
      </Field>

      <Button type="submit">Send</Button>
    </form>
  );
};

Form.propTypes = {
  saveResume: PropTypes.func.isRequired,
  saveLoading: PropTypes.func.isRequired,
};

export default Form;
