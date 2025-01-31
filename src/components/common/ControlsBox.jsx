import React from 'react';



import { Box, Button, Input, Flex } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';


const ControlsBox = ({ add, search }) => {

  return (
    <Box bg="gray.100" p={6} borderRadius="md" boxShadow="lg" w="40%">
      <Flex gap={2} justifyContent='space-between'>
        <Button colorScheme="green" variant="solid" onClick={add} fontWeight={'bold'}>+</Button>
        <div>
          <Flex>
            <Input placeholder="Buscar" bg="white" borderColor="gray.300" />
            <Button colorScheme="blue" variant="solid" ml={1} onClick={search}><SearchIcon /></Button>
          </Flex>
        </div>
      </Flex>
    </Box>
  );

}

export default ControlsBox;
