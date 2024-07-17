import Head from 'next/head'
import Header from '../components/Header'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => (
    <div>
        <Head>
            <title>Yuriy Zhvirblis - Personal Website</title>
            <meta name="description" content="Yuriy Zhvirblis' personal website" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <main>
            <About />
            <Projects />
            <Contact />
        </main>
        <Footer />
    </div>
)

export default Home
