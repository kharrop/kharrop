import Link from 'next/link'
import { PostHeader } from './postHeader'

export const PostPreview = ({ post }) => {
  const {
    link,
    module: { meta }
  } = post

  return (
    <article>
      <PostHeader meta={meta} />
      <Link href={'/blog' + link}>
        <a>Read more &rarr;</a>
      </Link>
      <style jsx>
        {`
          article {
            margin-bottom: 3rem;
          }
        `}
      </style>
    </article>
  )
}
