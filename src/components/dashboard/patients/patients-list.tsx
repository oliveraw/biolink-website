import { useState } from 'react'
import Link from 'next/link'
import {
  Card,
  Title,
  TextInput,
  List,
  ListItem
} from '@tremor/react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

import { Patient } from '@/API'
import StatusBadge from '@/components/dashboard/patients/status-badge'

export default function PatientsList({
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
      <List>
        {patients
          .filter((item) => item.name.toLowerCase().startsWith(searchInput))
          .map((item) => (
            <Link key={item.id} href={`/dashboard/patients/${item.id}`}>
              <ListItem className="px-2 rounded-md hover:bg-gray-50 hover:shadow-sm">
                {item.name}
                <StatusBadge status={item.status} />
              </ListItem>
            </Link>
          ))}
      </List>
    </Card>
  )
}
