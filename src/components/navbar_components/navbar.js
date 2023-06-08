import React, {useState} from 'react'
import logo from "../../assets/images/general_teeket_logo.svg"

function Navbar() {
  
  const [toggle, setToggle] = useState(false)

  const toggleNavbar = () => {
    setToggle(!toggle)
     console.log("pressed")
  }

  return (
    <nav class="flex justify-between pt-10 px-5">
      <img src={logo} alt="teeket-logo" />
      <button type='button' 
       class="bg-[#001133] py-3 px-5 text-[#FFFFFF] rounded-[12px] text-sm- font-bold"
       onClick={toggleNavbar}
           >
              Menu
            </button>
        {/* <ul class="list-none">
          <li style={{marginTop: "1rem"}}><a href="#" style={{textDecoration: "none"}}>Home</a></li>
          <li style={{marginTop: "1rem"}}><a href="#" style={{textDecoration: "none"}}>Discover Events</a></li>
          <li style={{marginTop: "1rem"}}><a href="#" style={{textDecoration: "none"}}>Login</a></li>
        </ul> */}
     </nav>
  )
}

export default Navbar