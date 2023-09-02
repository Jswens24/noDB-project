import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import NewPost from './components/NewPost'

const RoutesPath = () => {
    return (
        <Routes>
            <Route exact path='/' Component={Home} />
            <Route path='/newPost' Component={NewPost} />
        </Routes>
    )
}

export default RoutesPath