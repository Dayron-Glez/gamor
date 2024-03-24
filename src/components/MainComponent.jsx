/* eslint-disable react/prop-types */
import { useState } from "react"
import { CategoriesComponent } from "./CategoriesComponent"
import { data } from '../utils/data'
import gameICon from '../assets/gameIcon.png'
import plusIcon from '../assets/plus.png'
import personIcon from '../assets/person.png'
export const MainComponent = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [valueSearch, setValueSearch] = useState('');
  const [selectedStreamer, setSelectedStreamer] = useState('');
  let fecha = new Date()
  let horas = fecha.getHours()
  let minutos = fecha.getMinutes();
  let ampm = horas >= 12 ? 'PM' : 'AM';
  let opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  let strFecha = fecha.toLocaleDateString('es-ES', opciones);

  let partes = strFecha.split(' ');

  partes = partes.map(parte => parte.charAt(0).toUpperCase() + parte.slice(1));

  strFecha = partes.join(' ');

  horas = horas % 12;
  horas = horas ? horas : 12;
  minutos = minutos < 10 ? '0' + minutos : minutos;
  let strTiempo = horas + ':' + minutos + ' ' + ampm;
  return (
    <>
      <main className=" flex flex-col bg-slate-100 dark:bg-[#0f172a] dark:text-white w-[100%] justify-center">
        <section className="section-card flex flex-col md:flex-row items-center justify-center mb-16">
          <div className=" card1 shadow-md flex flex-col items-center justify-center bg-slate-50 dark:bg-[#1e293b] w-[300px]  h-[400px] mt-8 rounded-l-lg md:w-[220px] md:h-[300px] lg:w-[300px] lg:h-[400px] xl:w-[400px] xl:h-[500px] 2">
            <div className=" flex flex-col">
              <p className=" lg:text-5xl text-4xl">start</p>
              <p className=" lg:text-5xl text-4xl text-[#f87316] dark:text-[#7e22ce]">streaming</p>
              <p className=" lg:text-5xl text-4xl">games</p>
              <p className=" lg:text-5xl text-4xl">differently</p>
              <div className="flex flex-row mt-8 dark:text-[#94a3b8]">
                <div className=" flex flex-col  md:flex-row text-base md:text-[12px] lg:text-[16px]">
                  <p> gamor now has</p>
                  <div className=" flex flex-col md:flex-row">
                    <p className=" mx-[3px] text-black dark:text-white">stream party</p>
                    <p>
                      platform
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" card2 rounded-md md:rounded-none bg-light-theme dark:bg-dark-theme shadow-md flex flex-col items-center bg-[#7e22ce] dark:bg-[#f87316] w-[300px]  h-[400px] mt-8 md:w-[220px] md:h-[300px] lg:w-[300px] lg:h-[400px] xl:w-[400px] xl:h-[500px] 2" >
            <p className=" text-white text-2xl mt-4 mb-2">Fornite New Season</p>
            {selectedStreamer ? (
              <div className=" flex flex-row mb-3">

                <img src={personIcon} alt="" className=" size-6" />
                <p className=" text-white dark:text-black">{selectedStreamer}</p>
              </div>
            ) :
            <p className=" text-white dark:text-[#c2410c] font-semibold mb-3">Join Live Stream</p>
            }
            <div className=" bg-white rounded-3xl py-3 px-5">
              <span className="text-[#7e22ce] dark:text-[#f87316] font-semibold">{strTiempo}</span>
            </div>
           
          </div>
          <div className=" card3 shadow-md flex flex-col justify-center items-center  bg-slate-50 dark:bg-[#1e293b] w-[300px]  h-[400px] mt-8 rounded-r-lg md:w-[220px] md:h-[300px] lg:w-[300px] lg:h-[400px] xl:w-[400px] xl:h-[500px] 2">
            <div className=" flex flex-col w-[100%] justify-center items-center">
              <div className=" flex flex-row w-56 md:w-40 lg:w-60 xl:w-80 mb-4">
                <p className=" text-[#6b7280] font-semibold">01.</p>
                <p className=" dark:text-white ml-2 font-semibold">Searching Game</p>
              </div>
              <div className=" flex flex-col bg-slate-100 border-2 dark:border-none  border-slate-300 shadow-md dark:bg-[#0f172a] h-64 w-56 md:w-40 md:h-52 lg:w-60 lg:h-64 xl:w-80 xl:h-96 rounded-lg overflow-y-auto">
                <div>
                  <input
                    type="text"
                    className=" w-44 h-10 md:w-32 lg:w-44 xl:w-56 mt-4 ml-4 rounded-lg dark:border-none border-2 border-slate-300 bg-slate-100  dark:bg-[#1e293b] pl-1"
                    placeholder="Search Game by Name"
                    onChange={(e) => { setValueSearch(e.target.value) }}
                  />
                </div>

                {valueSearch === '' ? (
                  filteredData.map(game => (
                    <div key={game.id} className=" flex flex-col justify-between ml-4 mt-4">
                      <div className=" flex flex-row items-center">
                        <img src={gameICon} alt="" className=" size-6" />
                        <li className=" list-none my-2">{game.name}</li>
                      </div>
                      {game.streamers.map((streamer, index) => (
                        <div key={index} className=" flex items-center ">
                          <img src={personIcon} alt="" className=" size-6" />
                          <li className=" list-none ml-4 my-2">{streamer.sName}</li>
                          <button onClick={() => setSelectedStreamer(streamer.sName)} type="button" className=" flex flex-col place-content-center items-center flex-wrap mx-4 size-6 text-center">
                            <img src={plusIcon} alt="" />
                          </button>
                        </div>
                      ))}
                    </div>
                  ))
                ) : (
                  data.filter((game) =>
                    game.name.toLowerCase().includes(valueSearch)
                  ).map((game) => (
                    <div key={game.id} className=" flex flex-col justify-between ml-4 mt-4">
                      <div className=" flex flex-row items-center">
                        <img src={gameICon} alt="" className=" size-6" />
                        <li className=" list-none">{game.name}</li>
                      </div>
                      {game.streamers.map((streamer, index) => (
                        <div key={index} className=" flex items-center ">
                          <img src={personIcon} alt="" className=" size-6" />
                          <li className=" list-none ml-4 my-2">{streamer.sName}</li>
                          <button onClick={() => setSelectedStreamer(streamer.sName)} type="button" className=" flex flex-col place-content-center items-center flex-wrap mx-4 size-6 text-center">
                            <img src={plusIcon} alt="" />
                          </button>
                        </div>
                      ))}
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </section>

        <CategoriesComponent setFilteredData={setFilteredData} />

      </main>
    </>
  )
}
