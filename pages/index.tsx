import type { NextPage } from 'next'
import Nav from "../components/Nav/Nav"
import About from "../components/About/About"
// import s from '../styles/Home.module.sass'

const Home: NextPage = () => {
  return (
    <div>
      <Nav/>
      <About/>
    </div>
  )
}

export default Home
