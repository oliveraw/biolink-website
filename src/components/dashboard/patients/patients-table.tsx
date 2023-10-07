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

import { capitalize } from '@/utils/string'
import perStageInfo from '@/types/per-stage-info'

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
                <TableCell className="max-w-[120px] truncate">{item.name}</TableCell>
                <TableCell className="max-w-[120px] truncate">{item.birthday}</TableCell>
                <TableCell className="max-w-[120px] truncate">{item.sex}</TableCell>
                <TableCell className="max-w-[120px] truncate">{item.race}</TableCell>
                <TableCell className="max-w-[120px] truncate">{perStageInfo.find((info) => info.stage == item.stage)?.name}</TableCell>
                <TableCell className="max-w-[120px] truncate"><StatusBadge patient={item} /></TableCell>
                <TableCell className="max-w-[120px] truncate">
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
