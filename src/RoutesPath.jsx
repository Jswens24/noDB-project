import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'

const RoutesPath = () => {
    return (
        <Routes>
            <Route exact path='/' Component={Home} />
        </Routes>
    )
}

export default RoutesPath