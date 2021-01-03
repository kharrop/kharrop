import Link from 'next/link'

export const PostPreview = ({ post }) => {
  const {
    link,
    module: { meta }
  } = post

  return (
    <article>
      <Link href={'/blog' + link}>
        <a className="post-preview grid gap-x-4 grid-flow-col">
          <div className="content">
            <h2>{meta.title}</h2>
            <div className="description">{meta.description}</div>

            <div className="notes">
              <time>{meta.date}</time> • <span>{meta.readTime} min read</span>{' '}
            </div>
          </div>
        </a>
      </Link>
    </article>
  )
}
