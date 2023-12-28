import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  Title,
  TextInput,
  ListItem
} from '@tremor/react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import TruncatedText from '@/components/general/truncated-text'
import { Patient } from '@/API'
import StatusBadge from '@/components/dashboard/patients/status-badge'
import ScrollList from '@/components/general/scroll-list'
import StickyCard from '@/components/general/sticky-card'

export default function PatientsList({
  patients
}: {
  patients: Patient[]
}) {
  const { pathname } = useRouter()

  const [searchInput, setSearchInput] = useState<string>('')

  return (
    <StickyCard>
      <Title>Patients</Title>
      <div>
        <TextInput
          icon={MagnifyingGlassIcon}
          onChange={(e) => setSearchInput(e.target.value.toLowerCase())}
          placeholder="Search..."
        />
        <ScrollList maxHeight={96}>
          {patients
            .filter((item) => item.name.toLowerCase().startsWith(searchInput))
            .map((item) => (
              <Link key={item.id} href={`/dashboard/patients/${item.id}`}>
                <ListItem className="px-2 rounded-md hover:bg-gray-50 hover:shadow-sm">
                  <TruncatedText>{item.name}</TruncatedText>
                  <StatusBadge patient={item} />
                </ListItem>
              </Link>
            ))}
        </ScrollList>
      </div>
    </StickyCard>
  )
}
