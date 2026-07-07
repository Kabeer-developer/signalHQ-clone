import Testimonials from "../sections/home/Testimonials";
import SecurityPreview from "../sections/home/SecurityPreview";
import CTA from "../sections/home/CTA";
import Footer from "../components/layout/Footer";


const Pricing = () => {


const plans = [

{
icon:"🔍",
title:"Tax Assist",
desc:
"AI-powered tax research and Q&A that gives you IRS-cited answers in seconds.",

features:[

"Instant tax research with direct IRS citations",

"Federal & SALT coverage across all 50 states",

"Court ruling references",

"Context-aware answers",

"Natural language queries",

"Exportable memos"

]

},


{
icon:"📂",
title:"Client Organizer",

desc:
"Automated document intake and extraction that turns stacks of PDFs into structured searchable client data.",


features:[

"AI document intake; drag, drop, done",

"K-1,1099s,W-2 auto-extraction with 95%+ accuracy",

"Automated binders",

"360° client overview",

"Smart categorization",

"Audit-ready trail"

]

},



{
icon:"🧠",

title:"Client Review",

desc:
"Proactive advisory insights that surface tax savings and generate strategy.",


features:[

"Current-year category rollups",

"Comprehensive schedule summaries",

"Multi-entity support:1040,1065,1120-S",

"Auto-Generated Workpapers",

"Anomaly alerts",

"AI-drafted returns; 70% faster prep"

]

}

];



return (

<>


<section
className="
bg-[#02000a]
text-white
min-h-screen
px-6
pt-40
"
>


<div className="max-w-6xl mx-auto text-center">


<span
className="
border
border-white/20
rounded-full
px-5
py-2
text-xs
text-purple-300
"
>

• PRICING

</span>



<h1
className="
text-5xl
font-bold
mt-10
"
>

Simple Subscription to Scale your Practice

</h1>




<div
className="
grid
md:grid-cols-3
gap-8
mt-20
"
>


{

plans.map((plan,index)=>(


<div

key={index}

className="
bg-white/5
border
border-white/10
rounded-2xl
p-8
text-left
"

>


<div className="text-3xl">

{plan.icon}

</div>



<h2 className="text-2xl font-bold mt-8">

{plan.title}

</h2>


<p className="text-gray-400 mt-4">

{plan.desc}

</p>



<hr className="border-white/10 my-8"/>



<ul className="space-y-4">


{

plan.features.map((f,i)=>(


<li
key={i}
className="text-gray-300"
>

✓ {f}

</li>


))

}



</ul>



<button

className="
mt-10
w-full
bg-[#ffecef]
text-black
py-3
rounded-lg
font-bold
"

>

Talk to Sales

</button>




</div>


))


}


</div>



<p className="text-gray-500 mt-10">

All plans include SOC 2 Type II compliance, E2E encryption, and dedicated onboarding.

</p>


</div>


</section>




<Testimonials/>

<SecurityPreview/>

<CTA/>

<Footer/>


</>


)


}


export default Pricing;