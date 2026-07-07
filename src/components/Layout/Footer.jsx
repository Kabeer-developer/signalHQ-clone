import { Link } from "react-router-dom";


const Footer = () => {


return (

<footer
className="
bg-[#02000a]
text-white
px-10
py-20
border-t
border-white/10
"
>


<div
className="
max-w-7xl
mx-auto
grid
md:grid-cols-4
gap-10
"
>


{/* LOGO */}

<div>


<Link
to="/"
className="
text-2xl
font-bold
"
>

✣ SignalsHQ

</Link>


<p className="text-gray-400 mt-5">

Smart Automation Built for Scaling Tax Firms.

</p>


<Link 
to="/contact"
className="block mt-6"
>

Contact

</Link>


</div>






{/* PRODUCT */}


<div>


<h3 className="text-gray-400">

Product

</h3>



<Link
to="/#features"
className="block mt-5"
>

Features

</Link>



<Link
to="/#usecase"
className="block mt-4"
>

Use Case

</Link>


</div>







{/* RESOURCES */}


<div>


<h3 className="text-gray-400">

Resources

</h3>



<Link
to="/blog"
className="block mt-5"
>

Articles & Insights

</Link>



<Link
to="/resources"
className="block mt-4"
>

Downloads

</Link>



<Link
to="/security"
className="block mt-4"
>

Security

</Link>



<Link
to="/evaluate"
className="block mt-4"
>

Evaluate Your Firm

</Link>


</div>






{/* COMPANY */}


<div>


<h3 className="text-gray-400">

Company

</h3>



<Link
to="/privacy"
className="block mt-5"
>

Privacy policy

</Link>



<Link
to="/terms"
className="block mt-4"
>

Terms conditions

</Link>




<Link
to="/contact"
className="block mt-4"
>

Contact us

</Link>


</div>



</div>






<p
className="
text-center
text-gray-500
mt-20
border-t
border-white/10
pt-8
"
>

© 2026 SignalsHQ.

</p>



</footer>

)


}


export default Footer;