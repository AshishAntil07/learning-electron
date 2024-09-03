import Link from "~comp/Link";


export default function SideBar(){
  return (
    <>
      <aside className='w-[300px] flex flex-col flex-shrink-0'>
        <header className='text-xl'>Learning Electron</header>

        <nav className='flex flex-col gap-2 mt-4'>
          <Link href='/' className='py-2 px-4 rounded-lg hover:bg-white/10 transition-colors '>Home</Link>
          <Link href='/fs' className='py-2 px-4 rounded-lg hover:bg-white/10 transition-colors '>Browsing FS</Link>
        </nav>
      </aside>
    </>
  )
}