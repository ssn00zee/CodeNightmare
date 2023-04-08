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
            
            const { id, title, content } = post


            return (
              <div key={id} className='flex flex-col gap-4 w-64 border p-4'>
                <h1 className="text-3xl">{title}</h1>
                <p>{content}</p>
              </div>
            );
          })
        }
      </div>
    </div>
  )
}