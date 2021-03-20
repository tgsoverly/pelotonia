export default function Card({title, body, price, image}) {
    return (
      <div className="md:flex bg-gray-100 rounded-xl p-0 my-10 md:my-20">
        <img className="w-full h-48 md:h-192 md:w-192 object-cover" src={image} alt=""/>
        <div className="pt-6 p-8 text-center md:text-left">
            <p className="text-lg font-semibold">
              {title}
            </p>
          <div className="font-medium">
            <div className="text-gray-500">
              {body}
            </div>
          </div>
          <div className="font-semibold">
            <span>${price}</span>
          </div>
        </div>
      </div>
    )
}
