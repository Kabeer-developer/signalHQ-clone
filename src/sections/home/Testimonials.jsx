const Testimonials=()=>{


const reviews=[

{
text:
"Research used to be a black hole. Now, I just type the question and get a citable IRS answer in seconds.",

person:"ST",

role:"Tax Manager",

company:"Sama Tributa"

},


{
text:
"80% faster first drafts. What used to take us two days is now done in two hours.",

person:"NT",

role:"Managing Partner",

company:"Northbridge Tax Advisory"

}


];


return (

<section className="
bg-[#02000a]
text-white
py-32
px-6
">


<div className="max-w-5xl mx-auto text-center">


<span className="
border
border-white/20
px-5 py-2
rounded-full
text-xs
">

• CUSTOMER STORIES

</span>



<h2 className="
text-4xl
font-bold
mt-10
mb-16
">

Trusted by firms across the board

</h2>



<div className="grid md:grid-cols-2 gap-8">


{
reviews.map((r,i)=>(


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

<p className="italic">

"{r.text}"

</p>


<div className="flex gap-4 mt-8">


<div className="
w-10 h-10
rounded-full
bg-purple-500
flex
items-center
justify-center
">

{r.person}

</div>


<div>

<h4>{r.role}</h4>

<p className="text-purple-300">
{r.company}
</p>

</div>


</div>



</div>


))

}


</div>


</div>


</section>

)

}


export default Testimonials;