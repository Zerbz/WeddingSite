import { Navigation } from "../Components/Nav/Navigation"
import {Box } from '@chakra-ui/react'
import Title from './Title/Title'
import Footer from '../Components/Footer/Footer'

export default function Home() {
    return (
        <Box>
            <Navigation/>
            <Title/>
            <Footer/>      
        </Box> 
    )
}