import Testimonials from "../sections/home/Testimonials";
import SecurityPreview from "../sections/home/SecurityPreview";
import CTA from "../sections/home/CTA";
import Footer from "../components/layout/Footer";


const Articles = () => {


const posts=[

{
img:"/blog1.png",
title:
"Beyond your cloud tax software: the AI prep layer on top",
date:"Jun 25, 2026",
tags:["CPA Workflow & Automation","AI in Tax & Security"]
},

{
img:"/blog2.png",
title:
"What practice-management software doesn't do: automating the prep",
date:"Jun 25, 2026",
tags:["Firm Practice Management"]
},

{
img:"/blog3.png",
title:
"2027 HSA Contribution Limits and HDHP Rules",
date:"Jun 24, 2026",
tags:["Tax Law & Policy Updates","Blog"]
},

{
img:"/blog4.png",
title:
"Wyoming Tax Deadlines 2026: What Actually Applies",
date:"Jun 24, 2026",
tags:["State Tax Deadlines"]
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

Articles & Insights

</h1>


<p className="mt-6">

Get insights and emerging trends shaping the future of tax

</p>




<div className="
grid
md:grid-cols-2
gap-20
mt-32
">


{

posts.map((p,i)=>(


<div key={i}>


<img
src={p.img}
className="
rounded-xl
w-full
"
/>


<h2 className="font-bold mt-5">

{p.title}

</h2>


<p className="text-gray-500 mt-3">

{p.date}

</p>


<div className="flex gap-2 mt-5">


{
p.tags.map((t,index)=>(


<span

key={index}

className="
border
px-3
py-1
text-sm
"

>

{t}

</span>


))
}


</div>



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


export default Articles;