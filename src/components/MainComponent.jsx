import { useState } from "react"
import { CategoriesComponent } from "./CategoriesComponent"
import {data} from '../utils/data'
import gameICon from '../assets/gameIcon.png'
export const MainComponent = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [valueSearch, setValueSearch] = useState('');
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
      <main className=" flex flex-col text-white w-[100%] justify-center">
        <section className="section-card flex flex-col md:flex-row items-center justify-center mb-16">
          <div className=" flex flex-col items-center justify-center bg-[#1e293b] w-[300px]  h-[400px] mt-8 rounded-l-lg md:w-[220px] md:h-[300px] lg:w-[300px] lg:h-[400px] xl:w-[400px] xl:h-[500px] 2">
            <div className=" flex flex-col">
              <p className=" lg:text-5xl text-4xl">start</p>
              <p className=" lg:text-5xl text-4xl text-[#7e22ce]">streaming</p>
              <p className=" lg:text-5xl text-4xl">games</p>
              <p className=" lg:text-5xl text-4xl">differently</p>
              <div className="flex flex-row mt-8 text-[#94a3b8]">
                <div className=" flex flex-col  md:flex-row text-base md:text-[12px] lg:text-[16px]">
                  <p> gamor now has</p>
                  <div className=" flex flex-col md:flex-row">
                    <p className=" mx-[3px] text-white">stream party</p>
                    <p>
                      platform
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" card2 flex flex-col items-center bg-[#f87316] w-[300px]  h-[400px] mt-8 md:w-[220px] md:h-[300px] lg:w-[300px] lg:h-[400px] xl:w-[400px] xl:h-[500px] 2" >
            <p className=" text-white text-2xl mt-4 mb-2">Fornite New Season</p>
            <p className=" text-[#c2410c] font-semibold mb-3">Join Live Stream</p>
            <div className=" bg-white rounded-3xl py-3 px-5">
              <span className=" text-[#f87316] font-semibold">{strTiempo}</span>
            </div>
          </div>
          <div className=" flex flex-col justify-center items-center bg-[#1e293b] w-[300px]  h-[400px] mt-8 rounded-r-lg md:w-[220px] md:h-[300px] lg:w-[300px] lg:h-[400px] xl:w-[400px] xl:h-[500px] 2">
            <div className=" flex flex-col w-[100%] justify-center items-center">
              <div className=" flex flex-row w-80 mb-4">
                <p className=" text-[#6b7280] font-semibold">01.</p>
                <p className=" text-white ml-2 font-semibold">Searching Game</p>
              </div>
              <div className=" flex flex-col  bg-[#0f172a] h-64 w-80 rounded-lg overflow-y-auto">
                <div>
                  <input 
                  type="text" 
                  className=" w-64 mt-4 h-10 ml-4 rounded-lg bg-[#1e293b]"  
                  placeholder="Search Game by Name"
                  onChange={(e) =>{setValueSearch(e.target.value)}}
                  />
                </div>
                
                {valueSearch === '' ? (
        filteredData.map(game => (
            <div key={game.id} className=" flex flex-col justify-center ml-4 mt-4">
                <div className=" flex flex-row items-center">
                    <img src={gameICon} alt="" className=" size-6"/>
                    <li className=" list-none">{game.name}</li>
                </div>
            </div>
        ))
    ) : (
        data.filter((game) => 
            game.name.toLowerCase().includes(valueSearch)
        ).map((game) => (
            <div key={game.id} className=" flex flex-col justify-center ml-4 mt-4">
                <div className=" flex flex-row items-center">
                    <img src={gameICon} alt="" className=" size-6"/>
                    <li className=" list-none">{game.name}</li>
                </div>
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
