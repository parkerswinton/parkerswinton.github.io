import { createFileRoute } from '@tanstack/react-router'
import { Construction } from 'lucide-react'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div className="p-8">
      <Construction className="text-orange-600" />
      <h1 className="bg-sky-700 px-4 py-2 text-4xl text-white hover:bg-sky-800 sm:px-8 sm:py-3">
        Construction Zone
      </h1>
    </div>
  )
}
