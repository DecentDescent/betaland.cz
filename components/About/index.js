import classNames from 'classnames';
import styles from './About.scss';
import Link from 'next/link';

export default props => (
    <section
        className={classNames({
            [styles.about]: true,
            [styles['about--inactive']]: props.scrollOff,
        })}
    >
        <div className={styles.about__hero} />
        <article className={styles.about__container}>
            <div className={styles.about__content}>
                <h1>O blogu</h1>
                <p>
                    Excepteur anim ex amet excepteur occaecat veniam magna veniam id cillum.
                    Pariatur consequat et consectetur sint commodo anim proident elit consectetur
                    dolore ea. Irure reprehenderit proident aliqua consectetur magna deserunt.
                    Pariatur deserunt sunt ut ut enim anim sint minim ad. Nisi tempor velit anim do
                    ipsum ipsum voluptate deserunt cillum est Lorem in nostrud enim.
                </p>

                <hr />

                <h3>Texty</h3>
                <p>Jan Rádl</p>

                <hr />

                <h3>Ilustrace</h3>
                <p>Maja Chabirova</p>

                <hr />

                <h3>Beta Land</h3>
                <p>
                    Jan Rádl (kytara, klavír, bicí, zpěv)
                    <br />
                    Martin Forgáč (kytara, zpěv)
                    <br />
                    Miloš Beníšek Červený (basová kytara, kytara)
                    <br />a hosté
                </p>

                <hr />

                <h3>Poděkování</h3>
                <p>
                    Michalovi "Márdimu" Maredovi
                    <br />
                    Jitce Havlasové
                    <br />
                    Štěpánce Silné
                    <br />
                    Tomášovi Randusovi
                </p>
                <p>a</p>
                <p>všem čtenářům a posluchačům</p>

                <hr />

                <small>
                    Není-li uvedeno jinak, obsah těchto stránek spadá pod
                    <br />
                    Creative Commons Attribution 4.0 International license
                    <br />
                    <br />
                    Na stránkách jsou použity fotografie Wikipedia Commons, volná díla a fotografie
                    následujících autorů a organizací:
                    <br />
                    <br />
                    Petr Novák, Wikipedia
                    <br />
                    US National Archives
                    <br />
                    NASA
                    <br />
                    Ukrposhta
                    <br />
                    White House
                </small>
            </div>
        </article>
    </section>
);
