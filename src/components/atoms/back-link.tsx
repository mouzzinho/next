import Link from "next/link";
import React from "react";

import styles from "./back-link.module.scss";
import BackIcon from '../../../public/back.svg'

interface IBackLinkProps {
  url: string;
}

const BackLink: React.FC<IBackLinkProps> = ({ url }) => {
	return (
		<Link href={url} className={styles.link}>
			<BackIcon /> Back
		</Link>
	);
};

export default BackLink;
