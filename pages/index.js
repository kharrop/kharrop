import { useEffect, useState } from 'react'
import { PostPreview } from '../components/postPreview'
import { posts } from '../utils/getAllPosts'
import { useTheme } from 'next-themes'

export default function IndexPage() {
  const [isMounted, setIsMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  useEffect(() => {
    setIsMounted(true)
  }, [])
  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === 'light' ? 'dark' : 'light')
    }
  }
  return (
    <>
      <section></section>
      {posts.slice(0, 1).map(post => (
        <PostPreview key={post.link} post={post} />
      ))}
      <button onClick={switchTheme}>Change theme</button>
    </>
  )
}

// My blog: https://www.ibrahima-ndaw.com/
