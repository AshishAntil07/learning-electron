export default function TitleBar(){
  return (
    <>
      <div className='flex justify-end items-center gap-2 p-2'>
        <button className='h-6 w-6 aspect-square rounded-md grid place-items-center hover:bg-white/10 active:bg-white/20 transition-colors' onClick={() => {
          window.electron.minimize();
        }}>-</button>
        <button className='h-6 w-6 aspect-square rounded-md grid place-items-center hover:bg-white/10 active:bg-white/20 transition-colors' onClick={() => {
          window.electron.maximize();
        }}>□</button>
        <button className='h-6 w-6 aspect-square rounded-md grid place-items-center hover:bg-white/10 active:bg-white/20 transition-colors' onClick={() => {
          window.electron.close();
        }}>×</button>
      </div>
    </>
  )
}