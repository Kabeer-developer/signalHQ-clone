import { useState } from "react";
import Calendar from "react-calendar";

import "react-calendar/dist/Calendar.css";


const Demo = () => {


const [date,setDate] = useState(new Date());

const [time,setTime] = useState("");

const [step,setStep] = useState(1);



const slots=[

"09:00 AM",
"10:00 AM",
"11:30 AM",
"02:00 PM",
"04:30 PM"

];



return (

<section
className="
bg-[#02000a]
min-h-screen
text-white
pt-40
px-8
"
>


<div
className="
max-w-6xl
mx-auto
bg-white
text-black
rounded-2xl
p-10
"
>


{
step===1 &&

<div
className="
grid
md:grid-cols-2
gap-12
"
>


{/* Calendar */}


<div>


<h1
className="
text-3xl
font-bold
mb-8
"
>

Book a Demo

</h1>


<Calendar

onChange={setDate}

value={date}

/>


</div>





{/* Slots */}


<div>


<h2
className="
text-xl
font-semibold
mb-6
"
>

Select a time

</h2>


<div className="space-y-4">


{

slots.map((item,index)=>(


<button

key={index}

onClick={()=>setTime(item)}

className={`
w-full
border
rounded-lg
p-4

${time===item && "bg-black text-white"}

`}

>

{item}

</button>


))


}


</div>



<button

disabled={!time}

onClick={()=>setStep(2)}

className="
mt-10
bg-black
text-white
px-8
py-3
rounded-lg
"

>

Next

</button>




</div>



</div>

}







{
step===2 &&


<div className="max-w-xl mx-auto">


<h1 className="text-3xl font-bold">

Enter Details

</h1>


<p className="mt-3 text-gray-500">

{date.toDateString()} at {time}

</p>



<div className="space-y-5 mt-10">


<input

placeholder="Your name *"

className="
border
w-full
p-4
rounded-lg
"

/>



<input

placeholder="Email address *"

className="
border
w-full
p-4
rounded-lg
"

/>



<input

placeholder="What is this meeting about? *"

className="
border
w-full
p-4
rounded-lg
"

/>



<textarea

rows="5"

placeholder="Please share anything that will help prepare for our meeting."

className="
border
w-full
p-4
rounded-lg
"

/>




<input

placeholder="Add guests"

className="
border
w-full
p-4
rounded-lg
"

/>




<p className="text-sm text-gray-500">


By proceeding, you agree to Cal.com's Terms and Privacy Policy.


</p>




<div className="flex justify-between">


<button

onClick={()=>setStep(1)}

className="
border
px-8
py-3
rounded-lg
"

>

Back

</button>




<button

className="
bg-black
text-white
px-8
py-3
rounded-lg
"

>

Confirm

</button>


</div>



</div>



</div>


}




</div>


</section>

)


}


export default Demo;