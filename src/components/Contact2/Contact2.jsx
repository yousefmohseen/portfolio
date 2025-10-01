import { Link } from 'react-scroll'
import lines from "../../assets/image/lines.svg"
import { useContext, useEffect, useState } from 'react'
import { LangContext } from '../../pages/Root'
import { basic } from '../../basic'

const Contact2 = () => {
  const lang = useContext(LangContext)
  const [basicc, setBisicc] = useState({})
  useEffect(() => {
    if (lang == "en") {
      setBisicc(basic.en.contact2)
    }
    else {
      setBisicc(basic.ar.contact2)
    }
  }, [lang])

  return (
    <section id='contact2' className={lang == "ar" ? "rotate-2" : ""}>
      <div className={(lang == "en" ? "rotate-2" : "-rotate-2") + " size-full p-sp5 pt-0 pb-0 bg-praim8 rounded-4xl flex-bet-center gap-6 max-tab:pl-sp2 max-tab:pr-sp2 max-tab-min:p-sp4 max-tab-min:flex-col max-tab-min:justify-center"}>
        <img className={(lang == "en" ? "" : "rotate-y-180") + " absolute left-0 top-0"} src={lines} alt="" />
        <div className="w-[489px] z-10 max-tab-min:w-full">
          <h1 className="text-[42px] font-semibold mb-2.5 max-tab-min:text-[36px] ">{basicc.head1}</h1>
          <p className="text-[20px] font-normal">
            {basicc.p1}
            <span className="font-bold">{basicc.p2}</span>
          </p>
        </div>
        <button className="btn active-sec z-10" type="button">
          <Link
            className="block size-full p-3"
            activeClass=" "
            to="contact"
            spy={true}
            smooth={true}
            ignoreCancelEvents={false}
            offset={-82}
            duration={250}
          >
            <span className="mr-1.5 text-[14px] font-semibold">{basicc.btntext}</span>
            <span className={lang == "ar" ? "inline" : "hidden"}><i className="fa-solid fa-arrow-left"></i></span>
            <span className={lang == "en" ? "inline" : "hidden"}><i className="fa-solid fa-arrow-right"></i></span>
          </Link>
        </button>
      </div>
    </section>
  )
}

export default Contact2
