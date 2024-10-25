
import { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Heading,
  Select,
  useToast,
} from '@chakra-ui/react';
import { createParcela } from '../../services/parcela';

function ParcelRegister() {
  const [parcelName, setParcelName] = useState('');
  const [location, setLocation] = useState('');
  const [surfaceArea, setSurfaceArea] = useState('');
  const [soilType, setSoilType] = useState('');
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!parcelName || !location || !surfaceArea || !soilType) {
      toast({
        title: 'Error',
        description: 'Por favor, rellena todos los campos',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    try {
      // Crear nueva parcela
      //
      // 'nombre_parcela' => 'required|string|max:255',
      // 'ubicacion' => 'required|string|max:255',
      // 'superficie' => 'required|numeric',
      // 'tipo_suelo' => 'required|string|max:100',
      const response = await createParcela({
        nombre_parcela: parcelName,
        ubicacion: location,
        superficie: surfaceArea,
        tipo_suelo: soilType,
      });
      console.log(response);

      if (response.status === 201) {
        toast({
          title: 'Registro exitoso',
          description: 'La parcela ha sido registrada correctamente',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });

        // Restablecer los valores del formulario
        setParcelName('');
        setLocation('');
        setSurfaceArea('');
        setSoilType('');
      } else {
        // Si la respuesta no es la esperada, muestra un error
        toast({
          title: 'Error',
          description: 'Hubo un problema al registrar la parcela',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'No se pudo conectar con el servidor. Intenta nuevamente.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box
      w="100%"
      h="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="gray.100"
      paddingTop={'2rem'}
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
          <Heading size="lg" textAlign="center" mb={'2rem'}>
            Registrar Parcelas
          </Heading>

          <FormControl id="parcelName" isRequired>
            <FormLabel>Nombre de la parcela</FormLabel>
            <Input
              type="text"
              placeholder="Ingresa el nombre de la parcela"
              value={parcelName}
              onChange={(e) => setParcelName(e.target.value)}
            />
          </FormControl>

          <FormControl id="location" isRequired>
            <FormLabel>Ubicación</FormLabel>
            <Input
              type="text"
              placeholder="Ingresa la ubicación"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </FormControl>

          <FormControl id="surfaceArea" isRequired>
            <FormLabel>Superficie (en hectáreas)</FormLabel>
            <Input
              type="number"
              placeholder="Ingresa la superficie (en hectáreas)"
              value={surfaceArea}
              onChange={(e) => setSurfaceArea(e.target.value)}
            />
          </FormControl>

          <FormControl id="soilType" isRequired>
            <FormLabel>Tipo de suelo</FormLabel>
            <Select
              placeholder="Selecciona el tipo de suelo"
              value={soilType}
              onChange={(e) => setSoilType(e.target.value)}
            >
              <option value="Arenoso">Arenoso</option>
              <option value="Arcilloso">Arcilloso</option>
              <option value="Limoso">Limoso</option>
              <option value="Franco">Franco</option>
            </Select>
          </FormControl>

          <Button
            bg="red.600"
            color="white"
            _hover={{ bg: 'red.800', color: 'white' }}
            onClick={handleSubmit}
          >
            Registrar Parcela
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}

export default ParcelRegister;

