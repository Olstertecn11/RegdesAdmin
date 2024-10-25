
import { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Select,
  Heading,
  useToast,
} from '@chakra-ui/react';
import { createTipoUva } from '../../services/graphe_type';
import { getAllParcelas } from '../../services/parcela';
import React from 'react';

function GrapeRegister() {
  const [grapeName, setGrapeName] = useState('');
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');
  const [ripeningTime, setRipeningTime] = useState('');
  const [parcel, setParcel] = useState('');
  const [parcels, setParcels] = useState([]);
  const toast = useToast();

  const fetchParcels = async () => {
    const response = await getAllParcelas();
    setParcels(response.data);
  }

  React.useEffect(() => {
    fetchParcels();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!grapeName || !size || !color || !ripeningTime || !parcel) {
      toast({
        title: 'Error',
        description: 'Por favor, rellena todos los campos',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }


    // 'nombre_uva' => 'required|string|max:255',
    // 'tamano_uva' => 'required|string|max:255',
    // 'color_uva' => 'required|string|max:100',
    // 'tiempo_maduracion' => 'required|integer',
    // 'parcela_id' => 'required|exists:parcelas,id'
    const grapeTypeData = {
      nombre_uva: grapeName,
      tamano_uva: size,
      color_uva: color,
      tiempo_maduracion: parseInt(ripeningTime),
      parcela_id: parcel,
    };

    const response = await createTipoUva(grapeTypeData);
    console.log(response);
    if (response.status === 200 || response.status == 200 || response.status == 201 || response.status === 201) {
      toast({
        title: 'Registro exitoso',
        description: 'El tipo de uva ha sido registrado correctamente',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    }

    setGrapeName('');
    setSize('');
    setColor('');
    setRipeningTime('');
    setParcel('');
  };

  return (
    <Box
      w="100%"
      h="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="gray.100"
    >
      <Box
        maxW="600px"
        w="100%"
        p={8}
        bg="white"
        boxShadow="lg"
        borderRadius="md"
      >
        <Stack spacing={4}>
          <Heading size="lg" textAlign="center">
            Registrar Tipos de Uvas
          </Heading>

          <FormControl id="grapeName" isRequired>
            <FormLabel>Nombre de la uva</FormLabel>
            <Input
              type="text"
              placeholder="Ingresa el nombre de la uva"
              value={grapeName}
              onChange={(e) => setGrapeName(e.target.value)}
            />
          </FormControl>

          <FormControl id="size" isRequired>
            <FormLabel>Tamaño de la uva</FormLabel>
            <Input
              type="text"
              placeholder="Ingresa el tamaño de la uva"
              value={size}
              onChange={(e) => setSize(e.target.value)}
            />
          </FormControl>

          <FormControl id="color" isRequired>
            <FormLabel>Color de la uva</FormLabel>
            <Input
              type="text"
              placeholder="Ingresa el color de la uva"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </FormControl>

          <FormControl id="ripeningTime" isRequired>
            <FormLabel>Tiempo de maduración (días)</FormLabel>
            <Input
              type="number"
              placeholder="Ingresa el tiempo de maduración en días"
              value={ripeningTime}
              onChange={(e) => setRipeningTime(e.target.value)}
            />
          </FormControl>

          <FormControl id="parcel" isRequired>
            <FormLabel>Parcela</FormLabel>
            <Select
              placeholder="Selecciona la parcela"
              value={parcel}
              onChange={(e) => setParcel(e.target.value)}
            >
              {parcels.map((parcel) => (
                <option key={parcel.id} value={parcel.id}>
                  {parcel.nombre_parcela}
                </option>
              ))}
            </Select>
          </FormControl>

          <Button colorScheme="purple" onClick={handleSubmit}>
            Registrar Uva
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}

export default GrapeRegister;
