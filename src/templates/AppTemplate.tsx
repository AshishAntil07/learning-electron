import { ReactNode } from "react";
import SideBar from "~/components/SideBar";
import TitleBar from "~/components/TitleBar";


export default function AppTemplate({ children }: { children: ReactNode }){
  return (
    <div className='flex flex-col h-screen w-screen'>
      {/* background */}
      <div className='bg-[rgb(0,55,105)] top-0 left-0 absolute h-full w-full overflow-hidden'>
        <div className='absolute top-0 left-96 -translate-x-1/2 h-[750px] aspect-square blur-[100px] rounded-full bg-blue-400'></div>
        <div className='absolute bottom-0 left-0 -translate-x-1/4 h-[500px] aspect-square blur-[150px] rounded-full bg-green-400'></div>
        <div className='absolute bottom-0 right-0 translate-y-1/4 h-[500px] aspect-square blur-[150px] rounded-full bg-red-400'></div>
      </div>

      {/* content */}
      <div className='bg-primary-dark/50 relative z-1 backdrop-blur-3xl text-white flex-shrink-0 h-screen w-screen flex flex-col'>
        <TitleBar />
        <div className='flex gap-6 p-6 pt-2 flex-nowrap items-stretch h-full'>
          <SideBar />
          <main className='p-6 flex flex-col items-stretch rounded-xl bg-primary-dark/80 w-full'>
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}