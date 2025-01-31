import React from 'react';
import {
  Box,
  IconButton,
  VStack,
  Text,
  useColorModeValue,
  Button,
  Accordion,
  Stack,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import { FaBoxOpen, FaPlus, FaMinus, FaEdit, FaListAlt, FaFileInvoiceDollar } from "react-icons/fa";
import { BiSolidReport } from "react-icons/bi";
import { FaHome, FaUserAlt, FaCog, FaSignOutAlt, FaTimes, FaShoppingCart, FaComments } from 'react-icons/fa';
import { FaDatabase } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ toggleSidebar }) => {
  const bg = useColorModeValue('gray.100', 'gray.900');
  const color = useColorModeValue('gray.900', 'gray.100');
  const history = useNavigate();


  const tealirect = (link) => {
    toggleSidebar();
    history(link);
  }

  const closeSession = () => {
    localStorage.removeItem('session');
    history('/login');
  }

  return (
    <Box
      position="fixed"
      left={0}
      top={0}
      w="250px"
      h="100vh"
      bg={bg}
      overflowY={'auto'}
      boxShadow="lg"
      p={5}
      css={{
        '&::-webkit-scrollbar': {
          width: '2px',
        },
        '&::-webkit-scrollbar-track': {
          width: '4px',
        },
        '&::-webkit-scrollbar-thumb': {
          background: 'teal.700',
          borderRadius: '24px',
        },
      }}
    >
      <VStack spacing={4} align="stretch" justifyContent="flex-start">
        {/* Botón para cerrar el sidebar */}
        <IconButton
          icon={<FaTimes />}
          aria-label="Cerrar Sidebar"
          fontSize="12px"
          alignSelf="flex-end"
          color='gray.300'
          bg='gray.100'
          _hover={{ color: 'gray.400', bg: 'gray.200' }}
          onClick={toggleSidebar}
        />

        <Text fontSize="2xl" fontWeight="bold" color={'teal.600'} mb={8}>
          Vino Costero
        </Text>

        <Accordion allowToggle>
          <AccordionItem border='none' mt={2} color='teal.600'>
            <AccordionButton>
              <Box flex="1" textAlign="left" display="flex" alignItems="center" >
                <FaHome style={{ marginRight: '8px' }} />
                Inicio
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Button
                variant="ghost"
                colorScheme="teal"
                justifyContent="flex-start"
                w="100%"
                onClick={() => tealirect('/admin/dashboard')}
              >
                Inicio
              </Button>
            </AccordionPanel>
          </AccordionItem>


          <AccordionItem border='none' mt={2} color='teal.600'>
            <AccordionButton>
              <Box flex="1" textAlign="left" display="flex" alignItems="center">
                <FaDatabase style={{ marginRight: '8px' }} />
                Registros
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Button
                variant="ghost"
                colorScheme="teal"
                justifyContent="flex-start"
                w="100%"
                fontWeight={'normal'}
              >
                <Box flex="1" textAlign="left" display="flex" alignItems="center" fontSize={14} onClick={() => tealirect('/admin/iglesias')}>
                  Iglesias
                </Box>
              </Button>
              <Button
                variant="ghost"
                colorScheme="teal"
                justifyContent="flex-start"
                w="100%"
                fontWeight={'normal'}
              >
                <Box flex="1" textAlign="left" display="flex" alignItems="center" fontSize={14} onClick={() => tealirect('/admin/grapes-new')}>
                  Misiones
                </Box>
              </Button>
              <Button
                variant="ghost"
                colorScheme="teal"
                justifyContent="flex-start"
                w="100%"
                fontWeight={'normal'}
              >
                <Box flex="1" textAlign="left" display="flex" alignItems="center" fontSize={14} onClick={() => tealirect('/admin/sowing-new')}>
                  Clases
                </Box>
              </Button>

              <Button
                variant="ghost"
                colorScheme="teal"
                justifyContent="flex-start"
                w="100%"
                fontWeight={'normal'}
              >
                <Box flex="1" textAlign="left" display="flex" alignItems="center" fontSize={14} onClick={() => tealirect('/admin/grape-disease-new')}>
                  Maestros
                </Box>
              </Button>
            </AccordionPanel>
          </AccordionItem>


          <AccordionItem border='none' mt={2} color='teal.600'>
            <AccordionButton>
              <Box flex="1" textAlign="left" display="flex" alignItems="center">
                <FaBoxOpen style={{ marginRight: '8px' }} />
                Producción
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Button
                variant="ghost"
                colorScheme="teal"
                justifyContent="flex-start"
                w="100%"
                fontWeight={'normal'}
              >
                <Box flex="1" textAlign="left" display="flex" alignItems="center" fontSize={14} onClick={() => tealirect('/admin/production')}>
                  Fases
                </Box>
              </Button>
              <Button
                variant="ghost"
                colorScheme="teal"
                justifyContent="flex-start"
                w="100%"
                fontWeight={'normal'}
              >
                <Box flex="1" textAlign="left" display="flex" alignItems="center" fontSize={14} onClick={() => tealirect('/admin/sick-sowking')}>
                  Siembra enferma
                </Box>
              </Button>

            </AccordionPanel>
          </AccordionItem>

          <AccordionItem border='none' mt={2} color='teal.600'>
            <AccordionButton>
              <Box flex="1" textAlign="left" display="flex" alignItems="center" >
                <BiSolidReport style={{ marginRight: '8px' }} />
                Reportes
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Button
                onClick={() => tealirect('/admin/view-parcels')}
                variant="ghost"
                colorScheme="teal"
                justifyContent="flex-start"
                w="100%"
              >
                Parcelas
              </Button>
              <Button
                onClick={() => tealirect('/admin/view-grapes')}
                variant="ghost"
                colorScheme="teal"
                justifyContent="flex-start"
                w="100%"
              >
                Tipos Uvas
              </Button>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Button
          onClick={closeSession}
          variant="ghost"
          colorScheme="teal"
          justifyContent="flex-start"
          w="100%"
        >
          Salir
        </Button>
      </VStack>
    </Box>
  );
};

export default Sidebar;
