export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#products", label: "Products" },
  { href: "#projects", label: "Projects" },
  { href: "#gallery", label: "Gallery" },
] as const;

export const contact = {
  phones: [
    { display: "011 443 5953", href: "tel:+94114435953" },
    { display: "077 416 1678", href: "tel:+94774161678" },
  ],
  emails: [
    "sales@ceylonairduct.com",
    "athula@ceylonairduct.com",
    "nalin@ceylonairduct.com",
  ],
  quoteEmail: "info@ceylonairduct.com",
  whatsapp: "https://wa.me/94774161678",
  factory: "538/B, Heenkenda, Ragama",
  salesOffice: "No 1005, Kandy Road, Kelaniya",
  mapEmbed:
    "https://www.google.com/maps?q=538/B,+Heenkenda,+Ragama&z=15&output=embed",
  hours: [
    { days: "Monday to Friday", time: "8:00 AM - 5:00 PM" },
    { days: "Saturday", time: "8:00 AM - 1:00 PM" },
    { days: "Sunday", time: "Closed" },
  ],
} as const;

export type Product = {
  name: string;
  image: string;
  description: string;
};

export const manufactured: Product[] = [
  {
    name: "Square Ducts",
    image: "/images/Square-Ducts.png",
    description:
      "Precision-fabricated rectangular ductwork, dimensionally accurate and built for airtight installation in commercial and industrial HVAC systems.",
  },
  {
    name: "Spiral Ducts",
    image: "/images/Spiral-Ducts.png",
    description:
      "Lightweight, high-strength spiral ducts with smooth airflow, minimal leakage and fast installation.",
  },
  {
    name: "Grills and Diffusers",
    image: "/images/Grills-and-Diffusers.png",
    description:
      "Aluminium grills and diffusers, now made on our own production line, for even air distribution and a clean finish.",
  },
  {
    name: "Volume Control Dampers",
    image: "/images/Volume-Control-Dampers.png",
    description:
      "Robust dampers with tight sealing and smooth actuation for zoning and balancing duct networks.",
  },
  {
    name: "Sound Attenuators",
    image: "/images/Sound-Attenuators.png",
    description:
      "Acoustic attenuators that cut fan and system noise while keeping airflow efficient.",
  },
];

export const imported: Product[] = [
  {
    name: "Galvanized Sheet",
    image: "/images/Galvanized-Sheet.png",
    description:
      "High-grade galvanized sheet with uniform coating for durable fabrication and long-term corrosion protection.",
  },
  {
    name: "Galvanized Coil",
    image: "/images/Galvanized-Coil.png",
    description:
      "Precision-rolled coil for large production runs, with consistent thickness and excellent formability.",
  },
  {
    name: "Disc Valves",
    image: "/images/Disc-Valves.png",
    description:
      "Durable disc valves for air balancing and flow isolation in ventilation systems.",
  },
  {
    name: "Four Way Diffusers",
    image: "/images/Four-Way-Diffusers.png",
    description:
      "Four-way diffusers for uniform air distribution in large open-ceiling spaces.",
  },
  {
    name: "Insulation Material",
    image: "/images/Insulation-material.png",
    description:
      "Thermal and acoustic insulation for duct lining that improves energy efficiency and reduces noise.",
  },
];
