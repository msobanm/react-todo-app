import React from "react";
import styled from "styled-components";

const Item = styled.li`
  background-color: lightgray;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
const Button = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 5px;
  color: white;
  background-color: #9b2020;
  cursor: pointer;
  transition: 0.2s ease-out;

  &:hover {
    background-color: red;
  }
`;

const ListItem = ({ children, todos, setTodos, name }) => {
  function removeTodos(name) {
    const array = todos.filter((el) => el !== name);
    // const arr = data.filter((item) => item.name !== i);
    setTodos(array);
  }
  return (
    <Item>
      {children}
      <Button onClick={() => removeTodos(name)}>X</Button>
    </Item>
  );
};

export default ListItem;
