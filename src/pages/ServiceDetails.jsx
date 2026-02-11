import { useParams } from 'react-router-dom'
import { services } from '../data/services'


export default function ServiceDetails() {
const { id } = useParams()


const service = services.find((s) => s.id === id)


if (!service) return <h2 className="text-center py-20">Service Not Found</h2>


return (
<div className="max-w-4xl mx-auto py-20 px-4">
<h1 className="text-4xl font-bold text-primary">{service.title}</h1>
<p className="text-gray-400 mt-6 text-lg">{service.description}</p>
</div>
)
}