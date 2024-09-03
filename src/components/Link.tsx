import { useNavigate } from 'react-router-dom';

export default function Link({ href, className='', children, ...props }: { href: string, className?: string, children: React.ReactNode }){
  const navigate = useNavigate();

  return (
    <>
      <div onClick={e => navigate(href)} className={className} {...props}>{ children }</div>
    </>
  )
}