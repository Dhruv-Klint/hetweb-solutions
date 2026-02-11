import { services } from '../data/services'
import ServiceCard from '../components/ServiceCard'


export default function Services() {
return (
<div className="max-w-6xl mx-auto py-16 px-4">
<h2 className="text-4xl font-bold text-center mb-10">Our Services</h2>


<div className="grid md:grid-cols-3 gap-6">
{services.map((service) => (
<ServiceCard key={service.id} service={service} />
))}
</div>
</div>
)
}