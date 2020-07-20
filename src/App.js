import React, { useState } from "react";
import styled from "@emotion/styled";
import Header from "./components/Header";
import Form from "./components/Form";
import Resume from "./components/Resume";
import Result from "./components/Result";
import Spinner from "./components/Spinner";

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContainerForm = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

function App() {
  const [resume, setResume] = useState({
    quotation: 0,
    data: {
      brand: "",
      year: "",
      plan: "basic",
    },
  });
  const [loading, setLoading] = useState(false);

  // extraer datos
  const { quotation, data } = resume;

  return (
    <Container>
      <Header title="Insurance" />
      <ContainerForm>
        <Form saveResume={setResume} saveLoading={setLoading} />
        {loading ? <Spinner /> : null}
        {!loading ? (
          <React.Fragment>
            <Resume data={data} />
            <Result quotation={quotation} />
          </React.Fragment>
        ) : null}
      </ContainerForm>
    </Container>
  );
}

export default App;
