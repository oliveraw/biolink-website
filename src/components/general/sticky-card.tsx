import { Card } from '@tremor/react'

export default function StickyCard({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Card className="space-y-4 lg:sticky lg:top-6 lg:h-[calc(100vh-3rem)]">
      {children}
    </Card>
  )
}
