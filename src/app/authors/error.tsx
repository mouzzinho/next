"use client";

import styles from './page.module.scss'

export default function Error() {
	return <section className={styles.error}>Failed to fetch products. Try again later</section>;
}
