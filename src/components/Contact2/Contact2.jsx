import React from 'react'
import { Link } from 'react-scroll'

const Contact2 = () => {
  return (
    <section id='contact2'>
        <div className="size-full p-sp5 pt-0 pb-0 bg-praim8 rounded-4xl rotate-2 flex-bet-center gap-6 max-tab:pl-sp2 max-tab:pr-sp2 max-tab-min:p-sp4 max-tab-min:flex-col max-tab-min:justify-center">
          <img className="absolute left-0 top-0" src="/portfolio/src/assets/image/lines.svg" alt="" />
          <div className="w-[489px] z-10 max-tab-min:w-full">
            <h1 className="text-[42px] font-semibold mb-2.5 max-tab-min:text-[36px] ">Try me out, risk free!</h1>
            <p className="text-[20px] font-normal">
              If you're not happy with the design after the first draft,
              I'll refund your deposit,
              <span className="font-bold"> no questions asked</span>
            </p>
          </div>
          <button className="btn active-sec z-10" type="button">
            <Link
               className="block size-full p-3"
              activeClass=" "
              to="contact"
              spy={true}
              smooth={true}
              ignoreCancelEvents={false}
              offset={-82}
              duration={250}
            >
              <span className="mr-1.5 text-[14px] font-semibold">Contact </span>
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </button>
        </div>
      </section>
  )
}

export default Contact2
