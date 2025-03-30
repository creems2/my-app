import React, { useState } from "react";
import { TextField, Container, Typography } from "@mui/material";

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    setCelsius(value);
    setFahrenheit(value ? (value * 9) / 5 + 32 : "");
  };

  const handleFahrenheitChange = (e) => {
    const value = e.target.value;
    setFahrenheit(value);
    setCelsius(value ? ((value - 32) * 5) / 9 : "");
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h5" gutterBottom>
        Температурный конвертер
      </Typography>
      <TextField
        label="Градусы Цельсия"
        variant="outlined"
        fullWidth
        margin="normal"
        value={celsius}
        onChange={handleCelsiusChange}
      />
      <TextField
        label="Градусы Фаренгейта"
        variant="outlined"
        fullWidth
        margin="normal"
        value={fahrenheit}
        onChange={handleFahrenheitChange}
      />
    </Container>
  );
};

export default TemperatureConverter;
