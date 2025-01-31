import React, { useState } from "react";
import { Box, Input, Button, FormControl, FormLabel, VStack, Heading } from "@chakra-ui/react";
import axios from "axios";
import { addMision } from "../../services/mision";
import { toast } from "react-toastify";

const AddMision = ({ onAdd }) => {
  const [mision, setMision] = useState("");

  const handleChange = (e) => {
    setMision(e.target.value);
  };

  const handleAdd = async () => {
    if (!mision.trim()) return;

    try {
      const response = await addMision({ nombre: mision });
      if (response.status === 201) {
        onAdd(response.data);
        setMision("");
        toast.success("Misión agregada correctamente");
        return;
      }
      console.log(response);
      toast.error("Error al agregar la misión");

    } catch (error) {
      console.error("Error al agregar la misión:", error);
    }
  };

  return (
    <Box bg="gray.100" p={6} borderRadius="md" boxShadow="lg" w="100%">
      <Heading size="md" color="blue.600" textAlign="center" mb={4}>
        Agregar Misión
      </Heading>
      <VStack spacing={4}>
        <FormControl>
          <FormLabel>Nombre de la Misión</FormLabel>
          <Input
            placeholder="Ingrese nombre"
            value={mision}
            onChange={handleChange}
            bg="white"
            borderColor="gray.300"
          />
        </FormControl>

        <Button colorScheme="blue" w="full" onClick={handleAdd}>
          Agregar Misión
        </Button>
      </VStack>
    </Box>
  );
};

export default AddMision;
