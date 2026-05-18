import { createFileRoute } from '@tanstack/react-router'
import { Construction } from 'lucide-react'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div className="flex w-full items-center justify-center p-8">
      <Construction className="text-orange-400" />
      <h1 className="px-2 py-2 text-4xl">
        Construction Zone (but with a dark mode)
      </h1>
      <Construction className="text-orange-400" />
    </div>
  )
}
