import { useEffect, useRef, useState } from "react"
import { info } from "../../info"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
  const [detpage, setDetpage] = useState(false)
  const [activeSlide, setActiveSlide] = useState(0)
  const [activeSlide2, setActiveSlide2] = useState(info.projects.length - 4)
  useEffect(() => {
    if (window.location.href.indexOf("details") >= 0) {
      setDetpage(true)
    }
    else {
      setDetpage(false)
    }
  }, [])

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
      setActiveSlide2(info.projects.length - 3)
    }
    if (window.innerWidth < 992) {
      setActiveSlide2(info.projects.length - 2)

    }
    if (window.innerWidth < 480) {
      setActiveSlide2(info.projects.length - 1)

    }
  }, [next, previous])


  return (
    <section id="projects">
      <div className="head">
        <div>
          <h5 className="text-praim6">Portfolio</h5>
          <h2 className="w-[362px] max-tab-min:w-full">{!detpage ? "My Creative Works Latest" : "The Best"}<span className="text-praim6"> Projects</span></h2>
        </div>
        <button className={!detpage ? "btn active-sec text-[14px] max-tab-min:hidden" : "hidden"} type="button">
          <a className="block size-full p-3.5" href={info.linkgithub}>
            <span className="mr-1">View Github </span>
            <span>
              <i className="fa-solid fa-arrow-up rotate-z-45"></i>
            </span>
          </a>
        </button>
        <div className={detpage ? "flex-bet-center gap-2 *:size-9 *:text-center *:border-[1px] *:border-praim6 *:rounded-full max-mob:mt-3" : "hidden"}>
          <button className={activeSlide == 0 ? "active cursor-not-allowed" : "active-sec border-white cursor-pointer"} onClick={previous}>
            <i className="fa-solid fa-angle-left"></i>
          </button>
          <button className={activeSlide == activeSlide2 ? "active cursor-not-allowed" : "active-sec border-white cursor-pointer"} onClick={next}>
            <i className="fa-solid fa-angle-right"></i>
          </button>
        </div>
      </div>
      <Slider
        style={{
          display: detpage ? "block" : "none"
        }}
        className="pl-[42px] pr-[42px] max-tab:pl-6 max-tab:pr-6 max-tab-min:pl-1 max-tab-min:pr-1"
        ref={slider => {
          sliderRef = slider;
        }}
        {...settings}
      >
        {info.projects.map((item, index) => {
          return (
            <div className="p-7 max-tab:p-4" key={index}>
              <a href={item.id}>
                <img className="w-full mb-8 rounded-[8px]" src={item.srcImg} alt="" />
                <div className="flex-bet-center items-end">
                  <div>
                    <h3 className="mb-3">{item.add}</h3>
                    <p>{item.basicLang}</p>
                  </div>
                  <a href={item.demoUrl}>
                    <img src="/portfolio/src/assets/image/icon.svg" alt="" />
                  </a>
                </div>
              </a>
            </div>
          )
        })}
      </Slider>
      <div className={!detpage ? "showproj max-tab-min:pb-0" : "hidden"}>
        {info.projects?.map((item, index) => {
          return (
            <a key={index} href={"/portfolio/details/" + item.id}>
              <img className="w-full mb-8 rounded-[8px]" src={item.srcImg} alt="" />
              <div className="flex-bet-center items-end">
                <div>
                  <h3 className="mb-3">{item.add}</h3>
                  <p>{item.basicLang}</p>
                </div>
                <a href={item.demoUrl}>
                  <img src="/portfolio/src/assets/image/icon.svg" alt="" />
                </a>
              </div>
            </a>
          )
        })}
      </div>
      <button className={!detpage ? "btn active-sec text-[14px] m-auto mt-8 mb-24 text-center hidden max-tab-min:block" : "hidden"} type="button">
        <a className="block size-full p-3.5" href={info.linkgithub}>
          <span className="mr-1">View Github </span>
          <span>
            <i className="fa-solid fa-arrow-up rotate-z-45"></i>
          </span>
        </a>
      </button>
    </section>
  )
}

export default Projects
