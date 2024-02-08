import Link from "next/link"
import React from "react"

export default function Home() {
  return (
    <main className=''>
      <div>search</div>
      <Link href='/review-form/your-details'>review</Link>
    </main>
  )
}
