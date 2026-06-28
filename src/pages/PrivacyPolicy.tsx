import ReactMarkdown from 'react-markdown'
import { Head } from 'vite-react-ssg'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import policyContent from '../../markdown/privacy-policy.md?raw'

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Flute Technologies</title>
        <meta
          name="description"
          content="Privacy Policy for Flute Technologies — learn how we collect, use, disclose, and protect your information."
        />
        <meta name="robots" content="index, follow" />
      </Head>
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 md:px-10 py-16">
        <article className="prose prose-slate max-w-none">
          <ReactMarkdown>{policyContent}</ReactMarkdown>
        </article>
      </main>
      <Footer />
    </>
  )
}
