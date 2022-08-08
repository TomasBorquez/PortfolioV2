import type { NextPage } from 'next'
import About from "../components/About/About"
import { Layout } from '../components/Layout/Layout'

const Home: NextPage = () => {
  return (
    <Layout title={'Home | Tomas Borquez'}>
      <About/>
    </Layout>
  )
}

export default Home
