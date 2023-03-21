import Table from 'react-bootstrap/Table';

function Tables({item}) {
  return (
    <Table striped bordered hover variant="light">
     
      <tbody>
        <tr>
          <td>{item.img}</td>
          <td>{item.name}</td>
          <td>{item.description}</td>
          <td>{item.count}</td>
          <td>{item.price}</td>
          <td>{item.count*item.price}</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Tables;