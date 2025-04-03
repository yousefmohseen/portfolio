import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar/NavBar"
import Footer from "../components/Footer/Footer"
import { useState } from "react"


const Root = () => {
    const getTheme = () => {
        if(window.matchMedia && window.matchMedia("(prefers-color-scheme:dark)").matches) {
            return "dark";
          } else {
            return "light";
          }
    }
    const [themes, setThemes] = useState(getTheme)
    const [actdet, setActdet] = useState("active")

    const navItem = [
        {
            href: "about",
            content: "About me",
            cls: "",
        },
        {
            href: "education",
            content: "Education",
        },
        {
            href: "projects",
            content: "Projects",
            cls: actdet,

        },
        {
            href: "contact",
            content: "Contact",
            cls: "",
        }
    ]

    return (
        <div className={themes + " text-praim1 dark:bg-praim1 dark:text-white"}>
            <NavBar navItem={navItem} add={setActdet} themes={{ setThemes, themes }} />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Root
