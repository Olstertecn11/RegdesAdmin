
import React, { useState } from "react";
import { Box, Input, Button, FormControl, FormLabel, VStack, Heading, Select } from "@chakra-ui/react";

const AddChurch = ({ onAdd }) => {
  const [church, setChurch] = useState({ nombre: "", distrito: "", mision: "" });

  const handleChange = (e) => {
    setChurch({ ...church, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (church.nombre && church.distrito && church.mision) {
      onAdd(church);
      setChurch({ nombre: "", distrito: "", mision: "" });
    }
  };

  return (
    <Box bg="gray.100" p={6} borderRadius="md" boxShadow="lg" w="100%">
      <Heading size="md" color="blue.600" textAlign="center" mb={4}>
        Agregar Iglesia
      </Heading>
      <VStack spacing={4}>
        <FormControl>
          <FormLabel>Nombre</FormLabel>
          <Input
            placeholder="Ingrese nombre"
            name="nombre"
            value={church.nombre}
            onChange={handleChange}
            bg="white"
            borderColor="gray.300"
          />
        </FormControl>

        <FormControl>
          <FormLabel>Distrito</FormLabel>
          <Input
            placeholder="Ingrese distrito"
            name="distrito"
            value={church.distrito}
            onChange={handleChange}
            bg="white"
            borderColor="gray.300"
          />
        </FormControl>

        <FormControl>
          <FormLabel>Misión</FormLabel>
          <Select
            name="mision"
            value={church.mision}
            onChange={handleChange}
            bg="white"
            borderColor="gray.300"
          >
            <option value="">Seleccionar misión</option>
            <option value="1">Misión 1</option>
            <option value="2">Misión 2</option>
            <option value="3">Misión 3</option>
          </Select>
        </FormControl>

        <Button colorScheme="blue" w="full" onClick={handleAdd}>
          Agregar Iglesia
        </Button>
      </VStack>
    </Box>
  );
};

export default AddChurch;
