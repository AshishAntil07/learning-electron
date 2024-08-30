import { ReactNode } from "react";
import TitleBar from "~/components/TitleBar";


export default function AppTemplate({ children }: { children: ReactNode }){
  return (
    <div className='bg-primary-dark text-white h-screen flex flex-col'>
      <TitleBar />
      <main className='p-6'>
        {children}
      </main>
    </div>
  )
}