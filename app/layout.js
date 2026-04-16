import GoogleAnalytics from '../components/GoogleAnalytics'
import SnipcartLoader from '../components/SnipcartLoader'
import '../styles/globals.css'

export const metadata = {
    title: 'Next.js',
    icons: [
        {
            type: 'image/png',
            sizes: '32x32',
            url: '/assets/favicons/favicon-32x32.png',
        },
        {
            type: 'image/png',
            sizes: '16x16',
            url: '/assets/favicons/favicon-16x16.png',
        },
    ],
}
const RootLayout = ({ children }) => (
    <html lang="en">
        <head>
            <link rel="preconnect" href="https://app.snipcart.com" />
            <link rel="preconnect" href="https://cdn.snipcart.com" />
            <link
                rel="stylesheet"
                href="https://cdn.snipcart.com/themes/v3.3.1/default/snipcart.css"
            />
        </head>
        <body>
            <GoogleAnalytics />
            {children}
            <SnipcartLoader />
        </body>
    </html>
)

export default RootLayout
