import type { NextPage } from 'next'
// import Nav from "../components/Nav/Nav"
import About from "../components/About/About"
import { Layout } from '../components/Layout/Layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <About/>
    </Layout>
  )
}

export default Home
