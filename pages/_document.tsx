import NextDocument, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
    DocumentInitialProps,
} from 'next/document';

export default class Document extends NextDocument{
    static async getInitialProps(ctx: DocumentContext){
        const initialProps = await NextDocument.getInitialProps(ctx);
        return  { ...initialProps };
    }

    render(){
        return(
            <Html lang='en'>
                <Head/>
                <body className='bg-neutral-100 dark:bg-gray-800 dark:bg-gray-800 dark:text-white'>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}