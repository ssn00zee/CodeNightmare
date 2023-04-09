import Image from "next/image"

export default function Feed({
  posts
}){

  // console.log(posts)

  return (
    <div className="w-[80%] flex justify-center flex-col gap-6 m-4">
      <h1 className="text-4xl">Feed</h1>
      <div className="border p-4 flex flex-col gap-4">
        {posts &&
          posts.map((post) => {
            
            console.log(post, 'post')
            const { id, title, content, createdAt, user } = post

            const time = (createdAt) => {

              // if (!createdAt && post.statusText === 'Created') {
              //   console.log(post, 'post')
              // } 
              // console.log(createdAt, 'createdAt')

              if (!createdAt) {
                return 'just now'
              }

              const utcTimestamp = createdAt
              const date = new Date(utcTimestamp)
              const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true }
              const dateString = date.toLocaleDateString('en-US', options)

              return dateString.replace(/\s+/g, ' ')
            }

            return (
              <div key={id} className='flex flex-col gap-4 w-full border p-4'>
                <h1 className="text-3xl">{title}</h1>
                <p>{content}</p>
                <p>{time(createdAt)}</p>
                <div className="flex flex-col justify-center items-end w-full gap-1">
                  {
                    user &&  (
                      <div className="w-36 flex flex-col items-center">
                        <Image src={user.image} height={30} width={30} className='object-contain' alt={user.name}/>
                        <p>{user.name}</p>
                      </div>
                    )
                  }
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}