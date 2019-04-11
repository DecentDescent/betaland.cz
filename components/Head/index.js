import Head from 'next/head';

export default ({title, description, ogImage}) => (
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title || 'Beta Land'}</title>
        <meta
            name="description"
            content={
                description ||
                'Greetings, fellow traveler! Looking for a flight ticket to Europe? You’re on the right place. We are JetCheater and we are travel hackers. We will find you the cheapest tickets available!'
            }
        />
        <meta property="og:title" content={title || 'Beta Land'} />
        <meta
            property="og:description"
            content={
                description ||
                'Greetings, fellow traveler! Looking for a flight ticket to Europe? You’re on the right place. We are JetCheater and we are travel hackers. We will find you the cheapest tickets available!'
            }
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@BetaLand" />
        <meta name="twitter:creator" content="@BetaLand" />
        <meta name="og:url" content="https://www.betaland.cz" />

        <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="../../static/favicon/apple-touch-icon.png"
        />
        <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="../../static/favicon/favicon-32x32.png"
        />
        <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="../../static/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="../../static/favicon/site.webmanifest" />
        <link rel="mask-icon" href="../../static/favicon/safari-pinned-tab.svg" color="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#ffffff" />
    </Head>
);
