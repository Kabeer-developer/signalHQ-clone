import { Mail } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";


import Testimonials from "../sections/home/Testimonials";
import SecurityPreview from "../sections/home/SecurityPreview";
import CTA from "../sections/home/CTA";
import Footer from "../components/layout/Footer";



const Contact = () => {


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


<div
className="
max-w-6xl
mx-auto
grid
md:grid-cols-2
gap-20
"
>


{/* LEFT SIDE */}


<div>


<h1
className="
text-6xl
font-bold
"
>

Let’s connect

</h1>



<p
className="
text-gray-400
mt-8
text-lg
max-w-md
"
>

Have questions? We're here to help. Reach out to us and our team will get back to you as soon as possible.

</p>




<div className="mt-16">


<p className="text-gray-400">

Email

</p>



<div
className="
flex
items-center
gap-3
mt-3
"
>


<Mail className="text-purple-300"/>


<span>

contact@signalshq.io

</span>


</div>


</div>




<div className="mt-12">


<p className="text-gray-400">

Follow us

</p>


<div
className="
mt-4
bg-purple-500/20
w-12
h-12
rounded-lg
flex
items-center
justify-center
"
>

<FaLinkedin size={24}/>

</div>



</div>



</div>





{/* RIGHT FORM */}



<form
className="
bg-white/5
border
border-white/10
rounded-2xl
p-10
space-y-6
"
>



<div>


<label>

Name

</label>


<input

className="
mt-3
w-full
bg-transparent
border
border-white/20
rounded-lg
p-4
outline-none
"

placeholder="Enter your Name"

/>


</div>






<div>


<label>

Email

</label>


<input

className="
mt-3
w-full
bg-transparent
border
border-white/20
rounded-lg
p-4
outline-none
"

placeholder="Enter your Email"

/>


</div>







<div>


<label>

Message

</label>


<textarea

rows="6"

className="
mt-3
w-full
bg-transparent
border
border-white/20
rounded-lg
p-4
outline-none
"

placeholder="Enter your message"

>


</textarea>


</div>




<button

className="
bg-[#ffecef]
text-black
font-bold
px-8
py-4
rounded-xl
"

>

Submit

</button>



</form>




</div>


</section>




<Testimonials/>


<SecurityPreview/>


<CTA/>


<Footer/>



</>

)

}



export default Contact;