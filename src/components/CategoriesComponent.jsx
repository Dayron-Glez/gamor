/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { data } from "../utils/data"
export const CategoriesComponent = ({ setFilteredData }) => {
  const [category, setCategory] = useState('')

  const handleCategory = (categoryName) => {
    if (categoryName === 'all') {
      setCategory('');
    } else {
      setCategory(categoryName);
    }
  }
  
  useEffect(() => {
    const filteredData = category === '' ? data : data.filter(game => game.category === category);
    setFilteredData(filteredData);
  }, [category, setFilteredData]);

  return (
    <>

      <div className=" grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-3 mb-16 text-white bg-[#0f172a] align-middle flex-col md:flex-row mx-auto sm:w-[900px] md:w-[660px] lg:w-[900px] xl:w-[1200px] justify-center">
        <button onClick={() => handleCategory('action')} type="button" className=" font-semibold text-lg game game1 flex bg-[#1e293b] hover:border-[1px] hover:border-white h-40 md:h-32 rounded-md items-center justify-center z-10"><p className="text-container">Action Games</p></button>
        <button onClick={() => handleCategory('sports')} type="button" className=" font-semibold text-lg game game2 flex bg-[#1e293b] hover:border-[1px] hover:border-white h-40 md:h-32 rounded-md items-center justify-center z-10"><p className="text-container">Sports Games</p></button>
        <button onClick={() => handleCategory('adventure')} type="button" className=" font-semibold text-lg game game3 flex bg-[#1e293b] hover:border-[1px] hover:border-white h-40 md:h-32 rounded-md items-center justify-center z-10"><p className="text-container">Adventure Games</p></button>
        <button onClick={() => handleCategory('arcade')} type="button" className=" font-semibold text-lg game game4 flex bg-[#1e293b] hover:border-[1px] hover:border-white h-40 md:h-32 rounded-md items-center justify-center z-10"><p className="text-container">Arcade Games</p></button>
        <button onClick={() => handleCategory('fantasy')} type="button" className=" font-semibold text-lg game game5 flex bg-[#1e293b] hover:border-[1px] hover:border-white h-40 md:h-32 rounded-md items-center justify-center z-10"><p className="text-container">Fantasy Games</p></button>
        <button onClick={() => handleCategory('strategy')} type="button" className=" font-semibold text-lg game game6 flex bg-[#1e293b] hover:border-[1px] hover:border-white h-40 md:h-32 rounded-md items-center justify-center z-10"><p className="text-container">Strategy Games</p></button>
        <button onClick={() => handleCategory('shooter')} type="button" className=" font-semibold text-lg game game7 flex bg-[#1e293b] hover:border-[1px]hover:border-white h-40 md:h-32 rounded-md items-center justify-center    z-10"><p className="text-container">Shooter Games</p></button>
        <button onClick={() => handleCategory('all')} type="button" className=" font-semibold text-lg game game flex bg-[#1e293b] hover:border-[1px] hover:border-white h-40 md:h-32 rounded-md items-center justify-center  z-10">All Categories</button>
      </div>
    </>
  )
}
