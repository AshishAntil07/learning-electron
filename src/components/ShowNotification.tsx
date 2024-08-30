

export default function ShowNotification(){

  function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const notification = formData.get('notification')?.toString();
    const description = formData.get('description')?.toString();
    if(notification) window.electron.showNotification(notification, description, 1000);
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='flex flex-col items-start'>
        <label htmlFor={'title'}>Enter a notification title</label>
        <input id='title' name='notification' className='bg-white/10 border-2 border-white/30 rounded-lg px-4 py-2 outline-none' />

        <label htmlFor={'desc'} className='mt-2'>And here a description</label>
        <input id={'desc'} name='description' className='bg-white/10 border-2 border-white/30 rounded-lg px-4 py-2 outline-none' />

        <button className='bg-blue-700 outline-none mt-2 rounded-lg border-none py-2 px-3'>Submit</button>
      </form>
    </>
  )
}