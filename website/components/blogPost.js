import { PostHeader } from './postHeader'

export default function BlogPost({ children, meta }) {
  return (
    <>
      <PostHeader meta={meta} isBlogPost />

      <article class="prose dark:prose-dark">{children}</article>
    </>
  )
}
