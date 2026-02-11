export default function Contact() {
return (
<div className="max-w-4xl mx-auto py-20 px-4">
<h1 className="text-4xl font-bold text-primary text-center">Contact Us</h1>


<form className="mt-10 space-y-4">
<input className="w-full p-3 rounded bg-gray-900" placeholder="Your Name" />
<input className="w-full p-3 rounded bg-gray-900" placeholder="Email" />
<textarea className="w-full p-3 rounded bg-gray-900" rows="5" placeholder="Message" />


<button className="bg-primary px-6 py-3 rounded-xl text-black font-semibold">
Send Message
</button>
</form>
</div>
)
}