import { Button } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'

const IssuesPage = () => {
  return (
    <div>
      Issues
      <Button>
        <Link href="/issues/new">Create new issue</Link>
      </Button>
    </div>
  )
}

export default IssuesPage