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
import StickyCard from '@/components/general/sticky-card'

import stageInfo from '@/info/stages'

export default function PatientsTable({
  patients
}: {
  patients: Patient[]
}) {
  const [searchInput, setSearchInput] = useState<string>('')

  return (
    <StickyCard>
      <Title>Patients</Title>
      <div>
        <TextInput
          icon={MagnifyingGlassIcon}
          onChange={(e) => setSearchInput(e.target.value.toLowerCase())}
          placeholder="Search..."
          className="z-10"
        />
        <Table className="max-h-96 overflow-y-auto">
          <TableHead>
            <TableRow>
              <TableHeaderCell className="bg-white">Name</TableHeaderCell>
              <TableHeaderCell className="bg-white">Stage</TableHeaderCell>
              <TableHeaderCell className="bg-white">Status</TableHeaderCell>
              <TableHeaderCell className="bg-white">Details</TableHeaderCell>
              <TableHeaderCell className="bg-white">Birthday</TableHeaderCell>
              <TableHeaderCell className="bg-white">Sex</TableHeaderCell>
              <TableHeaderCell className="bg-white">Race</TableHeaderCell>
              <TableHeaderCell className="bg-white">Condition</TableHeaderCell>
              <TableHeaderCell className="bg-white">Treatments</TableHeaderCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {patients
              .filter((patient) => patient.name.toLowerCase().startsWith(searchInput))
              .map((patient) => (
                <TableRow key={patient.id}>
                  <TableCell><TruncatedText>{patient.name}</TruncatedText></TableCell>
                  <TableCell><TruncatedText>{stageInfo[patient.stage].name}</TruncatedText></TableCell>
                  <TableCell><StatusBadge patient={patient} /></TableCell>
                  <TableCell>
                    <Link href={`/dashboard/patients/${patient.id}`}>
                      <Button size="xs" variant="secondary" color="gray">
                        Details
                      </Button>
                    </Link>
                  </TableCell>
                  <TableCell><TruncatedText>{patient.birthday}</TruncatedText></TableCell>
                  <TableCell><TruncatedText>{patient.sex}</TruncatedText></TableCell>
                  <TableCell><TruncatedText>{patient.race}</TruncatedText></TableCell>
                  <TableCell><TruncatedText>{patient.condition}</TruncatedText></TableCell>
                  <TableCell><TruncatedText>{patient.treatments.join(', ')}</TruncatedText></TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    </StickyCard>
  )
}
