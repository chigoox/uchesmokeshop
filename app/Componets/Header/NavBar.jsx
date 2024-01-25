'use client'
import { useAUTHListener } from '@/StateManager/AUTHListener'
import useFilterEmptyCategory from '@/app/Hooks/useFilterCategory'
import { NavBarVideoURL, categoryLinks, siteName } from '@/app/META'
import { Button } from '@nextui-org/react'
import { HomeIcon, ShoppingBagIcon, User } from 'lucide-react'
import { Jost } from 'next/font/google'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Suspense, useEffect, useState } from 'react'
import { AiOutlineClose, AiOutlineShoppingCart, } from 'react-icons/ai'
import LoginCard from '../General/Auth/LoginCard'
import MenuButton from '../General/MobileMenuButton'
import { NavigationEvents } from "../NavigationEvents"
import Cart from './Cart'
import Banner from './Componets/Banner'
import useScrollPosition from '@/app/Hooks/useScrollPosition'

const jost = Jost({
    weight: '400',
    subsets: ['latin'],
})

function NavBar() {
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const [showCart, setShowCart] = useState(false)
    const [showLogin, setShowLogin] = useState(false)
    const [navRoute, setNavRoute] = useState([])
    const user = useAUTHListener()
    const { push } = useRouter()
    const category = useFilterEmptyCategory()

    let scrollPosition = 1
    scrollPosition = useScrollPosition()

    const NoCart = usePathname().includes('Checkout')


    useEffect(() => {

    }, [])




    const toggleMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu)
        return (!showMobileMenu)
    }
    const toggleCart = () => {
        setShowCart(!showCart)
        return (!showCart)
    }
    const toggleLogin = () => {
        if (user?.uid) {
            push(`/User/${user.uid}`)
        } else {
            setShowLogin(!showLogin)

        }
    }





    const url = NavBarVideoURL

    return (
        <div className='h-22 bg-black w-full   center-col overflow-hidden'>

            <Cart showCart={showCart} setShowCart={setShowCart} />
            {(showLogin && (!user?.uid)) && <LoginCard toggleLogin={toggleLogin} />}

            <Suspense>
                <NavigationEvents setRoute={setNavRoute} />
            </Suspense>
            <div className='mt-0 md:mt-0 relative '>

                <div className='w-[25%] absolute right-0  h-8'>
                    <div className=' m-auto h-8 w-24'></div>
                </div>

            </div >
            <div className='center h-20 overflow-hidden bg-black-800  relative m-auto'>

                <div className={jost.className}>

                    <div className={' h-full bg-gray-200 bg-opacity-25 w-full top-0 center absolute right-0 '}>
                        <img src="/Images/ASlogo.png" className=' h-52 border drop-shadow-md w-52 rounded-full object-cover' alt="" />

                    </div>
                    <div className=''>
                        {/* <iframe className='w-[100vw] aspect-video video ytplayer'
                            src={`https://www.youtube.com/embed/${url}?autoplay=1&mute=1&controls=0&loop=1playlist=${url}`}>
                        </iframe> */}
                        <video autoPlay muted playsInline loop className='h-full w-[100vw] aspect-video' src="/videos/NavVideo.mp4"></video>
                    </div>
                    {/* <Image height={30} width={2000} src={'https://img.freepik.com/free-photo/white-painted-wall-texture-background_53876-138197.jpg?w=2000'} alt={''} /> */}


                </div>
            </div>
            <nav className={`  trans   items-center  justify-evenly ${showCart ? 'justify-center' : 'justify-center'}  flex md:flex-row  gap-4 md:gap-0 ${false ? 'h-16 scale-100 ' : 'h-20 p-0 '} ${showCart ? 'h-16 scale-100 w-[50%] md:w-[100%] md:left-[0%]  left-[50%] ' : 'w-[100%] left-[0%] '}  rounded-t-2xl md:rounded-none  bg-black-900 text-white  md:bg-black-800 group   md:h-20`}>
                {!showCart && <button onClick={toggleMobileMenu} className={`absolute -top-[4.7rem] bg-black rounded-full h-12 w-12 center p-2 ${showCart ? '' : ''}`}>
                    <MenuButton menuOpen={showMobileMenu} />
                </button>}

                {!NoCart && <button onClick={toggleCart} className={`trans bg-black rounded-full p-2 center  gap-4 absolute flex z-[9999] ${showCart ? 'right-[60%] -top-[3.5rem]' : 'right-2 sm:right-6 md:right-8  '}`}>
                    {!showCart ? <AiOutlineShoppingCart size={32} /> : <AiOutlineClose size={32} />}
                </button>}

                <div className={`evenly text-3xl font-extrabold gap-5 relative ${showCart ? 'right-3' : ''}`}>
                    <Link className='center hover:border-b-2 border-opacity-0 hover:border-opacity-100 ' href={'/'}>{!showCart && 'Home'}</Link>
                    <Link className='center hover:border-b-2 border-opacity-0 hover:border-opacity-100 ' href={'/Shop'}>{!showCart && 'Shop'}</Link>
                </div>

                {<div className={` gap-2 w-[20%] ${showCart ? 'right-2 ' : 'right-4'} ${showMobileMenu ? 'absolute' : '-bottom-8 md:bottom-0'}  flex items-end justify-end`}>
                    <Button onPress={toggleLogin} className={'min-w-0 h-fit w-fit p-1 center bg-black text-white'}>
                        <User size={24} />
                    </Button>
                    {<Button onClick={toggleCart} className={`trans  bg-black text-white min-w-0 h-0 w-0 md:h-fit md:w-fit p-1 center bg-none`}>
                        {!showCart ? <AiOutlineShoppingCart size={24} /> : <AiOutlineClose size={24} />}
                    </Button>}
                </div>}


            </nav>
            {
                navRoute[0]?.toUpperCase()?.includes('SHOP') && <div className=' bg-black-800 bg-opacity-0 w-full'>
                    <div className='h-20 w-full evenly gap-2 font-light text-center m-auto bg-black-900 text-white'>
                        {category.map(item => (<Link key={item} href={item.includes('Hot') ? `/Shop/HotTools` : `/Shop/${item.replace(/\s/g, '')}`}>
                            <div className='h-12 w-20  rounded'>
                                <h1 className='text-white '>{item.includes('Hot') ? 'Tools & Acces...' : item}</h1>
                            </div></Link>))}
                    </div>
                </div>
            }
        </div >

    )
}

export default NavBar

/* 

routes

shop/Luxury wigs , Luxury bundles , luxury lace , hot tools 
book/book appointments, book a class

*/
