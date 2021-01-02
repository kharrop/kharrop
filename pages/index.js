import { PostPreview } from '../components/postPreview'
import { posts } from '../utils/getAllPosts'

export default function IndexPage() {
  return (
    <>
      <article>
        <section id="intro" className="section-header mb-20">
          <h1>Kelly Harrop is tinkering with design systems at Intuit.</h1>
          <div className="grid gap-x-9 grid-flow-col auto-colos-max">
            <p>
              Hello! 👋 <span className="spacer" />
              I’m a UX Engineer specialized in crafting large-scale design
              system solutions so that teams can easily get what they need to
              deliver personalized experiences.
            </p>
            <p>
              I love helping engineers and designers speak the same language,
              while coaching teams to consider design-thinking principles and
              platform limitations.
            </p>
          </div>
        </section>

        {posts.slice(0, 1).map(post => (
          <PostPreview key={post.link} post={post} />
        ))}
      </article>
    </>
  )
}
