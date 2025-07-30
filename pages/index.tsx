import { PROPERTYLISTINGSAMPLE } from "@/constants";

const PropertyCard = ({ property }) => (
  <div className="border rounded shadow-md">
    <img src={property.image} alt={property.name} className="h-40 w-full object-cover" />
    <div className="p-4">
      <h2 className="font-bold">{property.name}</h2>
      <p>${property.price} per night</p>
      <p>⭐ {property.rating}</p>
    </div>
  </div>
);

<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
  {PROPERTYLISTINGSAMPLE.map((p, idx) => (
    <PropertyCard key={idx} property={p} />
  ))}
</section>
