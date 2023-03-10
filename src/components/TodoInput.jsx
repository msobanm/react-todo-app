import React, { useRef } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
const Input = styled.input`
  width: 30rem;
  font-size: 1rem;
  border: 0.5px solid darkgray;
  border-radius: 10px;
  padding: 5px;

  &:focus {
    outline: none;
  }
`;
const Button = styled.button`
  padding: 10px;
  font-size: 1rem;
  font-weight: 700;
  border: 1px solid darkgray;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.2s ease-out;

  &:hover {
    background-color: darkgray;
  }
`;

const TodoInput = ({ todos, setTodos }) => {
  const inputRef = useRef();

  function handleSubmit() {
    setTodos([...todos, inputRef.current.value]);
  }
  return (
    <Container>
      <Input ref={inputRef} />
      <Button onClick={handleSubmit}>Submit</Button>
    </Container>
  );
};

export default TodoInput;
