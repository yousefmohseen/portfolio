import { info } from "../../info";

const Footer = () => {
  let d = new Date();
  let year = d.getFullYear();
  return (
    <footer>
      <div> 
        © {year}. All Rights Reserved
      </div>
      <div>
        Develpoment by {info.fname}
      </div>
      <div className="flex-bet-center items-start gap-4">
        {info.social?.map((item, index) => {
          return (
            <span className="size-7 active-sec text-center rounded-full" key={index}>
              <a className="block size-full p-[3px] rounded-full" href={item.link}>
                <i className={item.iconclass}></i>
              </a>
            </span>
          )
        })}
      </div>
    </footer>
  )
}

export default Footer
