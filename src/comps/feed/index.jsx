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
            
            const { id, title, content, createdAt } = post

            const time = () => {
              const utcTimestamp = createdAt
              const date = new Date(utcTimestamp)
              const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' }
              const dateString = date.toLocaleDateString('en-US', options)

              return dateString
            }

            return (
              <div key={id} className='flex flex-col gap-4 w-64 border p-4'>
                <h1 className="text-3xl">{title}</h1>
                <p>{content}</p>
                <p>{time()}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}