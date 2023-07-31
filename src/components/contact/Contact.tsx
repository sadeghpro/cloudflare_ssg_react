import { Helmet } from "react-helmet-async";

export default function Contact() {
    return (
        <div>
            <Helmet>
                <title>Contact</title>
                <meta property="og:title" content='contact' />
        <meta property="og:description" content='call us' />
            </Helmet>
            Contact
        </div>
    )
}
