import { useEffect, useState } from 'react'
import { info } from '../../info'
import { Link } from 'react-scroll'
import { NavLink } from 'react-router-dom'
import menuL from "../../assets/image/menu-l.png"
import menuD from "../../assets/image/menu-d.png"
import closeL from "../../assets/image/close-l.png"
import closeD from "../../assets/image/close-d.png"
import { basic } from '../../basic'

const NavBar = ({ navItem, add, themes, lang }) => {
    const [acthomdet, setActhomdet] = useState(false)
    const [shownav, setShownav] = useState(true)

    useEffect(() => {
        if (window.location.href.indexOf("details") >= 0) {
            add.setActdet(prev => prev = "active")
            setActhomdet(true)

        }
        else {
            add.setActdet(prev => prev = " ")
            setActhomdet(false)

        }
    }, [lang,acthomdet])

    const changethemes = (x) => {
        themes.setThemes(prev => prev = x)
    }

    const changelang = (x) => {
        lang.setLang(prev => prev = x)
    }
    const handleSetActive = (to) => {
        if (to == "") {
            add.setActhome(prev => prev = "active")
        }
        else {
            add.setActhome(prev => prev = " ")
        }
    }
    const [basicc, setBisicc] = useState({})
    useEffect(() => {
        if (lang == "en") {
            setBisicc(basic.en.navBar)
        }
        else {
            setBisicc(basic.ar.navBar)
        }
    }, [lang])
    
    console.log(acthomdet)
    return (
        <nav className="z-50 bg-white dark:bg-praim1 flex-bet-center">
            <h1 className='text-[24px]'>{info.en.fname}</h1>
            <ul className={!shownav ? (lang.lang == "en" ? "max-tab-min:right-0" : "max-tab-min:left-0") + " max-tab-min:flex" : "max-tab-min:hidden"}>
                <li onClick={() => setActhomdet(false)} className={acthomdet ? "block" : "hidden"}>
                    <NavLink
                        className={({ isActive }) => isActive ? "active" : ""}
                        to="/portfolio/"
                    >
                        {lang.lang == "en" ? "Home" : "الصفحة الرئيسية"}
                    </NavLink>
                </li>
                {navItem?.map((item, index) => {
                    return (
                        <li className={(acthomdet && index==0) ? "hidden" : "block"} key={index}>
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
                <div className='hidden max-tab-min:flex justify-center gap-2.5 '>
                    <button type="button">
                        <span onClick={() => changethemes("dark")} className={themes.themes == "light" ? "block" : "hidden"}>
                            <i className="fa-solid fa-moon"></i>
                        </span>
                        <span onClick={() => changethemes("light")} className={themes.themes == "dark" ? "block" : "hidden"}>
                            <i className="fa-solid fa-sun"></i>
                        </span>
                    </button>
                    <select className='dark:bg-praim1' onChange={(e => changelang(e.target.value))} name="" id="">
                        <option selected={lang.lang == "en" ? "selected" : ""} value="en">en</option>
                        <option selected={lang.lang == "ar" ? "selected" : ""} value="ar">ar</option>
                    </select>
                </div>
            </ul>
            <div className='flex justify-center gap-2.5 max-tab-min:hidden'>
                <button type="button">
                    <span onClick={() => changethemes("dark")} className={themes.themes == "light" ? "block" : "hidden"}>
                        <i className="fa-solid fa-moon">d</i>
                    </span>
                    <span onClick={() => changethemes("light")} className={themes.themes == "dark" ? "block" : "hidden"}>
                        <i className="fa-solid fa-sun">l</i>
                    </span>
                </button>
                <select className='dark:bg-praim1' onChange={(e => changelang(e.target.value))} name="" id="">
                    <option selected={lang.lang == "en" ? "selected" : ""} value="en">en</option>
                    <option selected={lang.lang == "ar" ? "selected" : ""} value="ar">ar</option>
                </select>
            </div>
            <button className='hidden max-tab-min:block'>
                <span onClick={() => setShownav(false)} className={shownav ? "block" : "hidden"}>
                    <img className={themes.themes == "light" ? "block" : "hidden"} src={menuL} alt="" />
                    <img className={themes.themes == "dark" ? "block" : "hidden"} src={menuD} alt="" />
                </span>
                <span onClick={() => setShownav(true)} className={!shownav ? "block" : "hidden"}>
                    <img className={themes.themes == "light" ? "block" : "hidden"} src={closeL} alt="" />
                    <img className={themes.themes == "dark" ? "block" : "hidden"} src={closeD} alt="" />
                </span>
            </button>
        </nav>
    )
}

export default NavBar
