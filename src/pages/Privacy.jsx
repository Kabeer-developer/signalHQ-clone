import Footer from "../components/layout/Footer";


const Privacy = () => {


return (

<>

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
max-w-4xl
mx-auto
"
>


<h1
className="
text-5xl
font-bold
"
>

Privacy Policy

</h1>


<p className="text-gray-400 mt-5">

Last updated: 2026

</p>




<div
className="
mt-16
space-y-10
text-gray-300
leading-8
"
>



<div>

<h2 className="text-2xl text-white font-bold">

Information We Collect

</h2>

<p className="mt-4">

We collect information provided by users including contact details,
documents, and usage information required to deliver our services.

</p>

</div>





<div>

<h2 className="text-2xl text-white font-bold">

How We Use Data

</h2>

<p className="mt-4">

Your data is used to provide automation services,
improve workflows, maintain security, and support your firm.

</p>

</div>





<div>

<h2 className="text-2xl text-white font-bold">

Data Security

</h2>

<p className="mt-4">

We use encryption, monitoring systems, and access controls
to protect sensitive information.

</p>

</div>





<div>

<h2 className="text-2xl text-white font-bold">

No AI Training

</h2>

<p className="mt-4">

Your information is never used to train external AI models.

</p>

</div>





<div>

<h2 className="text-2xl text-white font-bold">

Contact

</h2>

<p className="mt-4">

For privacy questions contact us at contact@signalshq.io

</p>

</div>



</div>


</div>


</section>


<Footer/>


</>

)

}


export default Privacy;