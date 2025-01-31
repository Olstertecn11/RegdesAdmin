import { ChakraProvider } from "@chakra-ui/react"
import RouterManager from "./routes/RouterManager"
import { ToastContainer } from "react-toastify"

function App() {
  return (
    <ChakraProvider>
      <ToastContainer />
      <RouterManager />
    </ChakraProvider>
  )
}

export default App
