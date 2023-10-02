import { useState } from 'react'
import Link from 'next/link'
import {
  Card,
  Title,
  TextInput,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableBody,
  Badge,
  Button,
  Color
} from '@tremor/react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

import type Patient from '@/types/patient'

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase()
}

const statusColors: { [key: string]: Color } = {
  COMPLETED: 'emerald',
  SCHEDULED: 'amber',
  PENDING: 'rose'
}

export default function PatientsTable({
  patients
}: {
  patients: Patient[]
}) {
  const [searchInput, setSearchInput] = useState<string>('')

  return (
    <Card className="space-y-2">
      <Title>Patients</Title>
      <TextInput
        icon={MagnifyingGlassIcon}
        onChange={(e) => setSearchInput(e.target.value.toLowerCase())}
        placeholder="Search..."
      />
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Birthday</TableHeaderCell>
            <TableHeaderCell>Sex</TableHeaderCell>
            <TableHeaderCell>Race</TableHeaderCell>
            <TableHeaderCell>Stage</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
            <TableHeaderCell>Details</TableHeaderCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {patients
            .filter((item) => item.name.toLowerCase().startsWith(searchInput))
            .map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.birthday}</TableCell>
                <TableCell>{item.sex}</TableCell>
                <TableCell>{item.race}</TableCell>
                <TableCell>{capitalize(item.stage)}</TableCell>
                <TableCell>
                  <Badge color={statusColors[item.status]} size="xs">
                      {capitalize(item.status)}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Link href={`/dashboard/patients/${item.id}`}>
                    <Button size="xs" variant="secondary" color="gray">
                      Details
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </Card>
  )
}
