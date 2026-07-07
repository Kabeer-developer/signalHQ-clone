const Problems = () => {


const problems=[

"Review queue is jammed again",

"W-2s and 1099s everywhere - help!",

"K-1s are slowing everything down",

"What's the nexus rule in California?",

"We're double-entering the same data!"

];


return (

<section
className="
bg-[#02000a]
py-10
"
>


<div
className="
flex
flex-wrap
justify-center
gap-5
"
>


{

problems.map((item,i)=>(


<div
key={i}
className="
bg-white/10
text-white
px-6
py-4
rounded-full
border
border-white/10
"
>

{item}


</div>


))

}



</div>


</section>


)

}


export default Problems;