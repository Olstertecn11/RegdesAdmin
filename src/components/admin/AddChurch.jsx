
import React, { useState } from "react";
import { Box, Input, Button, FormControl, FormLabel, VStack, Heading, Select } from "@chakra-ui/react";
import { getMisiones } from '../../services/mision'
import { addChurch } from "../../services/church";
import { toast } from "react-toastify";

const AddChurch = ({ onAdd }) => {
  const [church, setChurch] = useState({ nombre: "", distrito: "", mision: "" });
  const [misiones, setMisiones] = useState([]);

  const fetch = async () => {
    const response = await getMisiones();
    if (response.status === 200) {
      setMisiones(response.data);
    }
  }

  const handleChange = (e) => {
    setChurch({ ...church, [e.target.name]: e.target.value });
  };

  const handleAdd = async () => {
    if (church.nombre && church.distrito && church.mision) {
      const response = await addChurch({ ...church, id_mision: church.mision });
      console.log(response)
      if (response.status === 201) {
        onAdd(church);
        setChurch({ nombre: "", distrito: "", mision: "" });
        toast.success("Iglesia agregada correctamente");
        return;
      }
      toast.error("Error al agregar la iglesia");
    }
  };

  React.useEffect(() => {
    fetch();
  }, []);

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
            <option value="">Seleccione una misión</option>
            {misiones.map((mision) => (
              <option key={mision.id} value={mision.id}>
                {mision.nombre}
              </option>
            ))}
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
