import { info } from "../../info"
import aboutL from "../../assets/image/about-l.png"
import aboutD from "../../assets/image/about-d.png"

const About = () => {
    const prog = info.about.prog
    return (
        <section className="flex-bet-center" id="about">
            <div className="w-[558px] max-tab:w-[490px] max-tab-min:w-full">
                <h2>About Me</h2>
                <p className="mt-3 mb-sp2 text-[18px]">{info.about.desc}</p>
                <ul>
                    {prog?.map((item, index) => {
                        return (
                            <li className="mb-4" key={index}>
                                <div className="mb-1.5 text-[24px] font-semibold">{item.name}</div>
                                <div className="w-full bg-praim7 rounded-full">
                                    <div style={{ width: item.range + "%" }} className="relative bg-praim6 h-3 rounded-full">
                                        <span className="absolute top-[50%] translate-y-[-50%] right-[-10px] bg-white border-[3px] border-praim6 size-5 rounded-full"></span>
                                        <span className="tooltip">{item.range + "%"}</span>
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="max-w-[500px]">
                <img className="block dark:hidden" src={aboutL} alt="" />
                <img className="hidden dark:block" src={aboutD} alt="" />
            </div>
        </section>
    )
}

export default About
