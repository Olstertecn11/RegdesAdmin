

import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Flex, Box } from "@chakra-ui/react";

const Layout = ({ Page }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Flex height={'100vh'} bg='gray.100'>
        {isSidebarOpen && (
          <Box w="250px" h="100vh" position="fixed">
            <Sidebar toggleSidebar={toggleSidebar} />
          </Box>
        )}

        <Box
          flex="1"
          ml={isSidebarOpen ? "250px" : "0"}
          p={'2rem'}
          bg="gray.50"
          minH="100vh"
          transition="margin-left 0.3s ease"
        >
          <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
          <Flex padding={'4rem'} >
            {<Page />}
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default Layout;

