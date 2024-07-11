import Nav from '@components/Nav'
import Provider from '@components/Provider'
import '@styles/globals.css'
import { Suspense } from 'react'

export const metaData = {
    title : 'Promtopia',
    description : 'Discover & Share AI Prompts.'
}

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <Suspense>
                <Provider>
                    <div className="main">
                        <div className="gradient"></div>
                    </div>
                    <main className="app">
                        <Nav/>
                        {children}
                    </main>
                </Provider>
            </Suspense>
        </body>
    </html>
  )
}

export default RootLayout