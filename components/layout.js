import Alert from './alert'
import Footer from './footer'
import Meta from './meta'
import { Navbar } from './navbar'

export default function Layout({ preview, children }) {
  return (
    <>
    <Navbar />
      <Meta />
      <div className="min-h-screen">
        { preview ? <Alert preview={preview} /> : <> </> }
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}