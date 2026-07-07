import {
  Calendar,
  Search,
  Lightbulb
} from "lucide-react";


const UseCase = () => {


const cases=[

{
icon:<Calendar/>,
title:"Always Current on Tax Rules",
desc:
"Delivers the latest updates across SALT and Federal taxes directly in your workflow."
},


{
icon:<Search/>,
title:"Turn Raw Data into Insight",
desc:
"Uses AI to locate, organize, and surface client insights hidden in client documents."
},


{
icon:<Lightbulb/>,
title:"Surface Savings & Risks",
desc:
"Analyze your client data to unlock opportunities and spot risks proactively."
}

];


return (


<section

id="usecase"

className="
bg-[#02000a]
text-white
py-32
px-6
"

>


<div className="max-w-5xl mx-auto text-center">


<span className="
border border-white/20
rounded-full
px-5 py-2
text-xs
text-purple-200
">

• USE CASE

</span>



<h2 className="
text-4xl
font-bold
mt-10
mb-16
">

Focus on high-value client outcomes.

</h2>



<div className="grid md:grid-cols-3 gap-6">


{
cases.map((item,i)=>(


<div

key={i}

className="
bg-white/5
border
border-white/10
rounded-xl
p-8
text-left
"

>


<div className="
bg-purple-400/20
w-fit
p-3
rounded-lg
mb-8
">

{item.icon}

</div>


<h3 className="font-bold mb-3">

{item.title}

</h3>


<p className="text-gray-400 text-sm">

{item.desc}

</p>


</div>


))

}


</div>


</div>


</section>


)

}


export default UseCase;