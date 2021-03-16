import Head from 'next/head'
import Card from '../components/card'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Fund Raising</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <span className="text-green-400"> Pelotonia! </span>
        </h1>
        <Card />
        <p className="mt-3 text-2xl">Start making a difference!</p>
      </main>
    </div>
  )
}
