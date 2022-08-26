import type { NextPage } from 'next'
import About from "../components/About/About"
import { Layout } from '../components/Layout/Layout'
import SkillsSection from '../components/SkillsSection/SkillsSection'

const Home: NextPage = () => {
  return (
    <Layout title={'Home | Tomas Borquez'}>
      <About/>
      <SkillsSection/>
    </Layout>
  )
}

export default Home
