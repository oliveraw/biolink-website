import { Card } from '@tremor/react'

export default function StickyCard({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Card className="sticky top-6 h-[calc(100vh-3rem)] space-y-4">
      {children}
    </Card>
  )
}
