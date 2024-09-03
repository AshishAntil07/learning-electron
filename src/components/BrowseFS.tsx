import { useRef, useState } from 'react';

export default function BrowseFS() {

  const [isLoading, setLoading] = useState(false);

  const filePathRef = useRef<HTMLDivElement>(null);
  const dirPathRef = useRef<HTMLDivElement>(null);
  const dirPathMapRef = useRef<HTMLDivElement>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    setLoading(true);

    const { filePath, dirPath, dirPathMap } = Object.fromEntries(formData.entries());

    window.electron.receive('C-getFile', (_e, file) => {
      setLoading(false);
      
      if (!filePathRef.current) return;
      filePathRef.current.innerHTML = `<p>${JSON.stringify(file)}</p>`;
    }, { once: true });
    window.electron.receive('C-getFiles', (_e, files) => {
      setLoading(false);
      
      if (!dirPathRef.current) return;
      dirPathRef.current.innerHTML = `<p>${JSON.stringify(files)}</p>`;
    }, { once: true });
    window.electron.receive('C-getDirectoryTree', (_e, dirMap) => {
      setLoading(false);
      
      if (!dirPathMapRef.current) return;
      dirPathMapRef.current.innerHTML = `<p>${JSON.stringify(dirMap)}</p>`;
    }, { once: true });

    window.electron.send('getFile', filePath);
    window.electron.send('getFiles', dirPath);
    window.electron.send('getDirectoryTree', dirPathMap);
  }

  return (
    <>
      <form onSubmit={onSubmit} className='flex flex-col items-start'>
        <label htmlFor='filePath'>File Path:</label>
        <input className='bg-white/10 mb-3 border-2 border-white/30 rounded-lg px-4 py-2 outline-none' id='filePath' type='text' name='filePath' />

        <div ref={filePathRef}></div>

        <label htmlFor='dirPath'>Direcotry Path:</label>
        <input className='bg-white/10 mb-3 border-2 border-white/30 rounded-lg px-4 py-2 outline-none' id='dirPath' type='text' name='dirPath' />

        <div ref={dirPathRef}></div>

        <label htmlFor='dirPathMap'>Directory Path to Map a FS Tree:</label>
        <input className='bg-white/10 mb-3 border-2 border-white/30 rounded-lg px-4 py-2 outline-none' id='dirPathMap' type='text' name='dirPathMap' />

        <div ref={dirPathMapRef}></div>

        <button type='submit' className='bg-blue-700 outline-none mt-2 rounded-lg border-none py-2 px-3'>{isLoading ? 'Fetching' : 'Browse'}</button>
      </form>
    </>
  )
}