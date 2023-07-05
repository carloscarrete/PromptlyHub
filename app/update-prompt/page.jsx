'use client'

import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

import Form from '@components/Form'

const EditPrompt = () => {

  const searchParams = useSearchParams();
  const promptId = searchParams.get('id');
  const router = useRouter();

  const [submit, setSubmit] = useState(false);
  const [post, setPost] = useState({
    prompt: '',
    tag: ''
  })

  useEffect(() => {
    const getPromptDetails = async () => {
        const res = await fetch(`/api/prompt/${promptId}`);
        const data = await res.json();

        setPost({
            ...post,
            prompt: data.prompt,
            tag: data.tag
        })
    }
    if(promptId) getPromptDetails();
  }, [promptId])
  

   const updatePrompt = async (e) => {
    e.preventDefault();
    setSubmit(true);

    if(!promptId) return alert('Prompt ID not found');

    try {
      const res = await fetch(`/api/prompt/${promptId}`, {
        method: 'PATCH',
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag
        })      
      })

      if(res.ok){
        router.push('/')
      }

    } catch (error) {
      console.log(error)
    } finally {
      setSubmit(false);
    }
  } 

  return (
    <Form
      type="Edit"
      post={post}
      setPost={setPost}
      submit={submit}
      handleSubmit={updatePrompt}
    />
  )
}

export default EditPrompt