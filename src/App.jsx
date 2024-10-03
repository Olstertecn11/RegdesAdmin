import { ChakraProvider } from "@chakra-ui/react"
import RouterManager from "./routes/RouterManager"

function App() {
  return (
    <ChakraProvider>
      <RouterManager />
    </ChakraProvider>
  )
}

export default App
