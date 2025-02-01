
import React, { useState } from "react";
import { Select, Box, Input, Button, FormControl, FormLabel, VStack, Heading } from "@chakra-ui/react";
import { toast } from "react-toastify";
import { createUser } from "../../services/user";
import { constants } from "../../constants/env";
import { validateForm, validatePasswords } from "../../utils/FormValidator";

const AddUser = ({ onAdd }) => {
  const emptyUser = { username: '', email: '', password: '', confirmPassword: '', privileges: 0 };
  const [user, setUser] = useState(emptyUser);


  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };


  const handleAdd = async () => {
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


    const response = await createUser(user.username, user.email, user.password, user.privileges);
    console.log(response);
    if (response.status === 201) {
      toast.success("Registro exitoso");
      onAdd();
    } else {
      toast.error("Error en el registro");
    }
  };


  return (
    <Box bg="gray.100" p={6} borderRadius="md" boxShadow="lg" w="100%">
      <Heading size="md" color="blue.600" textAlign="center" mb={4}>
        Agregar Clase
      </Heading>
      <VStack spacing={4}>
        <FormControl>
          <FormLabel>Usuario</FormLabel>
          <Input
            placeholder="Ingrese nombre"
            value={user.username}
            onChange={handleChange}
            name="username"
            bg="white"
            borderColor="gray.300"
          />
        </FormControl>

        <FormControl>
          <FormLabel>Correo</FormLabel>
          <Input
            placeholder="Ingrese su correo"
            value={user.email}
            onChange={handleChange}
            name="email"
            bg="white"
            borderColor="gray.300"
          />
        </FormControl>

        <FormControl>
          <FormLabel>Contraseña</FormLabel>
          <Input
            placeholder="Ingrese su contraseña"
            value={user.password}
            onChange={handleChange}
            name="password"
            bg="white"
            borderColor="gray.300"
          />
        </FormControl>

        <FormControl>
          <FormLabel>Confirmar Contraseña</FormLabel>
          <Input
            placeholder="Confirme su contraseña"
            value={user.confirmPassword}
            onChange={handleChange}
            name="confirmPassword"
            bg="white"
            borderColor="gray.300"
          />
        </FormControl>


        <FormControl>
          <FormLabel>Privilegios</FormLabel>
          <Select
            placeholder="Seleccione una opción"
            value={user.privileges}
            onChange={(e) => setUser({ ...user, privileges: e.target.value })}
            bg="white"
            borderColor="gray.300"
          >
            <option value={constants.privileges.user}>Usuario</option>
            <option value={constants.privileges.admin}>Administrador</option>
            <option value={constants.privileges.teacher}>Maestro</option>
          </Select>
        </FormControl>


        <Button colorScheme="blue" w="full" onClick={handleAdd}>
          Guardar
        </Button>
      </VStack>
    </Box>
  );
};

export default AddUser;
