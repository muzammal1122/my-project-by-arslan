import React from 'react'
import Header from './header'
import Footer from './footer'

type Props = {
    children: React.ReactNode
}

const Layout = (props: Props) => {
    const { children } = props
    return (
        <div className="container mx-auto">
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout