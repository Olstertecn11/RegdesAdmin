
import { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Select,
  Textarea,
  Heading,
  useToast,
} from '@chakra-ui/react';

function SickSowing() {
  const [sowingType, setSowingType] = useState('');
  const [diseaseType, setDiseaseType] = useState('');
  const [detectionDate, setDetectionDate] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [treatment, setTreatment] = useState('');
  const [parcel, setParcel] = useState('');
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!sowingType || !diseaseType || !detectionDate || !symptoms || !treatment || !parcel) {
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
    console.log('Datos de Siembra Enferma:', {
      sowingType,
      diseaseType,
      detectionDate,
      symptoms,
      treatment,
      parcel,
    });

    toast({
      title: 'Registro exitoso',
      description: 'Los datos de la siembra enferma han sido registrados correctamente',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });

    // Limpiar campos después de registrar
    setSowingType('');
    setDiseaseType('');
    setDetectionDate('');
    setSymptoms('');
    setTreatment('');
    setParcel('');
  };

  return (
    <Box
      w="100%"
      h="100%"
      display="flex"
      pt={'4rem'}
      pb={'4rem'}
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
            Registrar Siembra Enferma
          </Heading>

          <FormControl id="sowingType" isRequired>
            <FormLabel>Tipo de siembra</FormLabel>
            <Input
              type="text"
              placeholder="Ingresa el tipo de siembra"
              value={sowingType}
              onChange={(e) => setSowingType(e.target.value)}
            />
          </FormControl>

          <FormControl id="diseaseType" isRequired>
            <FormLabel>Tipo de enfermedad</FormLabel>
            <Input
              type="text"
              placeholder="Ingresa el tipo de enfermedad"
              value={diseaseType}
              onChange={(e) => setDiseaseType(e.target.value)}
            />
          </FormControl>

          <FormControl id="detectionDate" isRequired>
            <FormLabel>Fecha de detección</FormLabel>
            <Input
              type="date"
              value={detectionDate}
              onChange={(e) => setDetectionDate(e.target.value)}
            />
          </FormControl>

          <FormControl id="symptoms" isRequired>
            <FormLabel>Síntomas</FormLabel>
            <Textarea
              placeholder="Describe los síntomas"
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
            />
          </FormControl>

          <FormControl id="treatment" isRequired>
            <FormLabel>Tratamiento aplicado</FormLabel>
            <Textarea
              placeholder="Describe el tratamiento aplicado"
              value={treatment}
              onChange={(e) => setTreatment(e.target.value)}
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

          <Button colorScheme="red" onClick={handleSubmit}>
            Registrar Siembra Enferma
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}

export default SickSowing;
