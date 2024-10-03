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
  Textarea,
  useToast,
} from '@chakra-ui/react';

function SowingRegister() {
  const [sowingDate, setSowingDate] = useState('');
  const [grapeType, setGrapeType] = useState('');
  const [terrainState, setTerrainState] = useState('');
  const [weatherConditions, setWeatherConditions] = useState('');
  const [observations, setObservations] = useState('');
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!sowingDate || !grapeType || !terrainState || !weatherConditions) {
      toast({
        title: 'Error',
        description: 'Por favor, rellena todos los campos obligatorios',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    // Aquí puedes manejar el envío del formulario, por ejemplo, enviar los datos a tu backend
    console.log('Datos de Siembra:', { sowingDate, grapeType, terrainState, weatherConditions, observations });

    toast({
      title: 'Registro exitoso',
      description: 'El control de siembra ha sido registrado correctamente',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });

    // Limpiar campos después de registrar
    setSowingDate('');
    setGrapeType('');
    setTerrainState('');
    setWeatherConditions('');
    setObservations('');
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
        maxW="700px"
        w="100%"
        p={8}
        bg="white"
        boxShadow="lg"
        borderRadius="md"
      >
        <Stack spacing={4}>
          <Heading size="lg" textAlign="center">
            Registrar Control de Siembra
          </Heading>

          <FormControl id="sowingDate" isRequired>
            <FormLabel>Fecha de siembra</FormLabel>
            <Input
              type="date"
              placeholder="Ingresa la fecha de siembra"
              value={sowingDate}
              onChange={(e) => setSowingDate(e.target.value)}
            />
          </FormControl>

          <FormControl id="grapeType" isRequired>
            <FormLabel>Tipo de uva</FormLabel>
            <Select
              placeholder="Selecciona el tipo de uva"
              value={grapeType}
              onChange={(e) => setGrapeType(e.target.value)}
            >
              {/* Aquí puedes agregar las opciones de uvas */}
              <option value="uva_1">Uva 1</option>
              <option value="uva_2">Uva 2</option>
              <option value="uva_3">Uva 3</option>
            </Select>
          </FormControl>

          <FormControl id="terrainState" isRequired>
            <FormLabel>Estado del terreno</FormLabel>
            <Input
              type="text"
              placeholder="Describe el estado del terreno (e.g., húmedo, seco)"
              value={terrainState}
              onChange={(e) => setTerrainState(e.target.value)}
            />
          </FormControl>

          <FormControl id="weatherConditions" isRequired>
            <FormLabel>Condiciones climáticas</FormLabel>
            <Input
              type="text"
              placeholder="Ingresa las condiciones climáticas al día de la siembra"
              value={weatherConditions}
              onChange={(e) => setWeatherConditions(e.target.value)}
            />
          </FormControl>

          <FormControl id="observations">
            <FormLabel>Observaciones (opcional)</FormLabel>
            <Textarea
              placeholder="Añade observaciones adicionales"
              value={observations}
              onChange={(e) => setObservations(e.target.value)}
            />
          </FormControl>

          <Button colorScheme="green" onClick={handleSubmit}>
            Registrar Control de Siembra
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}

export default SowingRegister;
