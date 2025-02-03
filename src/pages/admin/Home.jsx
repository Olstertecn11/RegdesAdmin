import { Text, Flex, Box } from "@chakra-ui/react";
const Home = () => {
  return (
    <div>
      <Flex>
        <Text fontSize="4xl" fontWeight="bold" color={'teal'}>REG</Text>
        <Text fontSize="4xl" fontWeight="bold">DES</Text>
      </Flex>



      <Flex justifyContent={'center'} gap={'2rem'} flexDir={'row'} w='80vw' bg='gray.100' p={10} borderRadius={'10px'}>
        <Box w={'50%'} bg='gray.200' p={10}>
          <Text>Estadísticas</Text>
          <Text>10</Text>
        </Box>

        <Box w={'50%'} bg='gray.200' p={10}>
          <Text>Estadísticas</Text>
          <Text>10</Text>
        </Box>
      </Flex>


      <Flex justifyContent={'center'} gap={'2rem'} flexDir={'row'} w='80vw' bg='gray.100' p={10} >
        <Box w={'50%'} bg='gray.200' p={10}>
          <Text>Estadísticas</Text>
          <Text>10</Text>
        </Box>

        <Box w={'50%'} bg='gray.200' p={10}>
          <Text>Estadísticas</Text>
          <Text>10</Text>
        </Box>
      </Flex>
    </div >
  );
}

export default Home;
