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
  Button
} from '@tremor/react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

import { Patient } from '@/API'
import StatusBadge from '@/components/dashboard/patients/status-badge'

import stages from '@/info/stages'

export default function PatientsTable({
  patients
}: {
  patients: Patient[]
}) {
  const [searchInput, setSearchInput] = useState<string>('')

  return (
    <Card className="space-y-4">
      <Title>Patients</Title>
      <div>
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

<<<<<<< Updated upstream
          <TableBody>
            {patients
              .filter((patient) => patient.name.toLowerCase().startsWith(searchInput))
              .map((patient) => (
                <TableRow key={patient.id}>
                  <TableCell className="max-w-[120px] truncate">{patient.name}</TableCell>
                  <TableCell className="max-w-[120px] truncate">{patient.birthday}</TableCell>
                  <TableCell className="max-w-[120px] truncate">{patient.sex}</TableCell>
                  <TableCell className="max-w-[120px] truncate">{patient.race}</TableCell>
                  <TableCell className="max-w-[120px] truncate">{stages[patient.stage].name}</TableCell>
                  <TableCell className="max-w-[120px] truncate"><StatusBadge patient={patient} /></TableCell>
                  <TableCell className="max-w-[120px] truncate">
                    <Link href={`/dashboard/patients/${patient.id}`}>
                      <Button size="xs" variant="secondary" color="gray">
                        Details
                      </Button>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
=======
        <TableBody>
          {patients
            .filter((patient) => patient.name.toLowerCase().startsWith(searchInput))
            .map((patient) => (
              <TableRow key={patient.id}>
                <TableCell className="max-w-[120px] truncate">{patient.name}</TableCell>
                <TableCell className="max-w-[120px] truncate">{patient.birthday}</TableCell>
                <TableCell className="max-w-[120px] truncate">{patient.sex}</TableCell>
                <TableCell className="max-w-[120px] truncate">{patient.race}</TableCell>
                <TableCell className="max-w-[120px] truncate">{stages[patient.stage].name}</TableCell>
                <TableCell className="max-w-[120px] truncate"><StatusBadge patient={patient} /></TableCell>
                <TableCell className="max-w-[120px] truncate">
                  <Link href={`/dashboard/patients/${patient.id}`}>
                    <Button size="xs" variant="secondary" color="gray">
                      Details
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
>>>>>>> Stashed changes
    </Card>
  )
}
