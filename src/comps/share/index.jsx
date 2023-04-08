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
        <input type="text" placeholder='title' onChange={(e) => setTitle(e.target.value)}/>
        <textarea placeholder='content' value={content} onChange={(e) => setContent(e.target.value)} className='resize-none' />
        <Button onClick={handleSubmit} name='Share' className='text-black'/>
      </form>
    </div>
  )
}