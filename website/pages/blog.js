import { PostPreview } from '../components/postPreview'
import { posts } from '../utils/getAllPosts'

export default function IndexPage() {
  return (
    <>
      <h1>Blog</h1>
      <p>Two articles each month starting January 2021. Allegedly.</p>
      <section id="blog-list" className="mt-12">
        <ul>
          {posts.map(post => (
            <li className="mb-16">
              <PostPreview key={post.link} post={post} />
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
