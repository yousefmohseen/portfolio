import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar/NavBar"
import Footer from "../components/Footer/Footer"
import { createContext, useEffect, useState } from "react"
import { basic } from "../basic"

export const LangContext = createContext(null)

const Root = () => {
    const getTheme = () => {
        if (window.matchMedia && window.matchMedia("(prefers-color-scheme:dark)").matches) {
            return "dark";
        } else {
            return "light";
        }
    }

    const getLang = () => {
        if (window.navigator.language.slice(0, 2) == "en") {
            return "en";
        } else {
            return "ar";
        }
    }

    const [themes, setThemes] = useState(getTheme)
    const [lang, setLang] = useState(getLang)

    const [actdet, setActdet] = useState("active")
    const [acthome, setActhome] = useState("active")
    const [basicc, setBisicc] = useState({})
    useEffect(() => {
        if (lang == "en") {
            setBisicc(basic.en.navBar)
        }
        else {
            setBisicc(basic.ar.navBar)
        }
    }, [lang])

    const navItem = [
        {
            href: "hero",
            content: basicc.home,
            cls: acthome,
        },
        {
            href: "about",
            content: basicc.aboutme,
            cls: "",
        },
        {
            href: "education",
            content: basicc.education,
        },
        {
            href: "projects",
            content: basicc.projects,
            cls: actdet,

        },
        {
            href: "contact",
            content: basicc.contact,
            cls: "",
        }
    ]
    return (
        <LangContext.Provider value={lang}>
            <div dir={lang == "ar" ? "rtl" : "ltr"} className={themes + " text-praim1 dark:bg-praim1 dark:text-white"}>
                <NavBar navItem={navItem} add={{ setActdet, setActhome }} themes={{ setThemes, themes }} lang={{ setLang, lang }} />
                <Outlet />
                <Footer />
            </div>
        </LangContext.Provider>
    )
}

export default Root
