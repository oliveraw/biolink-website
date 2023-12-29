import { List } from '@tremor/react'

export default function ScrollList({
  children,
  maxHeight = 48,
}: {
  children: React.ReactNode
  maxHeight?: number
}) {
  return (
    <List className={`max-h-${maxHeight} overflow-y-auto`}>
      {children}
    </List>
  )

  // return (
  //   <div className="relative">
  //     <List className="max-h-32 overflow-y-auto">
  //       {children}
  //       <div className="h-8 border-none"/>
  //     </List>
  //     <div className="absolute bottom-0 bg-gradient-to-b from-transparent to-white z-10 h-8 w-full" />
  //   </div>
  // )
}
