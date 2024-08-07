import Link from "next/link";
import Avatar from "./Avatar";
import styles from "./Bio.module.css";

export const description =
  "Philipp Spiess is an engineer at Tailwind Labs with a focus on Web technologoies. Previous roles include: Engineering at Sourcegraph, UI Engineer at Meta, curator of " +
  "This Week in React, React DOM team member, and Team Lead at PSPDFKit.";

interface Props {
  direction?: "row" | "column";
}
export default function Bio({ direction }: Props) {
  return (
    <div className={`${styles.bio} bio`} style={{ flexDirection: direction }}>
      <div className={styles.avatar}>
        <Link href="/" className={styles.avatarLink}>
          <Avatar width={100} />
        </Link>
      </div>
      <div>
        <div className={styles.title}>
          Philipp Spiess <small className={styles.ipa}>[ˈʃpiːs]</small>
        </div>

        <p className={styles.intro}>
          Engineer at{" "}
          <Link
            href="https://tailwindcss.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tailwind Labs
          </Link>
          .<br />
          Prev: Engineer at{" "}
          <Link
            href="https://sourcegraph.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sourcegraph
          </Link>{" "}
          and{" "}
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Meta
          </Link>
          , curator of{" "}
          <Link
            href="https://this-week-in-react.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            This Week in React
          </Link>
          ,{" "}
          <Link
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React DOM
          </Link>{" "}
          team member, and Team Lead at{" "}
          <Link
            href="https://pspdfkit.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            PSPDFKit
          </Link>
          .
        </p>
        <ul className={styles.list}>
          <li>
            <Link
              href="https://twitter.com/philippspiess"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/philipp-spiess"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/philipp-spiess/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
