import { Link } from "react-scroll"
import { info } from "../../info"
import { useState } from "react"

const Education = () => {
  const education = info.education
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
      <img className="absolute -top-7 right-0 " src="/portfolio/src/assets/image/bg1.svg" alt="" />
      <img className="absolute -bottom-10 left-0 -rotate-z-[192deg]" src="/portfolio/src/assets/image/bg1.svg" alt="" />
      <h5 className="text-center text-praim6">Education and Experience</h5>
      <h2 className="mb-7 dark:text-white text-praim2 text-center" >Education & Experience</h2>
      <div className="grid grid-cols-2 gap-x-20 gap-y-7 max-tab-min:grid-cols-1 max-tab-min:pb-33">
        {education?.map((item, index) => {
          return (
            <div className="relative pl-10 border-l-2 border-dashed" key={index}>
              <span className="absolute top-[10px] -left-[10.5px] size-5 rounded-full rotate-z-[57deg] border-[5px] border-dashed">
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
      <button  className={topbtn ? "size-12 btn active-sec fixed bottom-sp1 right-sp1 z-50 max-tab:right-sp2 max-tab-min:right-sp4" : "hidden"}>
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
