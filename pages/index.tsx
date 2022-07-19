import type { NextPage } from 'next'
import Link from 'next/link';
import { Button } from '@mantine/core';

const Home: NextPage = () => {
  return (
    <div>
      <Link href="/hello" passHref>
        <Button component="a">Next link button</Button>
      </Link>
    </div>
  )
}

export default Home
