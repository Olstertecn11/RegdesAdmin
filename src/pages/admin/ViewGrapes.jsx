import DataTable from '../../components/common/DataTable';
import { Button, Box, useToast } from '@chakra-ui/react'
import { getAllTiposUvas, deleteTipoUva } from '../../services/graphe_type';
import React from 'react';
import { FaTrash } from "react-icons/fa";



const ViewGrapes = () => {

  const [graps, setGraps] = React.useState([]);

  const fetchgraps = async () => {
    const response = await getAllTiposUvas();
    console.log(response.data[0]);
    setGraps(response.data);
  }

  React.useEffect(() => {
    fetchgraps();
  }, []);


  const columns = [
    { header: 'ID', accessor: 'id' },
    { header: 'Nombre', accessor: 'nombre_uva' },
    { header: 'Tamaño', accessor: 'tamano_uva' },
    { header: 'Color', accessor: 'color_uva' },
    { header: 'Parcela', accessor: 'nombre_parcela' }
  ];

  const _delete = async (id) => {
    const response = await deleteParcela(id);
    console.log(response);
    if (response.status === 200) {
      fetchgraps();
    }
    else {
      alert('Error al eliminar la parcela');
    }
  }



  const renderActions = (parcel) => {
    return (
      <>
        <Button p={0} color='red.600' variant='outline' _hover={{ bg: 'red.100' }} onClick={() => _delete(parcel.id)} borderColor='red.600' title='Eliminar' >
          <FaTrash />
        </Button>
      </>
    );
  };

  return (
    <Box w='100%' px={'10rem'}>
      <DataTable
        columns={columns}
        data={graps}
        renderActions={renderActions}
        title='Parcelas'
      />
    </Box>
  );
}

export default ViewGrapes;

