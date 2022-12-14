import { Icon } from "components/Icon/Icon";
import Image from "next/image";
import { Comment } from "types";
import styles from "./CommentItem.module.css";

type Props = {
  comment: Comment;
  handleDelete: () => void;
  handleEdit: () => void;
  showActionsBox: boolean;
};

export function CommentItem({
  comment: { authorName, content, date, authorId },
  showActionsBox,
  handleDelete,
  handleEdit
}: Props) {
  return (
    <article className={styles.comment}>
      {showActionsBox ? (
        <nav className={styles.comment__actions}>
          <button onClick={handleEdit}>
            <Icon size="tiny" name="edit" />
          </button>
          <button onClick={handleDelete}>
            <Icon size="tiny" name="trash" />
          </button>
        </nav>
      ) : null}

      <header className={styles.commentHeader}>
        <span>
          <Image
            className={styles.commentHeader__avatar}
            src={`https://avatars.githubusercontent.com/u/${authorId}`}
            alt={`${authorName}'s user avatar`}
            title={`${authorName}'s user avatar`}
            width={50}
            height={50}
          />
        </span>
        <h3 className={styles.commentHeader__author}>{authorName}</h3>
      </header>
      <h4 className={styles.comment__date}>{date}</h4>
      <p className={styles.comment__content}>{content}</p>
    </article>
  );
}
