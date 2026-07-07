const VideoSection = () => {
  return (

    <section
      className="
      bg-[#02000a]
      px-6
      py-20
      flex
      justify-center
      "
    >

      <div
        className="
        max-w-5xl
        w-full
        h-[500px]
        bg-[#15101f]
        rounded-3xl
        shadow-2xl
        overflow-hidden
        "
      >

        <video
          className="w-full h-full object-cover"
          controls
        >

          <source 
          src="/demo.mp4" 
          type="video/mp4"
          />

        </video>

      </div>


    </section>

  )
}


export default VideoSection;