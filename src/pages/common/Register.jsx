import React from "react";
import { Box, Input, Button, Text, VStack, FormControl, FormLabel, Link } from "@chakra-ui/react";
import { register } from "../../services/auth";
import { toast } from "react-toastify";
import { validateForm, validatePasswords } from "../../utils/FormValidator";

const Register = () => {
  const emptyUser = { username: '', email: '', password: '', confirmPassword: '' };
  const [user, setUser] = React.useState(emptyUser);

  const handleRegister = async () => {
    const errors = validateForm(user);
    if (Object.keys(errors).length > 0) {
      for (const key in errors) {
        toast.error(errors[key]);
      }
      return;
    }

    const { status, message } = validatePasswords(user.password, user.confirmPassword);
    if (!status) {
      toast.error(message);
      return;
    }


    const response = await register(user.username, user.email, user.password);
    console.log(response);
    if (response.status === 201) {
      toast.success("Registro exitoso");
    } else {
      // setErrorMessage("Error en el registro");
      toast.error("Error en el registro");
    }
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <Box
      bg="gray.900"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      p={4}
    >
      <Box
        w="400px"
        bg="gray.800"
        borderRadius="md"
        p={8}
        boxShadow="lg"
        textAlign="center"
      >
        <Text fontSize="2xl" fontWeight="bold" color="white" mb={6}>
          <Text as="span" color="green.400">
            REG
          </Text>
          DES
        </Text>

        <VStack spacing={4}>
          <FormControl>
            <FormLabel color="white" fontSize="sm">
              Usuario
            </FormLabel>
            <Input
              placeholder="olstertecn"
              bg="gray.700"
              name="username"
              onChange={handleChange}
              color="white"
              border="none"
              _placeholder={{ color: "gray.400" }}
              _focus={{ outline: "none", border: "1px solid green.400" }}
            />
          </FormControl>

          <FormControl>
            <FormLabel color="white" fontSize="sm">
              Correo Electrónico
            </FormLabel>
            <Input
              placeholder="correo@ejemplo.com"
              bg="gray.700"
              name="email"
              type="email"
              onChange={handleChange}
              color="white"
              border="none"
              _placeholder={{ color: "gray.400" }}
              _focus={{ outline: "none", border: "1px solid green.400" }}
            />
          </FormControl>

          <FormControl>
            <FormLabel color="white" fontSize="sm">
              Contraseña
            </FormLabel>
            <Input
              type="password"
              placeholder="**********"
              bg="gray.700"
              name="password"
              onChange={handleChange}
              color="white"
              border="none"
              _placeholder={{ color: "gray.400" }}
              _focus={{ outline: "none", border: "1px solid green.400" }}
            />
          </FormControl>

          <FormControl>
            <FormLabel color="white" fontSize="sm">
              Confirmar Contraseña
            </FormLabel>
            <Input
              type="password"
              placeholder="**********"
              bg="gray.700"
              name="confirmPassword"
              onChange={handleChange}
              color="white"
              border="none"
              _placeholder={{ color: "gray.400" }}
              _focus={{ outline: "none", border: "1px solid green.400" }}
            />
          </FormControl>


          <Button
            colorScheme="green"
            w="full"
            size="md"
            fontSize={12}
            onClick={handleRegister}
            mt={4}
          >
            REGISTRARSE
          </Button>
        </VStack>

        <Text color="gray.400" fontSize="sm" mt={4}>
          ¿Ya tienes cuenta?{" "}
          <Link color="green.400" href="/login">
            Iniciar sesión
          </Link>
        </Text>
      </Box>
    </Box>
  );
};

export default Register;

