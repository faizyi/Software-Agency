import React from 'react'
import Header from '../Header/Header'
import IntroSection from '../Main/Intro Section/IntroSection'
export default function Layout() {
  return (
    <div>
      <div>
      <Header/>
      </div>
      <main>
        <IntroSection/>
      </main>
    </div>
  )
}
