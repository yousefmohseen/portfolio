import { info } from "../../info"
import icon from "../../assets/image/icon.svg"
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { LangContext } from "../../pages/Root";
import { basic } from "../../basic";

const Projects = () => {
  const lang = useContext(LangContext)
  const [infoo, setInfoo] = useState({})
  const [basicc, setBisicc] = useState({})
  useEffect(() => {
    if (lang == "en") {
      setInfoo(info.en)
      setBisicc(basic.en.projects)
    }
    else {
      setInfoo(info.ar)
      setBisicc(basic.ar.projects)
    }
  }, [lang])

  return (
    <section id="projects">
      <div className="head">
        <div>
          <h5 className="text-praim6">{basicc.head1}</h5>
          <h2 className="w-[359px] max-tab-min:w-full">
            {basicc.head2}
            <span className="text-praim6"> {basicc.head3}</span>
          </h2>
        </div>
        <button className="btn active-sec text-[14px] max-tab-min:hidden" type="button">
          <a className="block size-full p-3.5" href={info.linkgithub}>
            <span className="mr-1">{basicc.span}</span>
            <span className={lang == "en" ? "*:rotate-z-45" : "*:-rotate-z-45"}>
              <i className="fa-solid fa-arrow-up"></i>
            </span>
          </a>
        </button>
      </div>
      <div className="showproj max-tab-min:pb-0">
        {infoo.projects?.map((item, index) => {
          return (
            <div>
              <Link key={index} to={"/portfolio/details/" + item.id} refresh="true">
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
      </div>
      <button className="btn active-sec text-[14px] m-auto mt-8 mb-24 text-center hidden max-tab-min:block" type="button">
        <a className="block size-full p-3.5" href={info.en.linkgithub}>
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
