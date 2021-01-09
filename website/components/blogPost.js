import { PostHeader } from './postHeader'

export default function BlogPost({ children, meta }) {
  return (
    <>
      <PostHeader meta={meta} isBlogPost />
      <article>{children}</article>
    </>
  )
}
