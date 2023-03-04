import React from 'react'
import styles from './style';
import {Navbar, Hero,Footer,Testimonials, Clients, Projects} from './components';

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={'${styles.paddingX} ${styles.flexCenter}'}>
        <div className={'${styles.boxWidth}'}>
          <Navbar></Navbar>
        </div>
      </div>

      <div className={'bg-primary ${styles.flexStart}'}>
        <div className={'${styles.boxWidth}'}>
          <Hero></Hero>
        </div>
      </div>

      <div className={'bg-primary ${styles.paddingX} ${styles.flexStart}'}>
        <div className={'${styles.boxWidth}'}>
          <Footer></Footer>
          <Testimonials></Testimonials>
          <Clients></Clients>
          <Projects></Projects>
        </div>
      </div>

    </div>
  )
}

export default App