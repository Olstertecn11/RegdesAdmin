import DataTable from '../../components/common/DataTable';
import { Button, Box, useToast } from '@chakra-ui/react'
import { getAllParcelas, deleteParcela } from '../../services/parcela';
import React from 'react';
import { FaTrash } from "react-icons/fa";



const ViewParcel = () => {

  const [parcels, setParcels] = React.useState([]);

  const fetchParcels = async () => {
    const response = await getAllParcelas();
    console.log(response.data);
    setParcels(response.data);
  }

  React.useEffect(() => {
    fetchParcels();
  }, []);


  const columns = [
    { header: 'ID', accessor: 'id' },
    { header: 'Nombre', accessor: 'nombre_parcela' },
    { header: 'Ubicacion', accessor: 'ubicacion' },
    { header: 'Superficie Creación', accessor: 'superficie' },
    { header: 'Tipo de Suelo', accessor: 'tipo_suelo' }
  ];

  const _delete = async (id) => {
    const response = await deleteParcela(id);
    console.log(response);
    if (response.status === 200) {
      fetchParcels();
      alert('Parcela eliminada correctamente');
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
        data={parcels}
        renderActions={renderActions}
        title='Parcelas'
      />
    </Box>
  );
}

export default ViewParcel;

