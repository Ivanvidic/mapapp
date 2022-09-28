import { Container, Table } from "react-bootstrap";

export function DataTable({ data }) {
  return (
    <Container className="mt-5">
      {data.map((ev) => (
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Naziv Objekta</th>
              <th>PS Broj</th>
              <th>E Broj</th>
              <th>Tip Objekta</th>
              <th>Lučka Kapetanija</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="w-25">{ev.properties.naziv_objekta}</td>
              <td>{ev.properties.ps_br}</td>
              <td>{ev.properties.e_br}</td>
              <td>{ev.properties.tip_objekta}</td>
              <td>{ev.properties.lucka_kapetanija}</td>
            </tr>
          </tbody>
        </Table>
      ))}
    </Container>
  );
}
