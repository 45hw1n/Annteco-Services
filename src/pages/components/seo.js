import React from "react"
import { Helmet } from "react-helmet"
// import Favicon from "./../../assets/images/favicon.png"

function Seo(props) {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{props.title}</title>
                <meta name="description" content={props.description} />
                <meta name="keywords" content={props.keywords} />
                <meta property="og:title" content={props.title} />
                <meta property="og:description" content={props.description} />
                {!!props.ogImage ? (
                    <meta property="og:image" content={props.image} />
                ) : null}
                {/* {!!props.ogType ? (
                    <meta property="og:type" content={props.ogType} />
                ) : null} */}
                <link rel="icon" type="image/png" sizes="16x16" href="https://media.graphcms.com/DvJPHB6WQq2CDPE5JJbE" />
                <script src="//code.tidio.co/lsuc0jtknw1h6n9ldbw0vqnotoqj3tcq.js" async></script>
            </Helmet>
        </>
    )
}

export default Seo
