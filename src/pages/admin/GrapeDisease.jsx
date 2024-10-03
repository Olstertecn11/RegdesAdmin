
import { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Textarea,
  Heading,
  useToast,
} from '@chakra-ui/react';

function GrapeDisease() {
  const [diseaseName, setDiseaseName] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [climaticConditions, setClimaticConditions] = useState('');
  const [productionImpact, setProductionImpact] = useState('');
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!diseaseName || !symptoms || !climaticConditions || !productionImpact) {
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
    console.log('Datos de Enfermedad:', {
      diseaseName,
      symptoms,
      climaticConditions,
      productionImpact,
    });

    toast({
      title: 'Registro exitoso',
      description: 'La enfermedad ha sido registrada correctamente',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });

    // Limpiar campos después de registrar
    setDiseaseName('');
    setSymptoms('');
    setClimaticConditions('');
    setProductionImpact('');
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
            Registrar Enfermedad de Uvas
          </Heading>

          <FormControl id="diseaseName" isRequired>
            <FormLabel>Nombre de la enfermedad</FormLabel>
            <Input
              type="text"
              placeholder="Ingresa el nombre de la enfermedad"
              value={diseaseName}
              onChange={(e) => setDiseaseName(e.target.value)}
            />
          </FormControl>

          <FormControl id="symptoms" isRequired>
            <FormLabel>Síntomas</FormLabel>
            <Textarea
              placeholder="Describe los síntomas asociados"
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
            />
          </FormControl>

          <FormControl id="climaticConditions" isRequired>
            <FormLabel>Condiciones climáticas</FormLabel>
            <Input
              type="text"
              placeholder="Describe las condiciones climáticas"
              value={climaticConditions}
              onChange={(e) => setClimaticConditions(e.target.value)}
            />
          </FormControl>

          <FormControl id="productionImpact" isRequired>
            <FormLabel>Impacto en la producción</FormLabel>
            <Textarea
              placeholder="Describe el impacto de la enfermedad en la producción"
              value={productionImpact}
              onChange={(e) => setProductionImpact(e.target.value)}
            />
          </FormControl>

          <Button colorScheme="red" onClick={handleSubmit}>
            Registrar Enfermedad
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}

export default GrapeDisease;
