import { useEffect, useState } from 'react'
import { info } from '../../info'
import { Link } from 'react-scroll'

const NavBar = ({ navItem, add, themes }) => {
    const [navcolor, setNavColor] = useState(false)
    const [acthome, setActhome] = useState(true)
    const [shownav, setShownav] = useState(true)


    const changenavcolor = () => {
        if (window.scrollY >= 80) {
            setNavColor(true)
        }
        else {
            setNavColor(false)
        }
    }
    window.addEventListener("scroll", changenavcolor)

    if (window.location.href.indexOf("details") >= 0) {
        add(prev => prev = "active")
        useEffect(() => {
            setActhome(false)
        }, [])
    }
    else {
        add(prev => prev = " ")
    }

    const changethemes = (x) => {
        themes.setThemes(prev => prev = x)
    }
    const handleSetActive = (to) => {
        if (to != "") {
            setActhome(false)
        }
    }
    const handleSetActive2 = (to) => {
        if (to == "about") {
            setActhome(true)
        }
    }
    return (
        <nav className={(navcolor || !shownav ? "z-50 bg-white dark:bg-praim1" : "") + " flex-bet-center"}>
            <h1 className='text-[24px]'>{info.fname}</h1>
            <ul className={(!shownav ? "max-tab-min:flex" : "max-tab-min:hidden")}>
                <li>
                    <a className={acthome ? "active" : " "} href='/'>
                        Home
                    </a>
                </li>
                {navItem?.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link
                                className={item.cls}
                                activeClass="active"
                                to={item.href}
                                spy={true}
                                smooth={true}
                                ignoreCancelEvents={false}
                                offset={-90}
                                duration={500}
                                onSetActive={handleSetActive}
                                onSetInactive={handleSetActive2}
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
                    <i className="fa-solid fa-moon"></i>
                </span>
                <span onClick={() => changethemes("light")} className={themes.themes == "dark" ? "block" : "hidden"}>
                    <i className="fa-solid fa-sun"></i>
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
