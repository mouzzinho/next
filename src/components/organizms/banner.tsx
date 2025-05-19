import React from 'react'

import styles from './banner.module.scss'

const Banner = () => {
    return (
        <div
            className={styles.container}
            style={{ background: getRandomColor() || '#000' }}
        >
            <p></p>
        </div>
    )
}

function getRandomColor() {
    const letters = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}

export default Banner
