import React from "react";
import { Box, Input, Button, Text, VStack, FormControl, FormLabel, Link } from "@chakra-ui/react";
import { login } from "../../services/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const emptyUser = { username: '', password: '' };
  const [user, setUser] = React.useState(emptyUser);
  const history = useNavigate();

  const handleLogin = async () => {
    const user_request = { usuario: user.username, contrasena: user.password };
    const response = await login(user_request);
    console.log(response)

    if (response.status === 200) {
      const session = { token: response.data.token, user: response.data.usuarioDB };
      localStorage.setItem('session', JSON.stringify(session));
      toast.success("Inicio de sesión exitoso");
      setTimeout(() => {
        history('/Dashboard');
      }, 2000)
    } else {
      toast.error("Error en el inicio de sesión: " + response.error);
    }
  }


  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }




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
        <Text
          fontSize="2xl"
          fontWeight="bold"
          color="white"
          mb={6}
        >
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
              onChange={handleChange}
              name="username"
              color="white"
              border="none"
              _placeholder={{ color: "gray.400" }}
              _focus={{ outline: "none", border: "1px solid green.400" }}
            />
          </FormControl>

          {/* Password */}
          <FormControl>
            <FormLabel color="white" fontSize="sm">
              Contraseña
            </FormLabel>
            <Input
              type="password"
              placeholder="**********"
              bg="gray.700"
              color="white"
              border="none"
              name="password"
              onChange={handleChange}
              _placeholder={{ color: "gray.400" }}
              _focus={{ outline: "none", border: "1px solid green.400" }}
            />
          </FormControl>

          <Button
            colorScheme="green"
            w="full"
            size="md"
            fontSize={12}
            onClick={handleLogin}
            mt={4}
          >
            ENTRAR
          </Button>
        </VStack>

        <Text
          color="gray.400"
          fontSize="sm"
          mt={4}
        >
          <Link color="green.400" href="#">
            Olvidé mi contraseña
          </Link>
        </Text>

        <Text
          color="green.800"
          fontSize="sm"
          mt={6}
        >
          <Link href="/register">Registrarme</Link>
        </Text>
      </Box>
    </Box>
  );
};

export default Login;
