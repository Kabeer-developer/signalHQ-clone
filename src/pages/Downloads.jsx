import Testimonials from "../sections/home/Testimonials";
import SecurityPreview from "../sections/home/SecurityPreview";
import CTA from "../sections/home/CTA";
import Footer from "../components/layout/Footer";


const Downloads=()=>{


const resources=[

{
img:"/res1.png",
title:"Post–Tax Season Debrief Template",
date:"Apr 22, 2026"
},

{
img:"/res2.png",
title:"2026 Tax Strategies Workbook",
date:"Oct 15, 2025"
},

{
img:"/res3.png",
title:"2025–2028 Tax Strategy Guide for Individuals and Owners",
date:"Oct 15, 2025"
},

{
img:"/res4.png",
title:"2026 Individual IRS Inflation Adjustments Guide",
date:"Oct 15, 2025"
}

];



return (

<>


<section className="
bg-white
text-black
pt-40
px-10
pb-28
">


<div className="max-w-6xl mx-auto">


<h1 className="text-6xl font-bold">

Knowledge Hub

</h1>


<p className="mt-5">

Get instant access to high quality CPA resources.

</p>




<div className="
grid
md:grid-cols-2
gap-24
mt-32
">


{

resources.map((item,i)=>(


<div key={i}>


<img

src={item.img}

className="
border
rounded-xl
w-full
"

/>



<h2 className="font-bold mt-5">

{item.title}

</h2>



<p className="text-gray-500 mt-5">

{item.date}

</p>


</div>


))

}


</div>


</div>


</section>



<Testimonials/>

<SecurityPreview/>

<CTA/>

<Footer/>


</>


)


}


export default Downloads;