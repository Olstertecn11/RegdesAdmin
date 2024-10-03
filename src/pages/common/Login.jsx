
import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  Avatar,
  AvatarGroup,
  useBreakpointValue,
  Icon,
} from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const avatars = [
  {
    name: 'Sauvignon Blanc',
    url: 'https://cdnx.jumpseller.com/la-liebre/image/51266155/resize/255/255?1722352207',
  },
  {
    name: 'Montefranco Costero',
    url: 'https://cdnx.jumpseller.com/la-liebre/image/49300213/resize/255/255?1717168978',
  },
  {
    name: 'Requingua Toro Cabernet',
    url: 'https://tienda.hellowine.cl/cdn/shop/files/TDP-M.png?v=1711563838',
  }
]

const Blur = (props) => {
  return (
    <Icon
      width={useBreakpointValue({ base: '100%', md: '40vw', lg: '30vw' })}
      zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
      height="560px"
      viewBox="0 0 528 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <circle cx="71" cy="61" r="111" fill="#F56565" />
      <circle cx="244" cy="106" r="139" fill="#ED64A6" />
      <circle cy="291" r="139" fill="#ED64A6" />
      <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
      <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
      <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
      <circle cx="426.5" cy="-0.5" r="101.5" fill="#AB3636" />
    </Icon>
  )
}

export default function Login() {

  const empty = { username: '', password: '' };
  const [user, setUser] = React.useState(empty);
  const history = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser(prev => ({ ...prev, [name]: value }));
  }

  const handleSubmit = () => {
    if (user.username === 'admin' && user.password === 'admin') {
      history('/Home');
    }
    else {
      alert("wrong credentials")
      console.log(user);
    }
  }

  return (
    <Box position={'relative'}>
      <Container
        as={SimpleGrid}
        maxW={'7xl'}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 32 }}>
        <Stack spacing={{ base: 10, md: 20 }}>
          <Heading
            lineHeight={1.1}
            zIndex={100}
            fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}>
            Líderes en vinos{' '}
            <Text as={'span'} bgGradient="linear(to-r, red.400,red.700)" bgClip="text">
              &
            </Text>{' '}
            en gestión empresarial
          </Heading>
          <Stack direction={'row'} spacing={4} align={'center'} justifyContent={'center'}>
            <AvatarGroup>
              {avatars.map((avatar) => (
                <Avatar
                  key={avatar.name}
                  name={avatar.name}
                  src={avatar.url}
                  // eslint-disable-next-line react-hooks/rules-of-hooks
                  size={useBreakpointValue({ base: 'md', md: 'lg' })}
                  position={'relative'}
                  zIndex={2}
                  _before={{
                    content: '""',
                    width: 'full',
                    height: 'full',
                    rounded: 'full',
                    transform: 'scale(1.125)',
                    bgGradient: 'linear(to-bl, red.400,red.700)',
                    position: 'absolute',
                    zIndex: -1,
                    top: 0,
                    left: 0,
                  }}
                />
              ))}
            </AvatarGroup>
          </Stack>
        </Stack>
        <Stack
          bg={'gray.50'}
          rounded={'xl'}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: 'lg' }}>
          <Stack spacing={4}>
            <Heading
              color={'gray.800'}
              lineHeight={1.1}
              fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
              Login
              <Text as={'span'} bgGradient="linear(to-r, red.200,red.600)" bgClip="text">
                !
              </Text>
            </Heading>
            <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
              Ingresa y se parte de la más grande distruibuidora de vino en Chile, se parte de una revolución...
            </Text>
          </Stack>
          <Box as={'form'} mt={2}>
            <Stack spacing={4}>
              <Input
                placeholder="Usuario"
                bg={'gray.100'}
                name="username"
                border={0}
                color={'gray.500'}
                value={user.username}
                _placeholder={{
                  color: 'gray.500',
                }}
                onChange={handleChange}
              />
              <Input
                name="password"
                onChange={handleChange}
                value={user.password}
                placeholder="**********"
                bg={'gray.100'}
                border={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                }}
              />
            </Stack>
            <Button
              fontFamily={'heading'}
              mt={8}
              w={'full'}
              onClick={handleSubmit}
              bgGradient="linear(to-r, red.400,red.700)"
              color={'white'}
              _hover={{
                bgGradient: 'linear(to-r, red.400,red.700)',
                boxShadow: 'xl',
              }}>
              Entrar
            </Button>
          </Box>
          form
        </Stack>
      </Container>
      <Blur position={'absolute'} top={-10} left={-10} style={{ filter: 'blur(70px)' }} />
    </Box>
  )
}
