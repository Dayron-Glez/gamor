
export const CategoriesComponent = () => {
  return (
    <>

      <div className=" grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-3 mb-16 text-white bg-[#0f172a] align-middle flex-col md:flex-row mx-auto sm:w-[900px] md:w-[660px] lg:w-[900px] xl:w-[1200px] justify-center">
        <div className=" font-semibold text-lg game game1 flex bg-[#1e293b] hover:border-[1px] hover:border-white h-40 md:h-32 rounded-md items-center justify-center z-10"><p className="text-container">Action Games</p></div>
        <div className=" font-semibold text-lg game game2 flex bg-[#1e293b] hover:border-[1px] hover:border-white h-40 md:h-32 rounded-md items-center justify-center z-10"><p className="text-container">Sports Games</p></div>
        <div className=" font-semibold text-lg game game3 flex bg-[#1e293b] hover:border-[1px] hover:border-white h-40 md:h-32 rounded-md items-center justify-center z-10"><p className="text-container">Adventure Games</p></div>
        <div className=" font-semibold text-lg game game4 flex bg-[#1e293b] hover:border-[1px] hover:border-white h-40 md:h-32 rounded-md items-center justify-center z-10"><p className="text-container">Arcade Games</p></div>
        <div className=" font-semibold text-lg game game5 flex bg-[#1e293b] hover:border-[1px] hover:border-white h-40 md:h-32 rounded-md items-center justify-center z-10"><p className="text-container">Fantasy Games</p></div>
        <div className=" font-semibold text-lg game game6 flex bg-[#1e293b] hover:border-[1px] hover:border-white h-40 md:h-32 rounded-md items-center justify-center z-10"><p className="text-container">Strategy Games</p></div>
        <div className=" font-semibold text-lg game game7 flex bg-[#1e293b] hover:border-[1px]hover:border-white h-40 md:h-32 rounded-md items-center justify-center    z-10"><p className="text-container">Shooter Games</p></div>
        <div className=" font-semibold text-lg game game flex bg-[#1e293b] hover:border-[1px] hover:border-white h-40 md:h-32 rounded-md items-center justify-center  z-10">All Categories</div>

      </div>
    </>
  )
}
