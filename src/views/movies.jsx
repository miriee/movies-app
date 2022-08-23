import React from 'react'
import Footer from '../components/layout/footer'
import Header from '../components/layout/header'
import ListMovies from '../components/listMovies'

export default function Movies() {
    return (
        <div>
            <Header></Header>
            <h1 className='text-4xl text-center my-10'> MOVIES</h1>
            <ListMovies></ListMovies>
            <Footer></Footer>
        </div>
    )
}
