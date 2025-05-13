import styles from "./page.module.scss";

import {IProduct} from "@/models/product.model";

import BackLink from "@/components/atoms/back-link";
import Link from "next/link";
import Image from "next/image";

export default async function Page() {

	const data = await fetch("https://api.alterpress.stage.alterpage.pl/products");
	const products: {items: IProduct[]} = await data.json();

	return (
		<section>
			<BackLink url={"/"} /> 
			<div className={styles.list}>
				{products.items.map((product) => (
					<Link key={`product-${product.productId}`} href={`/products/${product.productId}`} className={styles.product}>
						<Image className={styles.image} src={product.media[0].url} alt={product.media[0].url} width={100} height={150} />
						<p className={styles.name}>{product.name}</p>
					</Link>
				))}
			</div>
		</section>
	);
}