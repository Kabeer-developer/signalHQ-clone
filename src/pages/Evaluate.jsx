import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/layout/Footer";


const Evaluate = () => {


const [step,setStep] = useState(1);


const [hours,setHours] = useState({
collection:1.25,
validation:0.5,
workpaper:1.75,
collab:0.5,
prep:2.5,
review:1,
entry:0.5
});


const [firm,setFirm]=useState({

returns:10000,
cost:50,
revenue:500,
growth:30,
associates:2,
share:30

});



const total = Object.values(hours)
.reduce((a,b)=>a+b,0);



return (


<>

<section
className="
bg-[#faf5ff]
min-h-screen
pt-36
px-8
text-black
"
>



{/* STEPS */}


<div
className="
flex
justify-center
gap-20
mb-16
"
>


<p className={step===1?"font-bold text-purple-600":""}>
① Time
</p>

<p className={step===2?"font-bold text-purple-600":""}>
② Your firm
</p>


<p className={step===3?"font-bold text-purple-600":""}>
③ The number
</p>



</div>







<div className="max-w-3xl mx-auto">



{/* STEP 1 */}

{
step===1 &&

<div>


<p className="text-purple-500 font-bold">
— STEP 1 • DIAGNOSE
</p>


<h1 className="text-4xl font-bold mt-3">

How your hours land on one return.

</h1>



<div className="mt-10 space-y-5">


{

Object.keys(hours).map(item=>(


<div
key={item}
className="
bg-white
border
rounded-xl
p-5
flex
justify-between
items-center
"
>


<h3 className="capitalize font-semibold">

{item}

</h3>



<div className="flex gap-5">


<button
onClick={()=>setHours({...hours,[item]:hours[item]-0.25})}
>

−

</button>


<b>{hours[item]}</b>


<button
onClick={()=>setHours({...hours,[item]:hours[item]+0.25})}
>

+

</button>


</div>



</div>


))

}


</div>



<h2 className="text-2xl font-bold mt-10">

{total.toFixed(2)} hrs / return

</h2>



<button

onClick={()=>setStep(2)}

className="
mt-8
bg-red-500
text-white
px-8
py-3
rounded-xl
"
>

Next: scale it to your firm →

</button>


</div>


}








{/* STEP 2 */}


{
step===2 &&


<div>


<p className="text-purple-500 font-bold">

— STEP 2 • SCALE

</p>


<h1 className="text-4xl font-bold mt-3">

Now we scale it to your firm.

</h1>




<div className="grid grid-cols-2 gap-5 mt-10">


{

Object.keys(firm).map(item=>(


<div

key={item}

className="
bg-white
p-6
rounded-xl
border
"

>


<p className="capitalize">

{item}

</p>


<div className="flex justify-between mt-5">


<button

onClick={()=>setFirm({...firm,[item]:firm[item]-10})}

>

-

</button>


<b>{firm[item]}</b>


<button

onClick={()=>setFirm({...firm,[item]:firm[item]+10})}

>

+

</button>


</div>



</div>



))


}


</div>



<div className="flex justify-between mt-10">



<button
onClick={()=>setStep(1)}
className="border px-8 py-3 rounded-xl"
>

← Back

</button>



<button
onClick={()=>setStep(3)}
className="
bg-red-500
text-white
px-8
py-3
rounded-xl
"
>

See what your season costs →

</button>



</div>


</div>


}









{/* STEP 3 */}

{

step===3 &&


<div className="text-center">


<p className="text-purple-500 font-bold">

— STEP 3 • RESULTS

</p>


<h1 className="text-4xl font-bold mt-3">

Here is where your season goes.

</h1>




<div
className="
mt-10
bg-[#100719]
text-white
rounded-3xl
p-12
"
>


<h2 className="text-5xl font-bold">

$520,000

</h2>


<p className="mt-4">

Estimated annual savings

</p>



<div className="grid grid-cols-2 gap-5 mt-10">


<div>

<h2>{total.toFixed(2)}</h2>

<p>Hours Saved</p>

</div>



<div>

<h2>2.8 hrs</h2>

<p>Per Return</p>

</div>


</div>


</div>




<div className="flex justify-between mt-10">


<button
onClick={()=>setStep(2)}
className="border px-8 py-3 rounded-xl"
>

← Back

</button>



<Link

to="/demo"

className="
bg-red-500
text-white
px-8
py-3
rounded-xl
"

>

Book a workflow review →

</Link>



</div>



</div>


}



</div>



</section>



<Footer/>


</>


)

}


export default Evaluate;