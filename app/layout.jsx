import Navbar from '@components/Navbar';
import Provider from '@components/Provider';
import '@styles/globals.css';



export const metadata = {
    title: 'PromptlyHub',
    description: 'Expand your creative horizons with our selection of artificial intelligence prompts on PromptlyHub.',
    icons: {
        icon: '/assets/images/lightbulb.png',
    }
}

const RootLayout = ({ children }) => {
    return (
        <html lang='es'>
            <Provider>
                <body>
                    <div className='main'>
                        <div className='gradient' />
                    </div>

                    <main className='app'>
                        <Navbar />
                        {children}
                    </main>
                </body>
            </Provider>
        </html>
    )
}

export default RootLayout