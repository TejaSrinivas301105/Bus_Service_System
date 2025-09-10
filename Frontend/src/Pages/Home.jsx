import React from 'react'
import Header from '../Components/Header'
import Hero_Section from '../Components/Hero_Section'
import Footer from '../Components/Footer'

const Home = () => {
    return (
        <div data-theme="forest" className='min-h-screen bg-base-200 h-full'> 
            <Header/>
            <Hero_Section/>
            <Footer/>
        </div>
    )
}

export default Home
