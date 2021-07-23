import React from 'react'

export const Footer = () => {

    const handleMe = ()=>{
        window.location.replace('https://www.linkedin.com/in/conradolanusse/')
    }
    return (
        <footer>
            <p>Alkemy React WarmUp Challenge - Desarrollado por <span onClick={handleMe}>Conrado Lanusse</span></p>
        </footer>
    )
}
