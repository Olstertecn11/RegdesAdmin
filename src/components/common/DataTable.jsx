
import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Text,
  Tr,
  Th,
  Td,
  Box,
  HStack,
  Button,
  Select,
  Stack,
} from '@chakra-ui/react';

const DataTable = ({ columns, data, pageSizeOptions = [5, 10, 15], defaultPageSize = 5, renderActions, title = "DataTable", colorScheme = "blue" }) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [itemsPerPage, setItemsPerPage] = React.useState(defaultPageSize);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Box>
      <HStack justifyContent="center" mt={4} boxShadow={'lg'} borderColor={colorScheme}>
        <Text textAlign='center' fontWeight='bold' color={colorScheme + '.400'} >{title}</Text>
      </HStack>

      <HStack justifyContent="flex-start" mt={4}>
        <Select
          value={itemsPerPage}
          onChange={(e) => setItemsPerPage(Number(e.target.value))}
          w="100px"
        >
          {pageSizeOptions.map((size) => (
            <option key={size} value={size}>{size}</option>
          ))}
        </Select>
      </HStack>

      <Table variant="striped" colorScheme={colorScheme} mt={10} boxShadow='xl' rounded='md' className='datatable' >
        <Thead>
          <Tr>
            {columns.map((col, index) => (
              <Th key={index}>{col.header}</Th>
            ))}
            {renderActions && <Th textAlign='center'>Acciones</Th>}
          </Tr>
        </Thead>
        <Tbody>
          {currentItems.map((item, rowIndex) => (
            <Tr key={rowIndex}>
              {columns.map((col, colIndex) => (
                <Td key={colIndex}>
                  {col.render ? col.render(item[col.accessor], item) : item[col.accessor]}
                </Td>
              ))}
              {renderActions && (
                <Td>
                  <Stack display='flex' flexDir='row' justifyContent='center' alignItems='center'>
                    {renderActions(item)}
                  </Stack>
                </Td>
              )}
            </Tr>
          ))}
        </Tbody>
      </Table>

      <HStack justifyContent="center" mt={4}>
        {Array.from({ length: totalPages }, (_, index) => (
          <Button
            key={index}
            onClick={() => paginate(index + 1)}
            isActive={currentPage === index + 1}
            colorScheme="blue"
          >
            {index + 1}
          </Button>
        ))}
      </HStack>
    </Box>
  );
};

export default DataTable;
