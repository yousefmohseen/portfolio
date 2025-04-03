import { useParams } from "react-router-dom"
import { info } from "../info"
import Projects from "../components/Projects/Projects"
import { useState } from "react"

const Details = () => {
  const params = useParams()
  let proj = info.projects.find(p => p.id == params.id)
  const [show, setShow] = useState(false)

  return (
    <>
      <div className={show ? "block h-full w-full fixed top-0 z-51" : "hidden"}>
        <span onClick={() => setShow(false)} className="absolute top-10 right-15 size-8 text-2xl text-center bg-white text-red-800 rounded-full cursor-pointer">
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
                  <img src="/portfolio/src/assets/image/full.svg" alt="" />
                </button>
                <a href={proj.demoUrl}>
                  <img src="/portfolio/src/assets/image/icon1.svg" alt="" />
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
                <img src="/portfolio/src/assets/image/icon.svg" alt="" />
              </a>
            </div>
            <p className="mt-3 mb-4">{proj.desc}</p>
            <ul className="*:mb-3 mb-7">
              <li>Basic Languages : {proj.basicLang}</li>
              <li>Framework : {proj.framework}</li>
              <li>Libraries : {proj.libraries}</li>
            </ul>
            <button className="btn active-sec" type="button">
              <a className="block size-full p-3.5" href={proj.repoUrl}>Github Repo</a>
            </button>
          </div>
        </div>
        <img className="block dark:hidden absolute bottom-0 left-0" src="/portfolio/src/assets/image/border-l.png" alt="" />
        <img className="hidden dark:block absolute bottom-0 left-0" src="/portfolio/src/assets/image/border-d.png" alt="" />
      </section>
      <Projects />
    </>

  )
}

export default Details
