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
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ toggleSidebar }) => {
  const bg = useColorModeValue('gray.100', 'gray.900');
  const color = useColorModeValue('gray.900', 'gray.100');
  const history = useNavigate();


  const redirect = (link) => {
    toggleSidebar();
    history(link);
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
          background: 'red.700',
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

        <Text fontSize="2xl" fontWeight="bold" color={'red.600'} mb={8}>
          Vino Costero
        </Text>

        <Accordion allowToggle>
          <AccordionItem border='none' mt={2} color='red.600'>
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
                colorScheme="red"
                justifyContent="flex-start"
                w="100%"
                onClick={() => redirect('/admin/dashboard')}
              >
                Inicio
              </Button>
            </AccordionPanel>
          </AccordionItem>


          <AccordionItem border='none' mt={2} color='red.600'>
            <AccordionButton>
              <Box flex="1" textAlign="left" display="flex" alignItems="center">
                <FaBoxOpen style={{ marginRight: '8px' }} />
                Registros
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Button
                variant="ghost"
                colorScheme="red"
                justifyContent="flex-start"
                w="100%"
                fontWeight={'normal'}
              >
                <Box flex="1" textAlign="left" display="flex" alignItems="center" fontSize={14} onClick={() => redirect('/admin/parcel-new')}>
                  Parcelas
                </Box>
              </Button>
              <Button
                variant="ghost"
                colorScheme="red"
                justifyContent="flex-start"
                w="100%"
                fontWeight={'normal'}
              >
                <Box flex="1" textAlign="left" display="flex" alignItems="center" fontSize={14} onClick={() => redirect('/admin/grapes-new')}>
                  Uvas
                </Box>
              </Button>
              <Button
                variant="ghost"
                colorScheme="red"
                justifyContent="flex-start"
                w="100%"
                fontWeight={'normal'}
              >
                <Box flex="1" textAlign="left" display="flex" alignItems="center" fontSize={14} onClick={() => redirect('/admin/sowing-new')}>
                  Siembra
                </Box>
              </Button>

              <Button
                variant="ghost"
                colorScheme="red"
                justifyContent="flex-start"
                w="100%"
                fontWeight={'normal'}
              >
                <Box flex="1" textAlign="left" display="flex" alignItems="center" fontSize={14} onClick={() => redirect('/admin/grape-disease-new')}>
                  Enfermedades de Uvas
                </Box>
              </Button>
            </AccordionPanel>
          </AccordionItem>


          <AccordionItem border='none' mt={2} color='red.600'>
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
                colorScheme="red"
                justifyContent="flex-start"
                w="100%"
                fontWeight={'normal'}
              >
                <Box flex="1" textAlign="left" display="flex" alignItems="center" fontSize={14} onClick={() => redirect('/admin/production')}>
                  Fases
                </Box>
              </Button>
              <Button
                variant="ghost"
                colorScheme="red"
                justifyContent="flex-start"
                w="100%"
                fontWeight={'normal'}
              >
                <Box flex="1" textAlign="left" display="flex" alignItems="center" fontSize={14} onClick={() => redirect('/admin/sick-sowking')}>
                  Siembra enferma
                </Box>
              </Button>

            </AccordionPanel>
          </AccordionItem>

          <AccordionItem border='none' mt={2} color='red.600'>
            <AccordionButton>
              <Box flex="1" textAlign="left" display="flex" alignItems="center" >
                <BiSolidReport style={{ marginRight: '8px' }} />
                Reportes
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Button
                onClick={() => redirect('/admin/view-parcels')}
                variant="ghost"
                colorScheme="red"
                justifyContent="flex-start"
                w="100%"
              >
                Parcelas
              </Button>
              <Button
                onClick={() => redirect('/admin/view-grapes')}
                variant="ghost"
                colorScheme="red"
                justifyContent="flex-start"
                w="100%"
              >
                Tipos Uvas
              </Button>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Button
          onClick={() => redirect('/login')}
          variant="ghost"
          colorScheme="red"
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
