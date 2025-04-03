import { useState } from "react"
import { info } from "../../info"

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [msg, setMsg] = useState('')
  const sData = (e) => {
    e.preventDefault()
    window.location.assign(`mailto:?to=${info.contact.email}&amp;subject=worker&amp;body=name: ${name} %0D%0A email: ${email} %0D%0A number: ${number} %0D%0A message: ${msg}`)
  }

  return (
    <section id="contact">
      <h5 className="text-praim6">Contact</h5>
      <h2 className="mb-14">Let's Discuss Your <span className="text-praim6"> Projects</span></h2>
      <div className="flex-bet-center items-start font-inter max-tab-min:flex-col">
        <div className="*:flex *:gap-2 *:mb-16">
          <div>
            <span className="btn active-sec w-[60px] text-[24px] p-2">
              <i className="fa-solid fa-phone"></i>
            </span>
            <div>
              <p className="text-praim4">Call me</p>
              <h3><a href={"tel:" + info.contact.number}>{info.contact.number}</a></h3>
            </div>
          </div>
          <div>
            <span className="btn active-sec w-[60px] text-[24px] p-2">
              <i className="fa-regular fa-envelope"></i>
            </span>
            <div>
              <p className="text-praim4">Email me</p>
              <h3><a href={"mailto:?to=" + info.contact.email}>{info.contact.email}</a></h3>
            </div>
          </div>
          <div>
            <span className="btn active-sec w-[60px] text-[24px] p-2">
              <i className="fas fa-map-marker-alt"></i>
            </span>
            <div>
              <p className="text-praim4">Address</p>
              <h3>{info.contact.address}</h3>
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
                placeholder="Full name"
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                type="tel"
                name="tel"
                id="tel"
                placeholder="Phone number"
                onChange={(e) => setNumber(e.target.value)}
                required
              />
            </div>
            <textarea
              className="h-[170px] pt-4"
              name="message"
              id="message"
              placeholder="Message"
              onChange={(e) => setMsg(e.target.value)}
              required
            ></textarea>
            <div>
              <input
                className="btn active-sec w-[200px] pl-0 border-none"
                type="submit"
                value="Send Message"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
