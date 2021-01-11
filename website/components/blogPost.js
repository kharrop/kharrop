import { PostHeader } from './postHeader'

export default function BlogPost({ children, meta }) {
  return (
    <>
      <PostHeader meta={meta} isBlogPost />

      <article className="prose dark:prose-dark mb-20">{children}</article>
    </>
  )
}
