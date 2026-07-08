import Hero from "../sections/home/Hero";
import VideoSection from "../sections/home/VideoSection";
import Stats from "../sections/home/Stats";
import Problems from "../sections/home/Problems";
import Product from "../sections/home/Product";
import UseCase from "../sections/home/UseCase";
import Testimonials from "../sections/home/Testimonials";
import SecurityPreview from "../sections/home/SecurityPreview";
import CTA from "../sections/home/CTA";
import Footer from "../components/Layout/Footer";
import { Cat } from "lucide-react";
const Home=()=>{


return (

<>

<Hero/>

<VideoSection/>

<Stats/>

<Problems/>
<Product/>
<UseCase/>
<Testimonials/>
<SecurityPreview/>
<CTA/>
<Footer/>

</>


)

}


export default Home;