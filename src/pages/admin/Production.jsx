
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

function Production() {
  const [phaseId, setPhaseId] = useState('');
  const [description, setDescription] = useState('');
  const [parcel, setParcel] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!phaseId || !description || !parcel || !startDate || !endDate) {
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
    console.log('Datos de Fase de Producción:', {
      phaseId,
      description,
      parcel,
      startDate,
      endDate,
    });

    toast({
      title: 'Registro exitoso',
      description: 'La fase de producción ha sido registrada correctamente',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });

    // Limpiar campos después de registrar
    setPhaseId('');
    setDescription('');
    setParcel('');
    setStartDate('');
    setEndDate('');
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
            Control de Fases de Producción
          </Heading>

          <FormControl id="phaseId" isRequired>
            <FormLabel>Identificación de la fase</FormLabel>
            <Input
              type="text"
              placeholder="Ingresa el identificador de la fase"
              value={phaseId}
              onChange={(e) => setPhaseId(e.target.value)}
            />
          </FormControl>

          <FormControl id="description" isRequired>
            <FormLabel>Descripción de la fase</FormLabel>
            <Input
              type="text"
              placeholder="Describe la fase (e.g., Siembra, Crecimiento, Cosecha)"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </FormControl>

          <FormControl id="parcel" isRequired>
            <FormLabel>Parcela asociada</FormLabel>
            <Select
              placeholder="Selecciona la parcela"
              value={parcel}
              onChange={(e) => setParcel(e.target.value)}
            >
              {/* Aquí puedes agregar las opciones de parcelas */}
              <option value="parcela_1">Parcela 1</option>
              <option value="parcela_2">Parcela 2</option>
              <option value="parcela_3">Parcela 3</option>
            </Select>
          </FormControl>

          <FormControl id="startDate" isRequired>
            <FormLabel>Fecha de inicio</FormLabel>
            <Input
              type="date"
              placeholder="Ingresa la fecha de inicio"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </FormControl>

          <FormControl id="endDate" isRequired>
            <FormLabel>Fecha de fin</FormLabel>
            <Input
              type="date"
              placeholder="Ingresa la fecha de fin"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </FormControl>

          <Button bg="red.600" color='white' _hover={{ bg: 'red.800', color: 'white' }} onClick={handleSubmit}>
            Registrar Fase
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}

export default Production;
