import { Link } from "react-scroll"
import { info } from "../../info"
import { useContext, useEffect, useState } from "react"
import bg1 from "../../assets/image/bg1.svg"
import { basic } from "../../basic"
import { LangContext } from "../../pages/Root"


const Education = () => {
  const lang = useContext(LangContext)
  const [infoo, setInfoo] = useState({})
  const [basicc, setBisicc] = useState({})
  useEffect(() => {
    if (lang == "en") {
      setInfoo(info.en)
      setBisicc(basic.en.education)
    }
    else {
      setInfoo(info.ar)
      setBisicc(basic.ar.education)
    }
  }, [lang])


  const education = info.en.education
  const [topbtn, setTopBtn] = useState(false)
  const showbtn = () => {
    if (window.scrollY >= 1150) {
      setTopBtn(true)
    }
    else {
      setTopBtn(false)
    }
  }
  window.addEventListener("scroll", showbtn)

  return (
    <section id="education" >
      <img className={(lang == "en" ? "right-0" : "left-0 rotate-y-[180deg]") + " absolute -top-7"} src={bg1} alt="" />
      <img className={(lang == "en" ? "left-0 -rotate-z-[192deg]" : "right-[23px] rotate-x-[170deg] -rotate-z-[10deg]") + " absolute -bottom-10"} src={bg1} alt="" />
      <h5 className="text-center text-praim6">{basicc.head1}</h5>
      <h2 className="mb-7 dark:text-white text-praim2 text-center" >{basicc.head2}</h2>
      <div className={"grid grid-cols-2 gap-x-20 gap-y-7 max-tab-min:grid-cols-1 max-tab-min:pb-33"}>
        {infoo.education?.map((item, index) => {
          return (
            <div className={(lang == "en" ? "pl-10 border-l-2" : "pr-10 border-r-2") + " relative border-dashed"} key={index}>
              <span className={(lang == "en" ? "-left-[10.5px]" : "-right-[10.5px]") + " absolute top-[10px] size-5 rounded-full rotate-z-[57deg] border-[5px] border-dashed"}>
                <span className="pos-center size-4 rounded-full border-2 dark:border-[1px] border-white bg-praim6"></span>
              </span>
              <div className="mb-3.5  dark:text-white text-praim3 text-[25px] font-medium">
                {item.add}
              </div>
              <p className="text-praim5">{item.desc}</p>
            </div>
          )
        })}
      </div>
      <button className={topbtn ? (lang == "en" ? "right-sp1" : "left-sp1") + " size-12 btn active-sec fixed bottom-sp1 z-50 max-tab:right-sp2 max-tab-min:right-sp4" : "hidden"}>
        <Link
          className="block size-full p-3"
          activeClass=" "
          to="root"
          spy={true}
          smooth={true}
          ignoreCancelEvents={false}
          offset={0}
          duration={250}
        >
          <i className="fa-solid fa-arrow-up"></i>
        </Link>
      </button>
    </section>
  )
}

export default Education
