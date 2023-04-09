import Image from "next/image"

export default function Feed({
  posts
}){

  console.log(posts)

  return (
    <div className="w-[80%] flex justify-center flex-col gap-6 m-4">
      <h1 className="text-4xl">Feed</h1>
      <div className="border p-4 flex flex-col gap-4">
        {posts &&
          posts.map((post) => {
            
            const { id, title, content, createdAt, user } = post

            const time = () => {

              if (!createdAt) {
                return 'N/A'
              }

              const utcTimestamp = createdAt
              const date = new Date(utcTimestamp)
              const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true }
              const dateString = date.toLocaleDateString('en-US', options)

              return dateString.replace(/\s+/g, ' ')
            }

            return (
              <div key={id} className='flex flex-col gap-4 w-64 border p-4'>
                <h1 className="text-3xl">{title}</h1>
                <p>{content}</p>
                <div className="flex flex-col justify-center  gap-1">
                  {
                    user &&  (
                      <>
                        <Image src={user.image} height={30} width={30}/>
                        <p>{user.name}</p>
                      </>
                    )
                  }
                </div>
                <p>{time()}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}