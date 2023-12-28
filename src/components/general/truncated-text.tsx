import { Text } from '@tremor/react'

export default function TruncatedText({
  children,
  maxWidth = 32,
}: {
  children: React.ReactNode
  maxWidth?: number
}) {
  if (!children) return null

  const isText = (node: React.ReactNode) => typeof node === 'string' || typeof node === 'number'

  if (Array.isArray(children)) {
    if (!children.every(isText)) return null
  } else {
    if (!isText(children)) return null
  }

  const title = Array.isArray(children) ? children.join('') : children.toString()

  return (
    <Text className={`max-w-${maxWidth} truncate`}><span title={title}>{children}</span></Text>
  )
}
