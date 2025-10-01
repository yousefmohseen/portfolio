import { useContext, useEffect, useState } from "react"
import { info } from "../../info"
import { basic } from "../../basic"
import { LangContext } from "../../pages/Root"

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [msg, setMsg] = useState('')
  const sData = (e) => {
    e.preventDefault()
    window.location.assign(`mailto:?to=${info.en.contact.email}&amp;subject=worker&amp;body=name: ${name} %0D%0A email: ${email} %0D%0A number: ${number} %0D%0A message: ${msg}`)
  }

  const lang = useContext(LangContext)
  const [infoo, setInfoo] = useState({})
  const [basscont, setBasscont] = useState({})
  const [basscontform, setBasscontform] = useState({})
  useEffect(() => {
    if (lang == "en") {
      setInfoo(info.en.contact)
      setBasscont(basic.en.contact)
      setBasscontform(basic.en.contact.form)
    }
    else {
      setInfoo(info.ar.contact)
      setBasscont(basic.ar.contact)
      setBasscontform(basic.ar.contact.form)
    }
  }, [lang])

  return (
    <section id="contact">
      <h5 className="text-praim6">{basscont.head1}</h5>
      <h2 className="mb-14">
        {basscont.head2}
        <span className="text-praim6"> {basscont.head3}</span>
      </h2>
      <div className="flex-bet-center items-start font-inter max-tab-min:flex-col">
        <div className="*:flex *:gap-2 *:mb-16">
          <div>
            <span className="btn active-sec w-[60px] text-[24px] p-2">
              <i className="fa-solid fa-phone"></i>
            </span>
            <div>
              <p className="text-praim4">{basscont.list1}</p>
              <h3 dir="ltr"><a href={"tel:" + info.en.contact.number}>{info.en.contact.number}</a></h3>
            </div>
          </div>
          <div>
            <span className="btn active-sec w-[60px] text-[24px] p-2">
              <i className="fa-regular fa-envelope"></i>
            </span>
            <div>
              <p className="text-praim4">{basscont.list2}</p>
              <h3><a href={"mailto:?to=" + info.en.contact.email}>{info.en.contact.email}</a></h3>
            </div>
          </div>
          <div>
            <span className="btn active-sec w-[60px] text-[24px] p-2">
              <i className="fas fa-map-marker-alt"></i>
            </span>
            <div>
              <p className="text-praim4">{basscont.list3}</p>
              <h3>{infoo.address}</h3>
            </div>
          </div>
        </div>
        <div className="max-mob:w-full">
          <form onSubmit={sData}>
            <div className="flex-bet-center items-start gap-6 max-mob:flex-col max-mob:gap-0">
              <input
                type="text"
                name="full_name"
                id="full_name"
                placeholder={basscontform.inputN}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder={basscontform.inputE}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                type="tel"
                name="tel"
                id="tel"
                className={lang == "en" ? "text-left" : "text-right"}
                placeholder={basscontform.inputP}
                onChange={(e) => setNumber(e.target.value)}
                required
              />
            </div>
            <textarea
              className="h-[170px] pt-4"
              name="message"
              id="message"
              placeholder={basscontform.inputM}
              onChange={(e) => setMsg(e.target.value)}
              required
            ></textarea>
            <div>
              <input
                className={(lang == "en" ? "pl-0" : "pr-0") + " btn active-sec w-[200px] border-none"}
                type="submit"
                value={basscontform.inputB}
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
