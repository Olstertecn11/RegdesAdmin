import React, { useState } from "react";
import { Select, Box, Input, Button, FormControl, FormLabel, VStack, Heading } from "@chakra-ui/react";
import axios from "axios";
import { addClase } from "../../services/clases";
import { getChurchs } from "../../services/church";
import { toast } from "react-toastify";

const AddClase = ({ onAdd }) => {
  const empty_class = { id_iglesia: 0, nombre: "" };
  const [clase, setClase] = useState(empty_class);
  const [iglesias, setIglesias] = useState([]);

  const handleChange = (e) => {
    setClase({ ...clase, [e.target.name]: e.target.value });
  };

  const fetchIglesias = async () => {
    const response = await getChurchs();
    if (response.status === 200) {
      setIglesias(response.data);
    }
  };

  const handleAdd = async () => {
    if (clase.id_iglesia === 0 || clase.nombre === "") {
      toast.warning("Debe llenar todos los campos");
      return;
    }

    try {
      const response = await addClase(clase);
      if (response.status === 201) {
        onAdd(response.data);
        setClase(empty_class);
        toast.success("Clase agregada correctamente");
        return;
      }
      console.log(response);
      toast.error("Error al agregar la Clase");

    } catch (error) {
      console.error("Error al agregar la Clase:", error);
    }
  };

  React.useEffect(() => {
    fetchIglesias();
  }, []);

  return (
    <Box bg="gray.100" p={6} borderRadius="md" boxShadow="lg" w="100%">
      <Heading size="md" color="blue.600" textAlign="center" mb={4}>
        Agregar Clase
      </Heading>
      <VStack spacing={4}>
        <FormControl>
          <FormLabel>Nombre de la Clase</FormLabel>
          <Input
            placeholder="Ingrese nombre"
            value={clase.nombre}
            onChange={handleChange}
            name="nombre"
            bg="white"
            borderColor="gray.300"
          />
        </FormControl>

        <FormControl>
          <FormLabel>Iglesia</FormLabel>
          <Select
            placeholder="Seleccione una iglesia"
            value={clase.id_iglesia}
            onChange={handleChange}
            name="id_iglesia"
            bg="white"
            borderColor="gray.300"
          >
            {iglesias.map((iglesia) => (
              <option key={iglesia.id} value={iglesia.id}>
                {iglesia.nombre}
              </option>
            ))}
          </Select>
        </FormControl>

        <Button colorScheme="blue" w="full" onClick={handleAdd}>
          Agregar Misión
        </Button>
      </VStack>
    </Box>
  );
};

export default AddClase;
