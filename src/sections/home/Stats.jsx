const Stats = () => {


const data=[

{
num:"4+ hrs",
text:"Time saved"
},

{
num:"2X",
text:"Advisory Revenue"
},

{
num:"95%+",
text:"Client Satisfaction"
}

];


return (

<section
className="
bg-[#02000a]
text-white
text-center
px-6
py-20
"
>


<h2
className="
text-5xl
font-bold
max-w-4xl
mx-auto
"
>

Cut research and preparation hours with AI-driven automation.

</h2>


<p
className="
text-gray-400
mt-6
max-w-3xl
mx-auto
text-lg
"
>

One reliable layer for authoritative answers, automated intake and extraction, and streamlined prep to help your firm cut busy-season grind and redirect time to advisory.

</p>



<div
className="
flex
justify-center
gap-20
mt-16
"
>


{
data.map((item,index)=>(

<div key={index}>

<h3 className="text-5xl font-bold">
{item.num}
</h3>

<p className="text-gray-400 mt-2">
{item.text}
</p>


</div>

))
}


</div>


</section>

)

}


export default Stats;