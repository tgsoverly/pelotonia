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
          <p className="mt-3 text-xl">Below are some thank you gifts we provide for donations toward our Pelotonia goal.  Help us make a difference!</p>
        </div>
        <div className="font-semibold pt-5">
          <p className="mb-3 text-xl">Don't want a gift? Any amount helps.</p>
          <a className=" bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
               href="https://pelotonia.org/donate?recipient=MO740354&recipientType=User"
               target="_blank">Donate Here!</a>
        </div>
        <Card title='Personalized Yoga'
              body='Is there a specific yoga pose you would like to work on? For this donation, Megan will contact you to discuss your personalized yoga goals, then make you a ten to fifteen minute video of exercises and flows to support your yoga progress.'
              image="yoga.jpg"
              price='50'/>
        <Card title='Root Caret Pen Holder'
              body='As part of the <a href="https://pelotonia.org/peloton/a0s3t00000BKXUWAA5">Root Peloton</a>, for a small donation, you can receive this thank you gift to hold your favorite writing instrument.'
              image="pen_holder.jpg"
              price='25'
              reverse={true}/>
        <Card title='Personalized Ballet Barre'
              body='Megan will make you a thirty-minute personalized ballet barre video. It can include any combination of barre work, floor work, and strength or stretching exercises. Your choice of musical accompaniment: ballet class tracks or show tunes!'
              image="shoes.jpg"
              price='50'/>
        <Card title='Fully Custom Personal Keyboard Case'
              body='I will work with you to construct the case of your dreams. We will work together to select the perfect materials, refine the design and choose the components.  Expect the process to take 6 months and I will only be making two per year.  This price includes a $200 material allowance.'
              image="keyboard.jpg"
              price='2000'
              reverse={true}/>
      </main>
    </div>
  )
}
