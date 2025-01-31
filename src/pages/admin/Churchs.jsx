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


const Churchs = () => {

  const [churchs, setChurchs] = React.useState([]);


  const columns = [
    { header: 'Nombre', accessor: 'nombre' },
    { header: 'Distrito', accessor: 'distrito' },
    { header: 'Misión', accessor: 'id_mision' },
  ];

  const fetch = async () => {
    const response = await getChurchs();
    console.log(response)
    if (response.status === 200) {
      setChurchs(response.data);
    }
  }

  React.useEffect(() => {
    fetch();
  }, []);

  const berforeInsert = () => {
    fetch();
    drawerRef.current.closeDrawer();
  }


  const renderActions = (church) => {
    return (
      <div>
        <Button p={0} color='blue.600' variant='outline' borderColor='blue.600' title='Editar' >
          <FaEdit />
        </Button>
        <Button p={0} color='red.600' variant='outline' _hover={{ bg: 'red.100' }} borderColor='red.600' title='Eliminar' ml={1}>
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
