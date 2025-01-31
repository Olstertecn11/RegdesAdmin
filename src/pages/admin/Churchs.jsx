import DataTable from "../../components/common/DataTable";
import { getChurchs } from "../../services/church";
import React from "react";
import { Button } from "@chakra-ui/react";
import { TbUserUp, TbUserOff } from "react-icons/tb";
import AddChurch from "../../components/admin/AddChurch";
import SideDrawer from "../../components/common/SideDrawer";
import { FaEdit } from "react-icons/fa";
import ControlsBox from "../../components/common/ControlsBox";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";
import { deleteChurch } from "../../services/church";
import { getMisiones } from "../../services/mision";


const Churchs = () => {

  const [churchs, setChurchs] = React.useState([]);
  const [misiones, setMisiones] = React.useState([]);


  const columns = [
    { header: 'Nombre', accessor: 'nombre' },
    { header: 'Distrito', accessor: 'distrito' },
    { header: 'Misión', accessor: 'id_mision' },
  ];

  const fetch = async () => {
    const _response = await getMisiones();
    const response = await getChurchs();

    if (_response.status === 200) {
      setMisiones(_response.data);
    }

    if (response.status === 200) {
      const _churchs = response.data.map((church) => {
        const mision = _response.data.find((mision) => mision.id === church.id_mision);
        if (!mision) return { ...church, id_mision: 'Sin misión' };
        return { ...church, id_mision: mision.nombre };
      });
      setChurchs(_churchs);
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
    const response = await deleteChurch(id);
    console.log(response);
    if (response.status === 200) {
      toast.success('Iglesia eliminada correctamente');
      fetch();
      return;
    }
    toast.error('Error al eliminar la iglesia');
  }

  const renderActions = (church) => {
    return (
      <div>
        <Button p={0} color='blue.600' variant='outline' borderColor='blue.600' title='Editar' disabled={true} >
          <FaEdit />
        </Button>
        <Button p={0} color='red.600' variant='outline' _hover={{ bg: 'red.100' }} borderColor='red.600' title='Eliminar' ml={1} onClick={() => handleDelete(church.id)}>
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
        component={AddChurch}
        ref={drawerRef}
        onAdd={berforeInsert}
      />
      <div className="datatable-container">
        <DataTable columns={columns} data={churchs} renderActions={renderActions} title="Iglesias" />
      </div>
    </div>
  )
}

export default Churchs;
