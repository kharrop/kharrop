import { PostPreview } from '../components/postPreview'
import { posts } from '../utils/getAllPosts'
import Image from 'next/image'

export default function IndexPage() {
  return (
    <>
      <Image
        src="/images/welcome-banner.svg"
        alt="Kelly participating in a panel at Squares Conference"
        layout="responsive"
        width={960}
        height={300}
      />
      <section id="intro" className="section-header mb-20">
        <h1 className="text-5xl mb-8 leading-snug sm:text-4xl sm:leading-normal">
          Buttons. Badges. <br /> Battlestar Galactica.
        </h1>
        <div className="grid gap-x-9 grid-flow-col sm:grid-flow-row">
          <p className="leading-loose">
            Hello! 👋 <span className="spacer" />
            I’m a UX Engineer specialized in crafting large-scale design system
            solutions so teams can easily get what they need to deliver
            personalized experiences.
          </p>
          <p className="leading-loose">
            I love helping engineers and designers speak the same language,
            while coaching teams to consider design-thinking principles and
            platform limitations.
          </p>
        </div>
      </section>
      <section className="mb-20 featured-post">
        <h4 className="mb-4">
          <span className="text-lg spacer">✨</span>Fresh post
        </h4>
        {posts.slice(0, 1).map(post => (
          <PostPreview key={post.link} post={post} />
        ))}
      </section>
      <section id="faq" className="mb-20">
        <h2>Frequently asked questions</h2>
        <dl>
          <dt>
            <h3>What is this site?</h3>
          </dt>
          <dd>
            <p>
              I've always wanted a space where I could implement a few
              experiments and learn from them. You can consider this site a
              constant work in progress.
            </p>
            <p>
              I'm currently playing around with{' '}
              <a href="https://nextjs.org/">NextJS</a> and using{' '}
              <a href="http://netlify.com">Netlify</a> to deploy.
            </p>
          </dd>

          <dt>
            <h3>What's a UX Engineer?</h3>
          </dt>
          <dd>
            <p>
              I'll probably make a blog post about this one day... In the
              meantime,{' '}
              <a href="https://twitter.com/EmmaBostian">Emma Bostian</a> wrote a{' '}
              <a href="https://dev.to/emmawedekind/ux-engineering-3hem">
                really great article
              </a>{' '}
              that I highly recommend checking out.
            </p>
          </dd>

          <dt>
            <h3>Did you know about [typo, bug, etc]?</h3>
          </dt>
          <dd>
            <p>
              Whoops, thanks for catching that. Feel free to{' '}
              <a href="https://github.com/kharrop/kharrop/issues/new">
                create an issue
              </a>
              .
            </p>
          </dd>
        </dl>
      </section>
      <section id="todo" className="mb-20">
        <h2>Coming soon ™️...</h2>
        <p>
          Since this site was thrown together at the last minute, here are some
          things to look forward to:
        </p>
        <div className="prose dark:text-gray-200">
          <ul>
            <li>Improved responsive styles</li>
            <li>Cleaned up CSS (it's a mess!)</li>
            <li>Converting more components to TypeScript</li>
            <li>Filled out side bar</li>
            <li>More content</li>
            <li>More automation</li>
            <li>More everything 😅</li>
          </ul>
        </div>
      </section>
    </>
  )
}
