import React, {useState} from 'react';
import Head from '../Head';
import Navigation from '../Navigation';
import Header from '../Header';
import Footer from '../Footer';
import Article from '../Article';
import About from '../About';
import styles from './Page.scss';

export default props => {
    const [nav, setNav] = useState(false);
    return (
        <div>
            <Head />
            <Header />
            {nav ? <Navigation onClose={() => setNav(false)} /> : null}
            <Footer toggleAction={() => setNav(true)} />
            {props.type === 'article' ? (
                <Article scrollOff={props.scrollOff} scrollOff={nav} />
            ) : null}
            {props.type === 'about' ? <About scrollOff={props.scrollOff} scrollOff={nav} /> : null}
        </div>
    );
};
