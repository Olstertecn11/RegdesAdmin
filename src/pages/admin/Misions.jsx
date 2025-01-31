import DataTable from "../../components/common/DataTable";
import React from "react";
import { Button } from "@chakra-ui/react";
import { TbUserUp, TbUserOff } from "react-icons/tb";
import AddMision from "../../components/admin/AddMision";
import SideDrawer from "../../components/common/SideDrawer";
import { FaEdit } from "react-icons/fa";
import ControlsBox from "../../components/common/ControlsBox";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";
import { deleteMision } from "../../services/mision";
import { getMisiones } from "../../services/mision";


const Misions = () => {

  const [misiones, setMisiones] = React.useState([]);


  const columns = [
    { header: 'ID', accessor: 'id' },
    { header: 'Misión', accessor: 'nombre' },
  ];

  const fetch = async () => {
    const response = await getMisiones();

    if (response.status === 200) {
      setMisiones(response.data);
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
    const response = await deleteMision(id);
    console.log(response);
    if (response.status === 200) {
      toast.success('Mision eliminada correctamente');
      fetch();
      return;
    }
    toast.error('Error al eliminar la misión');
  }

  const renderActions = (mision) => {
    return (
      <div>
        <Button p={0} color='blue.600' variant='outline' borderColor='blue.600' title='Editar' disabled={true} >
          <FaEdit />
        </Button>
        <Button p={0} color='red.600' variant='outline' _hover={{ bg: 'red.100' }} borderColor='red.600' title='Eliminar' ml={1} onClick={() => handleDelete(mision.id)}>
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
        component={AddMision}
        ref={drawerRef}
        onAdd={berforeInsert}
      />
      <div className="datatable-container">
        <DataTable columns={columns} data={misiones} renderActions={renderActions} title="Misiones" />
      </div>
    </div>
  )
}

export default Misions;
