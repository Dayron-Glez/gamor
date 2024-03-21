import { CategoriesComponent } from "./CategoriesComponent"

export const MainComponent = () => {
  return (
    <>
        <main className=" flex flex-col text-white w-[100%] justify-center">
         <section className=" flex flex-col md:flex-row items-center justify-center mb-16">
          <div className=" flex bg-[#1e293b] w-[300px]  h-[400px] mt-8 rounded-l-md md:w-[220px] md:h-[300px] lg:w-[300px] lg:h-[400px] xl:w-[400px] xl:h-[500px] 2">
            <p>Card 1</p>
          </div>
          <div className=" flex bg-[#f87316] w-[300px]  h-[400px] mt-8 md:w-[220px] md:h-[300px] lg:w-[300px] lg:h-[400px] xl:w-[400px] xl:h-[500px] 2" >
            <p>Card 2</p>
          </div>
          <div className=" flex bg-[#1e293b] w-[300px]  h-[400px] mt-8 rounded-r-md md:w-[220px] md:h-[300px] lg:w-[300px] lg:h-[400px] xl:w-[400px] xl:h-[500px] 2">
            <p>Card 3</p>
          </div>
         </section>
         
          <CategoriesComponent/>
         
        </main>
    </>
  )
}
