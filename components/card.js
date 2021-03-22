export default function Card({title, body, price, image, reverse = false}) {
    const imageElement = (
            <img className="w-full h-64 md:h-96 md:w-192 object-cover" src={image} alt=""/>
    );
    const textAlign = reverse ? "md:text-right" : "md:text-left";
    const textElement = (
        <div className={"pt-6 p-8 text-center " + textAlign}>
          <p className="text-lg font-semibold">
            {title}
          </p>
          <div className="font-medium">
            <div className="text-gray-500" dangerouslySetInnerHTML={{__html: body}} />
          </div>
          <div className="font-semibold pt-5">
            <a className=" bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
               href="https://pelotonia.org/donate?recipient=TO0043&recipientType=User"
               target="_blank">${price}</a>
          </div>
        </div>
    )
    if(reverse) {
      return (
        <div className="md:flex bg-gray-100 p-0 my-5 md:my-10">
            { textElement }
            { imageElement }
        </div>
      )
    }else{
      return (
        <div className="md:flex bg-gray-100 p-0 my-10 md:my-20">
            { imageElement }
            { textElement }
        </div>
      )
    }
}
