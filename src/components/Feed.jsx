
export const Feed = ({image,time,title,description}) => {
    return <div className="flex gap-5 border-b border-gray-100 pb-5 mt-5">
          <div className="">
          <img className="w-10 rounded-full" src={image} alt="" />
          </div>
          <div>
             <p className="text-xs text-gray-400">{time}</p>
             <h1 className="tex-lg font-medium text-blue-500">{title}</h1>
             <p className="text-md font-light">{description}</p>
          </div>
    </div>
}
