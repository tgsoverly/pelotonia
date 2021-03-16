export default function Card() {
    return (
        <div className="min-w-screen min-h-screen bg-green-400 flex items-center p-5 lg:p-10 overflow-hidden relative">
            <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
                <div className="md:flex items-center -mx-10">
                    <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                        <div className="relative">
                            <img
                                src="/keyboard.jpeg"
                                alt="Example custome keyboard"
                                width={500}
                                height={500} />
                            <div className="border-4 border-green-400 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 px-10">
                        <div className="mb-10">
                            <h1 className="font-bold uppercase text-2xl mb-5">One of a kind custom keyboard</h1>
                            <p className="text-sm">I will work with you construct your dream setup.</p>
                            <p className="text-sm">We will start with you selecting your switches, PCB, and keycaps.  We will then work together to select the perfect wood from locally sourced timber. Next comes the case shape and size.  Fininally we will engrave it with a resin inlay for a truely distinctive look.</p>
                        </div>
                        <div>
                            <div className="inline-block align-bottom mr-5">
                                <span className="text-2xl leading-none align-baseline">$</span>
                                <span className="font-bold text-5xl leading-none align-baseline">2000</span>
                            </div>
                            <div className="inline-block align-bottom">
                                <button className="bg-yellow-300 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold"><i className="mdi mdi-cart -ml-2 mr-2"></i> BUY NOW</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
