import Link from 'next/link'
import Image from 'next/image'
import Button from '../button'

export default function Nav(){
  return (
    <nav className='absolute w-full flex justify-evenly p-4 bg-[#4766a7]'>
      <div>
        <Link href="/">
          <Image src='/facebook-logo.jpg' width={100} height={25} className='cursor-pointer'/>
        </Link>
      </div>
      <ul className='flex gap-10 text-white items-center'>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/profile">Profile</Link></li>
        <li><Link href="/friends">Friends</Link></li>
      <div className='flex item-center'>
        <Button name='Logout' className='text-white'/>
      </div>
      </ul>
    </nav>
  )
}