import { useEffect, useState } from 'react'
import { info } from '../../info'
import { Link } from 'react-scroll'
import { NavLink } from 'react-router-dom'

const NavBar = ({ navItem, add, themes }) => {
    const [acthomdet, setActhomdet] = useState(false)
    const [shownav, setShownav] = useState(true)

    if (window.location.href.indexOf("details") >= 0) {
        add.setActdet(prev => prev = "active")
        useEffect(() => {
            setActhomdet(true)
        }, [])

    }
    else {
        add.setActdet(prev => prev = " ")
        useEffect(() => {
            setActhomdet(false)
        }, [])

    }

    const changethemes = (x) => {
        themes.setThemes(prev => prev = x)
    }
    const handleSetActive = (to) => {
        if (to == "") {
            add.setActhome(prev => prev = "active")
        }
        else{
            add.setActhome(prev => prev = " ")           
        }
    }
    return (
        <nav className="z-50 bg-white dark:bg-praim1 flex-bet-center">
            <h1 className='text-[24px]'>{info.fname}</h1>
            <ul className={(!shownav ? "max-tab-min:flex" : "max-tab-min:hidden")}>
                <li onClick={()=>setActhomdet(false)} className={acthomdet ? "block" : "hidden"}>
                    <NavLink
                        className={({ isActive }) => isActive ? "active" : ""}
                        to="/portfolio/"
                    >
                        Home
                    </NavLink>
                </li>
                {navItem?.map((item, index) => {
                    return (
                        <li className={(acthomdet && item.content=="Home") ? "hidden" : "block"} key={index}>
                            <Link
                                className={item.cls}
                                activeClass="active"
                                to={item.href}
                                spy={true}
                                smooth={true}
                                ignoreCancelEvents={false}
                                offset={-96}
                                duration={500}
                                onSetActive={handleSetActive}
                            >
                                {item.content}
                            </Link>
                        </li>
                    )
                })}
                <button className='hidden max-tab-min:block' type="button">
                    <span onClick={() => changethemes("dark")} className={themes.themes == "light" ? "block" : "hidden"}>
                        <i className="fa-solid fa-moon"></i>
                    </span>
                    <span onClick={() => changethemes("light")} className={themes.themes == "dark" ? "block" : "hidden"}>
                        <i className="fa-solid fa-sun"></i>
                    </span>
                </button>
            </ul>
            <button className='max-tab-min:hidden' type="button">
                <span onClick={() => changethemes("dark")} className={themes.themes == "light" ? "block" : "hidden"}>
                    <i className="fa-solid fa-moon">l</i>
                </span>
                <span onClick={() => changethemes("light")} className={themes.themes == "dark" ? "block" : "hidden"}>
                    <i className="fa-solid fa-sun">d</i>
                </span>
            </button>
            <button className='hidden max-tab-min:block'>
                <span onClick={() => setShownav(false)} className={shownav ? "block" : "hidden"}>
                    <img className={themes.themes == "light" ? "block" : "hidden"} src="/portfolio/src/assets/image/menu-l.png" alt="" />
                    <img className={themes.themes == "dark" ? "block" : "hidden"} src="/portfolio/src/assets/image/menu-d.png" alt="" />
                </span>
                <span onClick={() => setShownav(true)} className={!shownav ? "block" : "hidden"}>
                    <img className={themes.themes == "light" ? "block" : "hidden"} src="/portfolio/src/assets/image/close-l.png" alt="" />
                    <img className={themes.themes == "dark" ? "block" : "hidden"} src="/portfolio/src/assets/image/close-d.png" alt="" />
                </span>
            </button>
        </nav>
    )
}

export default NavBar
