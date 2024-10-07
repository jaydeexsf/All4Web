import Link from "next/link"
import { TitleLogo } from "./Title"
import { BsFacebook } from "react-icons/bs"
import { AiFillBehanceCircle, AiFillInstagram, AiFillLinkedin } from "react-icons/ai"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='grid-4'>
            <div className='logo'>
              <TitleLogo title='creative' caption='7' className='logobg' />
              <br />
              <span>
                Questions? Reach us <br /> Monday – Friday from 9 am to 6 pm
              </span>
              <br />
              <br />
              <h3>+27 79 216 2664</h3>
              <br />
              <button className='button-primary'>Request for quote</button>
            </div>
            <ul>
              <h3>COMPANY</h3>
              <li>
                <Link href='/'>About Us</Link>
              </li>
              <li>
                <Link href='/'>Our team</Link>
              </li>
              <li>
                <Link href='/projects'>Projects</Link>
              </li>
              {/* <li>
                <Link href='/'>Blog</Link>
              </li> */}
              <li>
                <Link href='/demo-designs'>Demo design system</Link>
              </li>
              <li>
                <Link href='/contact'>Contact</Link>
              </li>
            </ul>
            <ul>
              <h3>SERVICES</h3>
              <li>
                <Link href='/'>Web Design & Development</Link>
              </li>
              <li>
                <Link href='/'>Branding & Creative Services</Link>
              </li>
              <li>
                <Link href='/'>Digital Marketing</Link>
              </li>
              <li>
                <Link href='/'>E-Commerce</Link>
              </li>
            </ul>
            <ul>
              <h3>CONNECT</h3>
              <div className='connect'>
                <li>
                  <Link href='/https://facebook.com/All4Web'>
                    <BsFacebook size={25} />
                  </Link>
                </li>
                {/* <li>
                  <Link href='/'>
                    <AiFillBehanceCircle size={25} />
                  </Link>
                </li> */}
                <li>
                  <Link href='/https://instagram.com/All4Web'>
                    <AiFillInstagram size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='/https://linkein/c/All4Web'>
                    <AiFillLinkedin size={25} />
                  </Link>
                </li>
              </div>
            </ul>
          </div>
          <div className='legal connect py'>
            <div className='text'>
              <span>© 2024 All4Web. ALL RIGHTS RESERVED.</span>
            </div>
            <div className='connect'>
              <span> &nbsp; | &nbsp; </span>
              <Link path="terms&conditions"><span>TERMS & CONDITIONS</span></Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
