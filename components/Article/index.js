import classNames from 'classnames';
import styles from './Article.scss';
import Link from 'next/link';

export default props => {
    const post = props.post;

    return (
        <section
            className={classNames({
                [styles.article]: true,
                [styles['article--inactive']]: props.scrollOff,
            })}
        >
            <div className={styles.article__hero} />
            <article className={styles.article__container}>
                <div className={styles.article__content}>
                    <h1>Headline</h1>
                    <h2>Dedications</h2>
                    <p>Content</p>
                    <hr />
                    <h3>
                        Moodsong:
                        <br />
                        <a>Song</a>
                    </h3>
                    <hr />
                    <div className={styles.article__nav}>
                        <a>
                            <svg viewBox="0 0 64 64">
                                <g
                                    stroke="none"
                                    strokeWidth="1"
                                    fill="none"
                                    fillRule="evenodd"
                                    strokeLinecap="round"
                                >
                                    <g
                                        transform="translate(32.500000, 32.000000) rotate(-180.000000) translate(-32.500000, -32.000000) translate(15.000000, 15.000000)"
                                        stroke="#000000"
                                        strokeWidth="2"
                                    >
                                        <path
                                            d="M5,5 L29,29"
                                            transform="translate(17.000000, 17.000000) rotate(-45.000000) translate(-17.000000, -17.000000) "
                                        />
                                        <path
                                            d="M22,17 L34,29"
                                            transform="translate(28.000000, 23.000000) scale(-1, 1) translate(-28.000000, -23.000000) "
                                        />
                                        <path
                                            d="M22.029438,17 L34,5"
                                            transform="translate(28.000000, 11.000000) scale(-1, 1) translate(-28.000000, -11.000000) "
                                        />
                                    </g>
                                </g>
                            </svg>
                            <span>Předchozí</span>
                        </a>
                        <a>
                            <span>Archív</span>
                        </a>
                        <a className={styles.disabled}>
                            <span>Další</span>
                            <svg viewBox="0 0 64 64">
                                <g
                                    stroke="none"
                                    strokeWidth="1"
                                    fill="none"
                                    fillRule="evenodd"
                                    strokeLinecap="round"
                                >
                                    <path
                                        d="M20,20 L44,44"
                                        stroke="#000000"
                                        strokeWidth="2"
                                        transform="translate(32.000000, 32.000000) rotate(-45.000000) translate(-32.000000, -32.000000) "
                                    />
                                    <path
                                        d="M37,32 L49,44"
                                        stroke="#000000"
                                        strokeWidth="2"
                                        transform="translate(43.000000, 38.000000) scale(-1, 1) translate(-43.000000, -38.000000) "
                                    />
                                    <path
                                        d="M37.029438,32 L49,20"
                                        stroke="#000000"
                                        strokeWidth="2"
                                        transform="translate(43.000000, 26.000000) scale(-1, 1) translate(-43.000000, -26.000000) "
                                    />
                                </g>
                            </svg>
                        </a>
                    </div>
                </div>
            </article>
        </section>
    );
};
