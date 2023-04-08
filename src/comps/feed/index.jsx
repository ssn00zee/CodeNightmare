export default function Feed({
  posts
}){

  // console.log(posts)

  return (
    <div className="w-3/4 flex justify-center flex-col gap-6">
      <h1>Feed</h1>
      {posts &&
        posts.map((post) => {
          
          const { id, title, content } = post


          return (
            <div key={id} className='flex flex-col gap-4 w-64'>
              <h1>{title}</h1>
              <p>{content}</p>
            </div>
          );
        })
      }
    </div>
  )
}