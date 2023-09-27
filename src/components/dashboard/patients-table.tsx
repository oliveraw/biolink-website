import {
  Card,
  Title,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableBody,
  Badge,
  Color
} from '@tremor/react'

const patients: {
  id: number
  name: string
  age: number
  location: string
  date: string
  condition: string
  status: string
}[] = [
  {
    id: 1,
    name: "Peter Doe",
    age: 45,
    location: "Ann Arbor, MI",
    date: "07-27-2023",
    condition: "Prostate Cancer",
    status: "Treated"
  },
  {
    id: 2,
    name: "Lena Whitehouse",
    age: 35,
    location: "Chicago, IL",
    date: "08-03-2023",
    condition: "Prostate Cancer",
    status: "Treated"
  },
  {
    id: 3,
    name: "Phil Less",
    age: 52,
    location: "Ann Arbor, MI",
    date: "08-04-2023",
    condition: "Prostate Cancer",
    status: "Scheduled"
  },
  {
    id: 5,
    name: "John Camper",
    age: 22,
    location: "Detroit, MI",
    date: "08-04-2023",
    condition: "Prostate Cancer",
    status: "Waiting"
  },
  {
    id: 6,
    name: "Max Balmoore",
    age: 49,
    location: "Ann Arbor, MI",
    date: "08-08-2023",
    condition: "Prostate Cancer",
    status: "Treated"
  },
  {
    id: 7,
    name: "Peter Moore",
    age: 82,
    location: "Chicago, IL",
    date: "08-17-2023",
    condition: "Prostate Cancer",
    status: "Scheduled"
  },
  {
    id: 8,
    name: "Joe Sachs",
    age: 49,
    location: "Detroit, MI",
    date: "09-14-2023",
    condition: "Prostate Cancer",
    status: "Waiting"
  }
];

const colors: { [key: string]: Color } = {
  Treated: "emerald",
  Scheduled: "amber",
  Waiting: "rose"
}

export default function PatientsTable() {
  return (
    <Card>
      <Title>Patients</Title>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>ID</TableHeaderCell>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Age</TableHeaderCell>
            <TableHeaderCell>Location</TableHeaderCell>
            <TableHeaderCell>Date</TableHeaderCell>
            <TableHeaderCell>Condition</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {patients.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.age}</TableCell>
              <TableCell>{item.location}</TableCell>
              <TableCell>{item.date}</TableCell>
              <TableCell>{item.condition}</TableCell>
              <TableCell>
                <Badge color={colors[item.status]} size="xs">
                    {item.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}
