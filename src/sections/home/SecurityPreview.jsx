import { Lock, Radio, ShieldCheck, CheckCircle } from "lucide-react";


const SecurityPreview = () => {


const cards=[

{
icon:<Lock/>,
title:"End-to-end Encryption",
text:"SOC 2 Type II"
},

{
icon:<Radio/>,
title:"Monitoring Systems",
text:"24/7 intrusion detection Quarterly scans & annual pen tests"
},

{
icon:<ShieldCheck/>,
title:"Access Control",
text:"Multi-Factor Authentication Role-based permissions"
},

{
icon:<CheckCircle/>,
title:"Regulation Compliant",
text:"TLS 256-bit in transit & at rest"
}

];


return (

<section
className="
bg-[#02000a]
text-white
py-32
px-6
"
>


<div
className="
max-w-5xl
mx-auto
grid
md:grid-cols-2
gap-20
items-center
"
>


<div>


<h2 className="text-4xl font-bold">

Secure Conversations.
<br/>
Smarter Tax Strategies.

</h2>


<p className="text-gray-400 mt-6">

Built on industry-leading standards to keep your clients' data safe and your firm audit-ready.

</p>


<button
className="
mt-8
bg-[#ffecef]
text-black
px-6
py-3
rounded-lg
font-semibold
"
>

Find more

</button>


</div>




<div className="grid grid-cols-2 gap-5">


{
cards.map((item,i)=>(

<div

key={i}

className="
bg-white/5
border
border-white/10
rounded-xl
p-6
"

>

<div className="text-purple-300">

{item.icon}

</div>


<h3 className="font-bold mt-5">

{item.title}

</h3>


<p className="text-purple-300 text-sm mt-3">

{item.text}

</p>


</div>


))

}



</div>



</div>


</section>

)

}


export default SecurityPreview;