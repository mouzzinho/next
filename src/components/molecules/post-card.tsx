import React from "react";
import Link from "next/link";

import styles from "./post-card.module.scss";

import { IPost } from "@/models/post.model";

interface IPostCardProps {
  post: IPost;
}

const PostCard: React.FC<IPostCardProps> = ({ post }) => {
	return ( 
		<Link href={`/posts/${post.postId}`} className={styles.container}>
			<p>{post.title}</p>
		</Link>
	);
};

export default PostCard;
