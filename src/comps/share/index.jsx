import axios from "axios"
import { useState } from "react"
import Button from "../button"

export default function Share({
  messageData
}){

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!title.trim() || !content.trim()) {
      console.log("Title and content fields are required")
      return
    }

    try {

      console.log({title, content})
      const res = await axios.post('/api/post', { title, content })
      messageData(res)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className="flex flex-col w-128 gap-4 w-[512px] h-64">
      <h1>Share</h1>
      <form method="POST" className="flex flex-col gap-8">
        <input required={true} type="text" placeholder='title' onChange={(e) => setTitle(e.target.value)} className='p-2 border'/>
        <textarea required placeholder='content' value={content} onChange={(e) => setContent(e.target.value)} className='resize-none p-2 border' />
        <div className="w-full flex justify-end p-4">
          <Button onClick={handleSubmit} name='Share' className='text-white border w-24 py-2 rounded-md bg-[#4766a7] flex justify-center items-center'/>
        </div>
      </form>
    </div>
  )
}