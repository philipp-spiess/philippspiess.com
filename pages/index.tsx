import { getPosts } from "../lib/parser/posts"
import { Post } from "../lib/parser/post"
import Bio, { description } from "../lib/Bio"
import Head from "next/head"
import PostPreview from "../lib/PostPreview"
import styles from "./index.module.css"
import Notes from "../lib/Notes"
import { getNotes, Note } from "../lib/parser/notes"

export async function getStaticProps() {
  const [posts, notes] = await Promise.all([getPosts(), getNotes()])
  return {
    props: {
      posts,
      notes,
    },
    revalidate: 5 * 60,
  }
}

interface Props {
  posts: Post[]
  notes: Note[]
}
export default function Home({ posts, notes }: Props) {
  return (
    <>
      <Head>
        <title>Philipp Spiess</title>
        <meta property="og:title" content="Philipp Spiess" />
        <meta property="og:description" content={description} />
      </Head>

      <div className={styles.container}>
        <aside className={styles.left}>
          <Bio />
        </aside>

        <main className={styles.right}>
          <section>
            <h2 className={styles.sectionTitle}>Notes</h2>
            <p>
              A collection of my random thoughts. This is a place for me to
              write down raw ideas, so don’t expect a high bar for quality.
            </p>
            <Notes notes={notes} />
          </section>

          <section>
            <h2 className={styles.sectionTitle}>Posts</h2>
            {posts.map((post) => (
              <PostPreview key={post.id} post={post} />
            ))}
          </section>
        </main>
      </div>
    </>
  )
}
