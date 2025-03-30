import React from "react";
import TemperatureConverter from "./TemperatureConverter";
import TodoList from "./TodoList";
import { Container } from "@mui/material";

function App() {
  return (
    <Container>
      <TemperatureConverter />
      <TodoList />
    </Container>
  );
}

export default App;
