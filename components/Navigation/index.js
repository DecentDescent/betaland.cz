import React, {useState} from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import styles from './Navigation.scss';
import quotes from '../../static/data/quotes/quotes.js';

export default props => {
    let [navContent, setNavContent] = useState(quotes[Math.floor(Math.random() * quotes.length)]);

    return (
        <section
            className={styles.navigation}
            style={{
                backgroundImage: 'url(' + navContent.image + ')',
            }}
        >
            <div className={styles.navigation__container}>
                <nav className={styles.navigation__menu} role="navigation">
                    <Link href="/">
                        <a>
                            <div className={styles.logo}>
                                <svg viewBox="0 0 64 64">
                                    <path
                                        d="M29.9587859,24.0955216 C28.9587966,24.0517325 27.9112323,23.8215437 26.8342494,23.2249079 C24.2541082,21.7955444 17.7479731,21.0003158 15.8064766,21.0000062 C10.3375511,20.9987679 4.95344995,21.1822825 0,21.9383343 L0.164449345,25.6432794 C1.58026998,26.1606761 2.01165795,27.1271426 2.20555482,28.2938144 C3.09925163,33.671152 4.35194165,38.2441071 6.68437862,40.1244874 C8.34085997,41.4599205 10.4222042,42.623497 14.3167583,42.5041649 C18.4654965,42.3770443 22.8728968,41.2372478 25.0349808,38.741179 C26.9331079,36.5498419 28.9129829,33.1784418 29.6298877,29.4933266 C29.9000054,28.1048176 30.8826716,27.4909151 31.9998911,27.4909151 C33.1171079,27.4909151 34.0997768,28.1048176 34.3698945,29.4933266 C35.0867966,33.1784418 37.0666743,36.5498419 38.9648013,38.741179 C41.1268854,41.2372478 45.5342857,42.3770443 49.6830212,42.5041649 C53.5775771,42.623497 55.6589217,41.4599205 57.315403,40.1244874 C59.64784,38.2441071 60.9005297,33.671152 61.7942252,28.2938144 C61.9881237,27.1271426 62.4195106,26.1606761 63.8353331,25.6432794 L63.9997808,21.9383343 C59.0463314,21.1822825 53.6622292,20.998768 48.1933055,21.0000062 C46.2518064,21.0003157 39.7456713,21.7955444 37.1655328,23.2249079 C36.0885499,23.8215437 35.0409829,24.0517325 34.0409963,24.0955216 C32.6815637,24.1550515 31.3182185,24.1550515 29.9587859,24.0955216 Z M14.0362286,22.8669889 C15.2443576,22.8648221 16.467844,22.8940438 17.6250904,22.8766469 C18.6264995,22.8616027 25.52592,22.6733521 26.6407785,26.8040821 C27.7034259,30.741361 26.1271785,35.7470756 22.7713842,38.5767141 C20.4331415,40.548347 11.2312234,42.6879641 7.62270682,38.4606323 C5.14946097,35.5632577 4.62619213,32.9344283 4.36274205,29.290168 C4.19584726,26.9815635 4.78986756,24.626025 8.56103476,23.4280356 C10.0594097,22.9520444 12.0226756,22.8704714 14.0362286,22.8669735 L14.0362286,22.8669889 Z M45.7459133,22.8669889 C46.0325876,22.8654411 46.2495126,22.8747896 46.3746891,22.8766469 C47.5319355,22.8940438 48.7554245,22.8648221 49.9635536,22.8669889 C51.9771066,22.8704869 53.9403711,22.9520599 55.4387455,23.4280511 C59.2099133,24.6260403 59.8039328,26.9815789 59.637038,29.2901834 C59.3735892,32.9344439 58.8503193,35.5632733 56.3770743,38.4606479 C52.768558,42.6879797 43.5666407,40.5483626 41.2283953,38.5767297 C37.8726037,35.7470912 36.2963536,30.7413766 37.359001,26.8040977 C38.3345035,23.1897088 43.7392148,22.8773527 45.7459133,22.8669889 L45.7459133,22.8669889 Z"
                                        fillRule="nonzero"
                                    />
                                </svg>
                            </div>
                        </a>
                    </Link>
                    <ul>
                        <li>
                            <Link href="/index">
                                <a>Nejnovější</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/nahodne">
                                <a>Náhodný</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/playlist">
                                <a>Playlist</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/o-blogu">
                                <a>O blogu</a>
                            </Link>
                        </li>
                    </ul>
                    <div className={styles.close} onClick={props.onClose}>
                        <svg viewBox="0 0 64 64">
                            <path d="M20,20 L44,44" strokeWidth="2" strokeLinecap="round" />
                            <path
                                d="M20,20 L44,44"
                                strokeWidth="2"
                                strokeLinecap="round"
                                transform="translate(32.000000, 32.000000) scale(-1, 1) translate(-32.000000, -32.000000) "
                            />
                        </svg>
                    </div>
                </nav>
            </div>
            <article className={styles.navigation__quote}>
                <blockquote>
                    {navContent.content}
                    <cite>— {navContent.author}</cite>
                </blockquote>
            </article>
        </section>
    );
};
