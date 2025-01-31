
import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Stack,
  IconButton,
  Center,
  useColorMode,
  useToast,
} from '@chakra-ui/react'
import { useLocation, useNavigate } from 'react-router-dom'
import React from 'react'
import { FaBars } from 'react-icons/fa';

export default function Navbar({ toggleSidebar, isSidebarOpen }) {
  const { colorMode, toggleColorMode } = useColorMode();
  const toast = useToast();
  const history = useNavigate();
  const location = useLocation();
  const colors = { teal: 'red.800', green: 'teal.500', blue: 'blue.400', red: 'red.400', yellow: 'yellow.400' };
  const [bgColor, setBgColor] = React.useState(colors.teal)


  const getColor = (route) => {
    if (route.indexOf('nuevo') !== -1) return colors.green;
    if (route.indexOf('editar') !== -1) return colors.yellow;
    if (route.indexOf('eliminar') !== -1) return colors.teal;
    if (route.indexOf('visualizar') !== -1) return colors.blue;
    return colors.teal;
  }



  return (
    <>
      <Box px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'} bg={'teal.700'} className="admin-nav" borderRadius={'12px'} paddingX={'2rem'} color='white'>
          {!isSidebarOpen && (
            <IconButton
              icon={<FaBars />}
              background='transparent'
              color='white'
              aria-label="Toggle Sidebar"
              _hover={{ background: `teal.600` }}
              onClick={toggleSidebar}
            />
          )}
          <Box onClick={() => history('/admin/dashboard')} _hover={{ cursor: 'pointer' }}>
            Dashboard
          </Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
