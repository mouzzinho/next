import Image from "next/image";

import styles from './page.module.scss';

import { IPost } from "@/models/post.model";

import BackLink from "@/components/atoms/back-link";

export default async function Page({params}: { params: Promise<{ id: string}> }) {
	const {id} = await params;

	const data = await fetch(`https://api.alterpress.stage.alterpage.pl/posts/${id}`);
	const post = await data.json();

	return (
		<section>
			<BackLink url={"/posts"} />
			<div className={styles.post}>
				<Image className={styles.image} src={`${post.media[0].url}`} alt={post.media[0].alt} />
				<p className={styles.title}>Title: {post.title}</p>
				<p>Id: {post.postId}</p>
			</div>

		</section>
	);
}

export async function generateStaticParams() {
	const data = await fetch(
		"https://api.alterpress.stage.alterpage.pl/posts/build",
	);
	const posts = await data.json();
	return posts.items.map((post: IPost) => ({id: post.postId.toString()}))
}
