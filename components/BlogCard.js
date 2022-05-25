import Link from "next/link";
import styles from "../styles/BlogCard.module.css";

export default function BlogPost({
    title,
    author,
    coverPhoto,
    datePublished,
    slug,
}) {
    //return some JSX
    return (
        <div className={styles.card}>
            <Link href={"/posts/" + slug}>
                <div className={styles.imgContainer}>
                    <img src={coverPhoto.url} alt="" />
                </div>
            </Link>
            <div className={styles.text}>
                <h2>{title}</h2>
                <div className={styles.details}>
                    <div style={styles.author}>
                        <img src={author.avatar.url} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}