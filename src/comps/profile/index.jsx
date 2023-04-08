import Image from 'next/image'

export default function Profile({
  session
}){

  const { user } = session

  return (
    <div className="flex w-64 flex-col items-center justify-center h-64 gap-8 ">
      <Image src={user.image} width={150} height={150} className='rounded-full' alt='User Profile'/>
      <h1 className='text-3xl'>{user.name}</h1>
    </div>
  )
}