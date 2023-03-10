import { useEffect, useState } from "react";
import styled from "styled-components";
import ListItem from "./components/ListItem";
import TodoInput from "./components/TodoInput";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  padding: 20px;
`;
const Header = styled.h1`
  font-weight: 900;
  background-color: gray;
  color: white;
  padding: 20px;
  border-radius: 20px;
`;
const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 80vw;
`;

function App() {
  const [todos, setTodos] = useState(() => {
    return (
      JSON.parse(localStorage.getItem("todos")) || [
        "Wash Car",
        "Get Groceries",
        "Make Lunch",
      ]
    );
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <Container>
      <Header>Todo App</Header>
      <TodoInput todos={todos} setTodos={setTodos} />
      <List>
        {todos.map((item, index) => {
          return (
            <ListItem key={index} todos={todos} setTodos={setTodos} name={item}>
              {item}
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
}

export default App;
