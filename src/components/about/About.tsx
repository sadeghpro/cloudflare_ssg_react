import { Helmet } from 'react-helmet-async';

export default function About() {
    return (
        <div>
            <Helmet>
                <title>about</title>

                <meta property="og:title" content='about' />
        <meta property="og:description" content='sadeghpro' />
            </Helmet>
            About
        </div>
    )
}
