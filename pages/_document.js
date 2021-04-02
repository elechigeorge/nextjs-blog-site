import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import GoogleFonts from 'next-google-fonts';
import { ColorModeScript } from '@chakra-ui/react';


export default class MyComponent extends NextDocument {
    render() {
        return (
            <Html lang='en'>
                {/* <GoogleFonts href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;500&display=swap" /> */}
                <Head />
                <body>
                    <ColorModeScript />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}