
import DataTable from "../../components/common/DataTable";
import React from "react";
import { Button } from "@chakra-ui/react";
import { TbUserUp, TbUserOff } from "react-icons/tb";
import AddClase from "../../components/admin/AddClase";
import SideDrawer from "../../components/common/SideDrawer";
import { FaEdit } from "react-icons/fa";
import ControlsBox from "../../components/common/ControlsBox";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";
import { getClases, addClase } from "../../services/clases";
import { deleteClase } from "../../services/clases";


const Clases = () => {

  const [clases, setClases] = React.useState([]);


  const columns = [
    { header: 'ID', accessor: 'id' },
    { header: 'Iglesia', accessor: 'id_iglesia' },
    { header: 'Nombre Clase', accessor: 'nombre' },
  ];

  const fetch = async () => {
    const response = await getClases();
    if (response.status === 200) {
      setClases(response.data);
    }
  }

  React.useEffect(() => {
    fetch();
  }, []);



  const berforeInsert = () => {
    fetch();
    drawerRef.current.closeDrawer();
  }


  const handleDelete = async (id) => {
    const response = await deleteClase(id);
    console.log(response);
    if (response.status === 200) {
      toast.success('Clase eliminada correctamente');
      fetch();
      return;
    }
    toast.error('Error al eliminar la clase');
  }

  const renderActions = (clase) => {
    return (
      <div>
        <Button p={0} color='blue.600' variant='outline' borderColor='blue.600' title='Editar' disabled={true} >
          <FaEdit />
        </Button>
        <Button p={0} color='red.600' variant='outline' _hover={{ bg: 'red.100' }} borderColor='red.600' title='Eliminar' ml={1} onClick={() => handleDelete(clase.id)}>
          <MdDelete />
        </Button>
      </div>
    )
  }

  const drawerRef = React.useRef();

  return (
    <div className="full-container">
      <ControlsBox add={() => drawerRef.current.openDrawer()} />
      <SideDrawer
        title="Agregar Iglesia"
        component={AddClase}
        ref={drawerRef}
        onAdd={berforeInsert}
      />
      <div className="datatable-container">
        <DataTable columns={columns} data={clases} renderActions={renderActions} title="Clases" />
      </div>
    </div>
  )
}

export default Clases;
