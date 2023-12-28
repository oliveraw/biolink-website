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
import TruncatedText from '@/components/general/truncated-text'
import { Patient } from '@/API'
import StatusBadge from '@/components/dashboard/patients/status-badge'

import stageInfo from '@/info/stages'

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
              <TableHeaderCell>Condition</TableHeaderCell>
              <TableHeaderCell>Treatments</TableHeaderCell>
              <TableHeaderCell>Stage</TableHeaderCell>
              <TableHeaderCell>Status</TableHeaderCell>
              <TableHeaderCell>Details</TableHeaderCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {patients
              .filter((patient) => patient.name.toLowerCase().startsWith(searchInput))
              .map((patient) => (
                <TableRow key={patient.id}>
                  <TableCell><TruncatedText>{patient.name}</TruncatedText></TableCell>
                  <TableCell><TruncatedText>{patient.birthday}</TruncatedText></TableCell>
                  <TableCell><TruncatedText>{patient.sex}</TruncatedText></TableCell>
                  <TableCell><TruncatedText>{patient.race}</TruncatedText></TableCell>
                  <TableCell><TruncatedText>{patient.condition}</TruncatedText></TableCell>
                  <TableCell><TruncatedText>{patient.treatments.join(', ')}</TruncatedText></TableCell>
                  <TableCell><TruncatedText>{stageInfo[patient.stage].name}</TruncatedText></TableCell>
                  <TableCell><StatusBadge patient={patient} /></TableCell>
                  <TableCell>
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
    </Card>
  )
}
