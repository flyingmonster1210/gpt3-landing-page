import React from 'react'
import { Article, Brand, CTA, Feature, Navbar } from './components'
import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from './containers/index'

const App = () => {
  return (
    <div>
      <Navbar />
      <Brand />
      <Feature />
      <Article />
      <CTA />
    </div>
  )
}

export default App