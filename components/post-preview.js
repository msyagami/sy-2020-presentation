import Avatar from './avatar'
import Date from './date'
import CoverImage from './cover-image'
import Link from 'next/link'
import Quarter from './quarter'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  quarter,
  slug,
}) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} url={coverImage.url} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="underlineEffect">{title}</a>
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <Date dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      <div className="my-1">
        <Avatar name={author.name} picture={author.picture} />
      </div>
      <div className="my-1">
        <Quarter name={quarter.name} picture={quarter.picture} />
      </div>
    </div>
  )
}
