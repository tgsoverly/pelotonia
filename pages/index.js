import Head from 'next/head'
import Card from '../components/card'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fund Raising for Pelotonia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 text-center">
        <div className="px-20">
          <h1 className="text-6xl font-bold">
            Welcome to our{' '}<span className="text-green-400"> Pelotonia </span> Page!{' '}
          </h1>
          <p className="mt-3 text-xl">Start making a difference!</p>
        </div>
        <Card title='Root Caret Pen Holder'
              body='As part of the <a href="https://pelotonia.org/peloton/a0s3t00000BKXUWAA5">Root Peloton</a>, for a small donation, you can receive this thank you gift to hold your favorite writing instrument.'
              image="pen_holder.jpg"
              price='25'
              reverse={true}/>
        <Card title='Fully Custom Personal Keyboard Case'
              body='I will work with you to construct the case of your dreams. We will work together to select the perfect materials, refine the design and choose the components.  Expect the process to take 6 months and I will only be making two per year.  This price includes a $200 material allowance.'
              image="keyboard.jpg"
              price='2000'/>
      </main>
    </div>
  )
}
