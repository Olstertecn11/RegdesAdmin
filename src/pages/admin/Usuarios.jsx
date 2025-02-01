import DataTable from "../../components/common/DataTable";
import React from "react";
import { Button } from "@chakra-ui/react";
import { TbUserUp, TbUserOff } from "react-icons/tb";
import AddUser from "../../components/admin/AddUser";
import SideDrawer from "../../components/common/SideDrawer";
import { FaEdit } from "react-icons/fa";
import ControlsBox from "../../components/common/ControlsBox";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";
import { getUsers, deleteUser } from "../../services/user";
import { constants } from "../../constants/env";


const Usuarios = () => {

  const [usuarios, setUsuarios] = React.useState([]);

  const getRole = (id) => {
    if (id == constants.privileges.user) return 'Usuario';
    if (id == constants.privileges.admin) return 'Admin';
    return 'Maestro';
  }

  const columns = [
    { header: 'ID', accessor: 'id' },
    { header: 'Nombre', accessor: 'usuario' },
    { header: 'Correo', accessor: 'correo' },
    { header: 'Privilegios', accessor: 'id_privilegios', render: (id) => getRole(id) },
  ];

  const fetch = async () => {
    const response = await getUsers();
    if (response.status === 200) {
      setUsuarios(response.data);
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
    const response = await deleteUser(id);
    console.log(response);
    if (response.status === 200) {
      toast.success('Usuario eliminado correctamente');
      fetch();
      return;
    }
    toast.error('Error al eliminar el usuario');
  }

  const renderActions = (user) => {
    return (
      <div>
        <Button p={0} color='blue.600' variant='outline' borderColor='blue.600' title='Editar' disabled={true} >
          <FaEdit />
        </Button>
        <Button p={0} color='red.600' variant='outline' _hover={{ bg: 'red.100' }} borderColor='red.600' title='Eliminar' ml={1} onClick={() => handleDelete(user.id)}>
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
        title="Agregar Usuario"
        component={AddUser}
        ref={drawerRef}
        onAdd={berforeInsert}
      />
      <div className="datatable-container">
        <DataTable columns={columns} data={usuarios} renderActions={renderActions} title="Usuarios" />
      </div>
    </div>
  )
}

export default Usuarios;
