import { Link, useParams } from "react-router-dom"
import { info } from "../info"
import { useContext, useEffect, useRef, useState } from "react"
import icon from "../assets/image/icon.svg"
import icon1 from "../assets/image/icon1.svg"
import full from "../assets/image/full.svg"
import borderL from "../assets/image/border-l.png"
import borderD from "../assets/image/border-d.png"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LangContext } from "./Root"
import { basic } from "../basic"

const Details = () => {
  const params = useParams()
  const [proj, setProj] = useState({})
  const [show, setShow] = useState(false)
  const [rtl, setRtl] = useState(false)
  const [activeSlide, setActiveSlide] = useState(0)
  const [activeSlide2, setActiveSlide2] = useState(info.en.projects.length - 4)
  let sliderRef = useRef(null)
  const next = () => {
    sliderRef.slickNext()
  }
  const previous = () => {
    sliderRef.slickPrev()
  }

  var settings = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    rtl: rtl,
    afterChange: current => setActiveSlide(current),
    responsive: [
      {
        breakpoint: 1367,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 479,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  }
  useEffect(() => {
    if (window.innerWidth < 1367) {
      setActiveSlide2(info.en.projects.length - 3)
    }
    if (window.innerWidth < 992) {
      setActiveSlide2(info.en.projects.length - 2)

    }
    if (window.innerWidth < 480) {
      setActiveSlide2(info.en.projects.length - 1)

    }
  }, [next, previous])

  const lang = useContext(LangContext)
  const [infoo, setInfoo] = useState({})
  const [basicc, setBisicc] = useState({})
  useEffect(() => {
    if (lang == "en") {
      setInfoo(info.en)
      setBisicc(basic.en.details)
      setProj(info.en.projects.find(p => p.id == params.id))
      setRtl(false)
    }
    else {
      setInfoo(info.ar)
      setBisicc(basic.ar.details)
      setProj(info.ar.projects.find(p => p.id == params.id))
      setRtl(true)
    }
  }, [lang])

  return (
    <>
      <div className={show ? "block h-full w-full fixed top-0 z-51" : "hidden"}>
        <span onClick={() => setShow(false)} className="absolute top-10 right-15 size-8 text-2xl text-center bg-white text-red-800 border-solid border-2 border-black rounded-full cursor-pointer">
          <i className="fa-solid fa-times"></i>
        </span>
        <img className="h-full w-full" src={proj.srcImg} alt="" />
      </div>
      <section className="relative">
        <div className="mr-sp1 ml-sp1 pb-24 pt-10 flex-bet-center gap-10 max-tab:ml-sp2 max-tab:mr-sp2 max-tab:gap-5 max-tab-min:ml-sp4 max-tab-min:mr-sp4 max-tab-min:flex-col">
          <div className="relative rounded-[8px] max-w-[530px] max-tab:max-w-[420px] max-tab-min:max-w-none **:rounded-[8px] hover:[&_div]:flex">
            <img className="" src={proj.srcImg} alt="" />
            <div className="hidden size-full bg-praim1-opc absolute top-0 left-0 ">
              <div className="pos-center flex items-center justify-center gap-3">
                <button onClick={() => setShow(true)} className="cursor-pointer">
                  <img src={full} alt="" />
                </button>
                <a href={proj.demoUrl}>
                  <img className={lang == "en" ? "rotate-y-0" : "rotate-y-180"} src={icon1} alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="w-[573px] max-tab-min:w-full">
            <div className="flex-bet-center items-start">
              <div>
                <h2 className="text-[28px]">{proj.add}</h2>
                <p className="text-[14px] font-medium text-praim10">{proj.date}</p>
              </div>
              <a href={proj.demoUrl}>
                <img className={lang == "en" ? "rotate-y-0" : "rotate-y-180"} src={icon} alt="" />
              </a>
            </div>
            <p className="mt-3 mb-4">{proj.desc}</p>
            <ul className="*:mb-3 mb-7">
              <li>{basicc.list1} {proj.basicLang}</li>
              <li>{basicc.list2} {proj.framework}</li>
              <li>{basicc.list3} {proj.libraries}</li>
            </ul>
            <button className="btn active-sec" type="button">
              <a className="block size-full p-3.5" href={proj.repoUrl}>{basicc.btn}</a>
            </button>
          </div>
        </div>
        <img className="block dark:hidden absolute bottom-0 left-0" src={borderL} alt="" />
        <img className="hidden dark:block absolute bottom-0 left-0" src={borderD} alt="" />
      </section>
      <section id="best">
        <div className="head">
          <div>
            <h5 className="text-praim6">{basicc.head1}</h5>
            <h2 className="w-[362px] max-tab-min:w-full">
              {basicc.head2}
              <span className="text-praim6"> {basicc.head3}</span>
            </h2>
          </div>
          <div className={(lang == "en" ? "flex-row" : "flex-row-reverse") + " flex-bet-center gap-2 *:size-9 *:text-center *:border-[1px] *:border-praim6 *:rounded-full max-mob:mt-3"} >
            <button className={activeSlide == 0 ? " active cursor-not-allowed" : " active-sec border-white cursor-pointer"} onClick={previous} disabled={activeSlide == 0 ? "disabled" : ""}>
              <i className="fa-solid fa-angle-left"></i>
            </button>
            <button className={activeSlide == activeSlide2 ? " active cursor-not-allowed" : "active-sec border-white cursor-pointer"} onClick={next} disabled={activeSlide == activeSlide2 ? "disabled" : ""}>
              <i className="fa-solid fa-angle-right"></i>
            </button>
          </div>
        </div>
        <Slider
          className="pl-[42px] pr-[42px] max-tab:pl-6 max-tab:pr-6 max-tab-min:pl-1 max-tab-min:pr-1"
          ref={slider => {
            sliderRef = slider;
          }}
          {...settings}
        >
          {infoo.projects?.map((item, index) => {
            return (
              <div className="p-7 max-tab:p-4" key={index}>
                <Link to={"/portfolio/details/" + item.id}>
                  <img className="w-full mb-8 rounded-[8px]" src={item.srcImg} alt="" />
                </Link>
                <div className="flex-bet-center items-end">
                  <div>
                    <h3 className="mb-3">{item.add}</h3>
                    <p>{item.basicLang}</p>
                  </div>
                  <a href={item.demoUrl}>
                    <img className={lang == "en" ? "rotate-y-0" : "rotate-y-180"} src={icon} alt="" />
                  </a>
                </div>
              </div>
            )
          })}
        </Slider>
      </section>
    </>

  )
}

export default Details
