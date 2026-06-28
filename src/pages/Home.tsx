import { Head } from 'vite-react-ssg'
import CoreExpertise from '../components/CoreExpertise'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import OurServices from '../components/OurServices'

export default function Home() {
  return (
    <>
      <Head>
        <title>Flute Technologies — Custom Web & Mobile App Development</title>
        <meta
          name="description"
          content="Flute Technologies designs and builds high-quality, custom web and mobile apps for growing businesses. Specialising in web development, mobile apps, business automation, and AI solutions."
        />
      </Head>
      <Navbar />
      <Hero />
      <CoreExpertise />
      <OurServices />
      <Footer />
    </>
  )
}
