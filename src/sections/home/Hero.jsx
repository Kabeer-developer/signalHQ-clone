const Hero = () => {
  return (

    <section
      className="
      min-h-screen
      bg-[#02000a]
      text-white
      flex
      flex-col
      justify-center
      items-center
      text-center
      px-6
      relative
      overflow-hidden
      "
    >


      {/* background glow */}
      <div
        className="
        absolute
        w-[800px]
        h-[300px]
        bg-purple-300/20
        blur-[120px]
        rounded-full
        "
      >
      </div>



      {/* small heading */}

      <p
        className="
        relative
        uppercase
        tracking-[8px]
        text-purple-200
        text-sm
        mb-10
        "
      >

        • AI Infrastructure For Tax

      </p>




      {/* Main Heading */}

      <h1
        className="
        relative
        text-6xl
        md:text-8xl
        font-bold
        max-w-5xl
        leading-tight
        "
      >

        Powering Tax Experts.
        <br />

        Fueling Firm Growth.


      </h1>




      {/* Subtitle */}

      <p
        className="
        relative
        text-gray-400
        text-xl
        mt-8
        "
      >

        Smart Automation Built for Scaling Tax Firms

      </p>




      {/* Button */}

      <button
        className="
        relative
        mt-14
        bg-[#ffecef]
        text-black
        px-10
        py-4
        rounded-xl
        font-bold
        "
      >

        Book a Demo →

      </button>


    </section>

  )
}


export default Hero;