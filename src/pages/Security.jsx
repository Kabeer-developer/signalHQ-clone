import { Lock, Radio, ShieldCheck, CheckCircle } from "lucide-react";

import Testimonials from "../sections/home/Testimonials";
import CTA from "../sections/home/CTA";
import Footer from "../components/layout/Footer";


const Security = () => {


const security=[

{
icon:<Lock/>,
title:"End-to-end Encryption",
desc:"SOC 2 Type II"
},

{
icon:<Radio/>,
title:"Monitoring Systems",
desc:
"24/7 intrusion detection. Quarterly scans & annual pen tests"
},

{
icon:<ShieldCheck/>,
title:"Access Control",
desc:
"Multi-Factor Authentication & Role-based permissions"
},

{
icon:<CheckCircle/>,
title:"Regulation Compliant",
desc:
"TLS 256-bit in transit & at rest"
}

];



const privacy=[

{
title:"No AI Training on Your Data",
desc:
"Your data and your clients’ data is never used to train, fine-tune, or improve AI models. Period."
},


{
title:"No Data Retention by Partners",
desc:
"Our AI technology partners never store or train on your client data."
},


{
title:"No Humans in the Loop",
desc:
"Only your team has access to your data. We never use manual human review on our side."
},


{
title:"Secure Document Processing",
desc:
"Documents are processed through our proprietary server, redacted, and securely stored within AWS infrastructure."
}

];




return (

<>


<section
className="
bg-[#02000a]
text-white
pt-40
pb-28
px-6
"
>


<div className="max-w-6xl mx-auto">


{/* Heading */}

<div className="text-center">


<h1
className="
text-5xl
font-bold
"
>

Security & Compliance You Can Trust

</h1>


<p
className="
text-gray-400
mt-8
max-w-3xl
mx-auto
text-lg
"
>

We safeguard your clients’ most sensitive financial data with enterprise-grade security and rigorous compliance protocols.

</p>


</div>




{/* Security Cards */}


<div
className="
grid
md:grid-cols-4
gap-6
mt-20
"
>


{

security.map((item,index)=>(


<div

key={index}

className="
bg-white/5
border
border-white/10
rounded-xl
p-8
"

>


<div className="text-purple-300">

{item.icon}

</div>


<h3 className="font-bold mt-6">

{item.title}

</h3>


<p className="text-purple-300 mt-3">

{item.desc}

</p>


</div>


))

}


</div>





{/* Privacy */}

<div
className="
grid
md:grid-cols-2
gap-8
mt-24
"
>


{

privacy.map((item,index)=>(


<div

key={index}

className="
bg-white/5
border
border-white/10
rounded-xl
p-8
"

>


<h3 className="text-2xl font-bold">

{item.title}

</h3>


<p className="text-gray-400 mt-5">

{item.desc}

</p>



</div>


))


}


</div>



</div>


</section>



<Testimonials/>


<CTA/>


<Footer/>


</>


)


}


export default Security;