import React, { useState } from "react";
import "animate.css";

import { ContentWrapper, Heading, Paragraph, Input } from "./Styled";

const Content = props => {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    props.onSubmit(value);
    setValue("");
    document.title = `Gurajmesu Search - ${value}`;
  };

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <ContentWrapper className="animated bounceInRight slow">
      <Heading>Gurajmesu Search</Heading>
      <Paragraph>
        Najlepsza wyszukiwarka tekstów utworów autorstwa Grimes.
      </Paragraph>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Tytuł utworu:"
          value={value}
          onChange={handleChange}
        />
      </form>
    </ContentWrapper>
  );
};

export default Content;
