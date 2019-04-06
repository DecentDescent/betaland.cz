import React, {useState} from 'react';
import Link from 'next/link';
import Head from '../Head';
import Navigation from '../Navigation';
import Header from '../Header';
import Footer from '../Footer';
import Article from '../Article';
import quotes from '../../static/quotes.js';
import posts from '../../static/posts.js';
import styles from './Page.scss';

function Page() {
    const [nav, setNav] = useState(false);
    const [quote, setQuote] = useState(quotes[Math.floor(Math.random() * quotes.length)]);
    const [post, setPost] = useState(posts[0]);
    return (
        <div>
            <Head />
            <Header />
            <Navigation
                opened={nav}
                quote={quote.content}
                quoteAuthor={quote.author}
                onClose={() => setNav(false)}
                activePage={'index'}
            />
            <Footer
                toggleAction={() => (
                    setNav(!nav), setQuote(quotes[Math.floor(Math.random() * quotes.length)])
                )}
            />
            <Article currentPost={post} scrollOff={nav} />
        </div>
    );
}

export default Page;
