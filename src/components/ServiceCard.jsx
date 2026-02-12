import { Link } from 'react-router-dom'


export default function ServiceCard({ service }) {
    return (
        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-semibold text-primary">{service.title}</h3>
            <p className="text-gray-400 my-3">{service.shortDescription}</p>


            <Link
                to={`/services/${service.id}`}
                className="text-secondary font-semibold"
            >
                Read More →
            </Link>
        </div>
    )
}