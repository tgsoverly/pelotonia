import Head from 'next/head'
import Card from '../components/card'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fund Raising</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 text-center">
        <div className="px-20">
          <h1 className="text-6xl font-bold">
            Welcome to{' '}
            <span className="text-green-400"> Pelotonia! </span>
          </h1>
          <p className="mt-3 text-2xl">Start making a difference!</p>
        </div>
        <Card title='Root Caret Pen Holder'
              body='As part of the Root Peloton, for a small donation, you can receive this thank you gift to hold your favorite writing instrument.'
              image="pen_holder.jpg"
              price='25'/>
        <Card title='Fully Custom Personal Keyboard Case'
              body='I will work with you personally to construct your dream setup. We will work together to select all your components, materials, and design.'
              image="keyboard.jpg"
              price='2000'/>
      </main>
    </div>
  )
}
