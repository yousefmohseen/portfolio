import { info } from "../../info"
const Hero = () => {
  let sos = []
  for (let i = 0; i < 3; i++) {
    sos.push(info.social[i]);
  }
  return (
    <div className="flex-bet-center" id="hero">
      <div className="w-[515px] max-tab:w-[405px] max-tab-min:w-full">
        <h5 className="text-praim6">Welcome</h5>
        <h1 className="pb-sp2 text-[55px] font-normal max-[1181px]:text-[45px] max-tab:text-[36px]">HEY!
          <strong className="font-bold">I’m  {info.fname}, Frontend Developer</strong>
        </h1>
        <p>{info.desc}</p>
        <button className="mt-sp2 btn active-sec text-[14px]" type="button">
          <a className="block size-full p-4" href={info.linkcv}>Download Cv</a>
        </button>
      </div>
      <div className="flex justify-end pb-[103px] max-w-[490px] max-[1181px]:w-[400px] max-tab:max-w-[314px] max-tab-min:w-full max-tab-min:justify-center max-tab-min:max-w-none">
        <img className="" src={info.photo} alt="" />
        <div className="pt-sp1 flex-bet-center flex-col text-center">
          <p style={{ writingMode: "vertical-lr" }}>Follow me on:</p>
          <span className="h-[60px] w-[0.5px] mb-2 mt-2 bg-praim6"></span>
          <div className="flex flex-col gap-x-8">
            {sos?.map((item, index) => {
              return (
                <span className="text-praim6" key={index}>
                  <a href={item.link}>
                    <i className={item.iconclass}></i>
                  </a>
                </span>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
