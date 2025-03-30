import React, { useState } from "react";
import { TextField, Button, List, ListItem, ListItemText, IconButton, Container, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h5" gutterBottom>
        Список дел
      </Typography>
      <TextField
        label="Новая задача"
        variant="outlined"
        fullWidth
        margin="normal"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={addTask}>
        Добавить
      </Button>
      <List>
        {tasks.map((t, index) => (
          <ListItem key={index} secondaryAction={
            <IconButton edge="end" color="error" onClick={() => removeTask(index)}>
              <DeleteIcon />
            </IconButton>
          }>
            <ListItemText primary={t} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default TodoList;
