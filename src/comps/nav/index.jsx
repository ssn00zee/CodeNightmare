import Link from 'next/link'
import Image from 'next/image'
import Button from '../button'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useRouter } from 'next/router'

export default function Nav(){
  
  const r = useRouter()

  const { data: session, status } = useSession()
  
    if (session) {
      return (
      <nav className='absolute w-full flex justify-evenly p-4 bg-[#4766a7]'>
        <div>
          <Link href="/">
            <Image src='/facebook-logo.jpg' width={100} height={25} className='cursor-pointer'/>
          </Link>
        </div>
        <ul className='flex gap-10 text-white items-center'>
          <li onClick={() => r.push('/')}>Home</li>
          <li onClick={() => r.push('/profile')}>Profile</li>
          <li onClick={() => r.push('/friends')}>Friends</li>
        <div className='flex item-center'>
          <Button onClick={() => signOut()} name='Logout' className='text-white'/>
        </div>
        </ul>
      </nav>

    )}

    return (
      <nav className='absolute w-full flex justify-evenly p-4 bg-[#4766a7]'>
        <div className='flex w-full justify-evenly'>
          <Link href="/">
            <Image src='/facebook-logo.jpg' width={100} height={25} className='cursor-pointer'/>
          </Link>
          
          <Button onClick={() => signIn()} name='Sign In' className='text-white'/>


        </div>
      </nav>
    )

  
}