import { useContext, useEffect, useState } from "react";
import { info } from "../../info";
import { LangContext } from "../../pages/Root";
import { basic } from "../../basic";

const Footer = () => {
  let d = new Date();
  let year = d.getFullYear();
  const lang = useContext(LangContext)
  const [infoo, setInfoo] = useState({})
  const [basicc, setBisicc] = useState({})
  useEffect(() => {
    if (lang == "en") {
      setInfoo(info.en)
      setBisicc(basic.en.footer)
    }
    else {
      setInfoo(info.ar)
      setBisicc(basic.ar.footer)
    }
  }, [lang])

  return (
    <footer>
      <div>
        © {year} {basicc.right}
      </div>
      <div>
        {basicc.dev} {infoo.fname}
      </div>
      <div className="flex-bet-center items-start gap-4">
        {info.social?.map((item, index) => {
          return (
            <span className="size-7 active-sec text-center rounded-full" key={index}>
              <a className="block size-full p-[3px] rounded-full" href={item.link}>
                <i className={item.iconclass}> </i>
              </a>
            </span>
          )
        })}
      </div>
    </footer>
  )
}

export default Footer
