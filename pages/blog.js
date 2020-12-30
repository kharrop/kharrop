import { PostPreview } from '../components/postPreview'
import { posts } from '../utils/getAllPosts'

export default function IndexPage() {
  return (
    <>
      {posts.map(post => (
        <PostPreview key={post.link} post={post} />
      ))}
    </>
  )
}
