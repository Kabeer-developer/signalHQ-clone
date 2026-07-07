const Product = () => {


const products=[

{
tag:"TAX ASSIST",
title:"Instant, reliable answers to your tax questions.",
points:[
"Direct IRS citations & court ruling references",
"Federal & SALT coverage across all 50 states",
"Context-aware answers",
"Exportable memos for client-ready documentation"
],
img:"/tax.png"
},


{
tag:"CLIENT ORGANIZER",
title:"Client Data in One Place. Structured. Searchable.",
points:[
"AI document intake; drag, drop, done",
"K-1, 1099s, W-2s auto-extraction at 95%+ accuracy",
"360° client overview with smart categorization",
"Automated binders"
],
img:"/client.png"
},


{
tag:"CLIENT REVIEW",
title:"Get workpaper insight. Zero Manual Grind.",
points:[
"Current-year category rollups",
"Multi-entity support for 1040, 1065, 1120-S",
"Auto-Generated Workpapers",
"AI-drafted first-pass returns; 70% faster prep"
],
img:"/review.png",
soon:true
}

];


return (

<section
id="features"
className="
bg-[#02000a]
text-white
py-32
px-6
"
>


<div className="max-w-5xl mx-auto text-center">


<span
className="
border
border-white/20
px-5
py-2
rounded-full
text-xs
tracking-widest
text-purple-200
"
>

• PRODUCT

</span>



<h2
className="
text-4xl
font-bold
mt-10
mb-20
"
>

Cut research and preparation hours with AI-driven automation.

</h2>




<div className="space-y-10">


{

products.map((item,index)=>(


<div

key={index}

className="
grid
md:grid-cols-2
border
border-white/10
rounded-2xl
overflow-hidden
bg-[#090512]
min-h-[300px]
"

>


{/* text side */}

<div

className={`
p-12
text-left
flex
flex-col
justify-center

${index===1 && "md:order-2"}

`}

>


<p
className="
text-purple-300
text-xs
tracking-widest
mb-5
"
>

• {item.tag}

</p>



<h3
className="
text-2xl
font-bold
mb-6
"
>

{item.title}

</h3>



<ul className="space-y-3">


{
item.points.map((p,i)=>(

<li 
key={i}
className="text-gray-400"
>

☑ {p}

</li>

))

}


</ul>



{
item.soon &&

<span className="
mt-8
border
border-white/20
rounded-full
px-4
py-1
w-fit
text-sm
">

Coming soon

</span>

}


</div>





{/* image side */}

<div

className="
flex
items-center
justify-center
bg-black/30
"

>

<img

src={item.img}

className="
w-72
opacity-90
"

/>


</div>




</div>


))

}


</div>


</div>



</section>


)

}


export default Product;