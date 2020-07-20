import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const Messagge = styled.p`
  background-color: #f0ece3;
  margin-top: 2rem;
  padding: 0.5rem;
  text-align: center;
`;

const TextQuotation = styled.p`
  color: #00838f;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
`;

const ResultQuotation = styled.div`
  text-align: center;
  padding: 0.5rem;
  border: 1px solid #26c6da;
  background-color: rgba(127, 224, 237);
  margin-top: 1rem;
  position: relative;
`;

const Result = ({ quotation }) => {
  return quotation === 0 ? (
    <Messagge>Fill the form</Messagge>
  ) : (
    <ResultQuotation>
      <TransitionGroup component="span" className="resultado">
        <CSSTransition
          classNames="resultado"
          key={quotation}
          timeout={{ enter: 500, exit: 500 }}
        >
          <TextQuotation>
            Total: $ <span>{quotation}</span>
          </TextQuotation>
        </CSSTransition>
      </TransitionGroup>
    </ResultQuotation>
  );
};

Result.propTypes = {
  quotation: PropTypes.number.isRequired,
};

export default Result;
