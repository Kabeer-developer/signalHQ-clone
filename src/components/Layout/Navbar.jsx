import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";


const Navbar = () => {


  return (

    <header
      className="
      fixed
      top-0
      left-0
      w-full
      z-50
      bg-[#02000a]
      "
    >


      <nav
        className="
        max-w-7xl
        mx-auto
        h-24
        flex
        items-center
        justify-between
        px-8
        "
      >


        {/* LOGO */}

        <Link
          to="/"
          className="
          flex
          items-center
          text-white
          text-2xl
          font-semibold
          "
        >

          <span
            className="
            text-purple-500
            text-3xl
            mr-2
            "
          >

            ✣

          </span>


          SignalsHQ


        </Link>




        {/* MENU */}

        <div
          className="
          hidden
          md:flex
          items-center
          gap-10
          text-white
          font-semibold
          text-lg
          "
        >



          <a href="/#features">

            Features

          </a>




          <Link to="/pricing">

            Pricing

          </Link>





          <a href="/#usecase">

            Use Case

          </a>





          <Link to="/security">

            Security

          </Link>


          {/* RESOURCES DROPDOWN */}

<div className="relative group py-4">


  <button
    className="
    flex
    items-center
    gap-2
    "
  >

    Resources

    <ChevronDown size={18}/>

  </button>




  <div
    className="
    invisible
    opacity-0

    group-hover:visible
    group-hover:opacity-100

    absolute
    top-full
    left-0

    bg-[#0c0715]
    border
    border-white/10
    shadow-xl
    rounded-xl

    w-56
    p-4

    transition-all
    duration-200
    "
  >


    <Link
      to="/blog"
      className="
      block
      py-3
      text-white
      hover:text-purple-300
      "
    >

      Articles & Insights

    </Link>




    <Link
      to="/resources"
      className="
      block
      py-3
      text-white
      hover:text-purple-300
      "
    >

      Downloads

    </Link>



  </div>


</div>






          <Link to="/contact">

            Contact

          </Link>



        </div>






        {/* BUTTON */}

        <Link

          to="/demo"

          className="
          bg-[#ffecef]
          text-black
          font-semibold
          px-7
          py-4
          rounded-xl
          hover:bg-white
          transition
          "

        >

          Book a Demo →

        </Link>





      </nav>


    </header>


  )


}


export default Navbar;