import { info } from "../../info"
import icon from "../../assets/image/icon.svg"
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <section id="projects">
      <div className="head">
        <div>
          <h5 className="text-praim6">Portfolio</h5>
          <h2 className="w-[362px] max-tab-min:w-full">My Creative Works Latest<span className="text-praim6"> Projects</span></h2>
        </div>
        <button className="btn active-sec text-[14px] max-tab-min:hidden" type="button">
          <a className="block size-full p-3.5" href={info.linkgithub}>
            <span className="mr-1">View Github </span>
            <span>
              <i className="fa-solid fa-arrow-up rotate-z-45"></i>
            </span>
          </a>
        </button>
      </div>
      <div className="showproj max-tab-min:pb-0">
        {info.projects?.map((item, index) => {
          return (
            <Link key={index} to={"/portfolio/details/" + item.id} refresh="true">
              <img className="w-full mb-8 rounded-[8px]" src={item.srcImg} alt="" />
              <div className="flex-bet-center items-end">
                <div>
                  <h3 className="mb-3">{item.add}</h3>
                  <p>{item.basicLang}</p>
                </div>
                <a href={item.demoUrl}>
                  <img src={icon} alt="" />
                </a>
              </div>
            </Link>
          )
        })}
      </div>
      <button className="btn active-sec text-[14px] m-auto mt-8 mb-24 text-center hidden max-tab-min:block" type="button">
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
