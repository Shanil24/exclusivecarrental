/* ============================================================
   EXCLUSIVE CAR RENTAL — CAR DATABASE
   ------------------------------------------------------------
   HOW TO ADD / EDIT A CAR:
   1. Create a folder inside img/rental/ (or img/sales/) named
      exactly like the "id" below (lowercase, no spaces).
   2. Drop your photos in that folder named 1.jpg, 2.jpg, 3.jpg...
      (jpg or png both fine, just update "images" to match).
   3. Add/edit the car's entry below.
   That's it — the site reads everything from here.
   ============================================================ */

const CARS = {

  /* ───────────── CARS FOR RENT ───────────── */
  rental: {

    toyotavitz: {
      name: "Toyota Vitz",
      category: "compact",
      categoryLabel: "Compact",
      tagline: "Perfect city car",
      price: "Contact for Price",
      priceUnit: "/ day",
      specs: [
        { label: "Fuel", value: "Efficient" },
        { label: "Transmission", value: "Auto / Manual" },
        { label: "Seats", value: "5" },
        { label: "Type", value: "Hatchback" },
      ],
      description: "Perfect city car. Fuel-efficient, easy to park, and comfortable for daily driving around town or short trips.",
      images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg"],
    },

    toyotachr: {
      name: "Toyota CH-R",
      category: "compact",
      categoryLabel: "Compact",
      tagline: "Sporty compact hatchback",
      price: "€60",
      priceUnit: "/ day",
      specs: [
        { label: "Deposit", value: "€300" },
        { label: "Fuel", value: "Efficient" },
        { label: "Transmission", value: "Automatic" },
        { label: "Seats", value: "5" },
        { label: "Type", value: "Hatchback" },
      ],
      description: "A sporty compact hatchback with a roomy interior and smooth ride, great for all occasions. You can rent one starting at €50",
      images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg"],
    },

    toyotaharrier: {
      name: "Toyota Harrier",
      category: "suv",
      categoryLabel: "Suv",
      tagline: "Tall-body, extra cargo space",
      price: "€55",
      priceUnit: "/ day",
      specs: [
        { label: "Deposit", value: "€300" },
        { label: "Cargo", value: "Spacious" },
        { label: "Transmission", value: "Automatic" },
        { label: "Seats", value: "5" },
        { label: "Type", value: "Compact SUV" },
      ],
      description: "Tall-body car with large cargo space. Ideal for families and weekend trips.",
      images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg"],
    },

    toyotapasso: {
      name: "Toyota Passo",
      category: "compact",
      categoryLabel: "Compact",
      tagline: "Compact and economical",
      price: "Contact for Price",
      priceUnit: "/ day",
      specs: [
        { label: "Fuel", value: "Eco-Friendly" },
        { label: "Transmission", value: "Automatic" },
        { label: "Seats", value: "5" },
        { label: "Type", value: "Hatchback" },
      ],
      description: "Compact and economical. Great for short trips and navigating busy city streets.",
      images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg"],
    },

    toyotahilux: {
      name: "Toyota Hilux",
      category: "suv",
      categoryLabel: "Pickup",
      tagline: "The legendary workhorse",
      price: "Contact for Price",
      priceUnit: "/ day",
      specs: [
        { label: "Drive", value: "4WD" },
        { label: "Transmission", value: "Manual / Auto" },
        { label: "Seats", value: "5" },
        { label: "Type", value: "Pickup Truck" },
      ],
      description: "The legendary workhorse. Built for tough terrain, heavy loads, and long journeys.",
      images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg"],
    },

    mercedesglc: {
      name: "Mercedes GLC",
      category: "premium",
      categoryLabel: "Premium",
      tagline: "Pure luxury SUV",
      price: "Contact for Price",
      priceUnit: "/ day",
      specs: [
        { label: "Class", value: "Luxury" },
        { label: "Transmission", value: "Automatic" },
        { label: "Seats", value: "5" },
        { label: "Type", value: "SUV" },
      ],
      description: "Pure luxury SUV. Sophisticated, powerful, and impressively refined for any occasion.",
      images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg"],
    },

    nissannote: {
      name: "Nissan Note",
      category: "compact",
      categoryLabel: "Compact",
      tagline: "Modern & efficient",
      price: "Contact for Price",
      priceUnit: "/ day",
      specs: [
        { label: "Fuel", value: "Efficient" },
        { label: "Transmission", value: "Auto / Manual" },
        { label: "Seats", value: "5" },
        { label: "Type", value: "Hatchback" },
      ],
      description: "Modern and efficient hatchback with a comfortable cabin and excellent fuel economy.",
      images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg"],
    },

  },

  /* ───────────── CARS FOR SALE ─────────────
     These 3 are EXAMPLES — replace with the real
     cars your friend has for sale. Duplicate one
     of the blocks below to add more.
  */
  sales: {

    toyotacorolla: {
      name: "Toyota Corolla",
      tagline: "Reliable sedan, well maintained",
      price: "$8,500",
      year: "2016",
      mileage: "95,000 km",
      condition: "Good",
      transmission: "Automatic",
      fuelType: "Petrol",
      specs: [
        { label: "Year", value: "2016" },
        { label: "Mileage", value: "95,000 km" },
        { label: "Condition", value: "Good" },
        { label: "Transmission", value: "Automatic" },
        { label: "Fuel Type", value: "Petrol" },
        { label: "Seats", value: "5" },
      ],
      description: "Example listing — replace with real details. A dependable sedan, regularly serviced, great for daily commuting or families.",
      images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg"],
    },

    hondafit: {
      name: "Honda Fit",
      tagline: "Economical hatchback",
      price: "$6,200",
      year: "2015",
      mileage: "110,000 km",
      condition: "Good",
      transmission: "Automatic",
      fuelType: "Petrol",
      specs: [
        { label: "Year", value: "2015" },
        { label: "Mileage", value: "110,000 km" },
        { label: "Condition", value: "Good" },
        { label: "Transmission", value: "Automatic" },
        { label: "Fuel Type", value: "Petrol" },
        { label: "Seats", value: "5" },
      ],
      description: "Example listing — replace with real details. Compact, fuel-efficient, and easy to maintain — a great starter car.",
      images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg"],
    },

    toyotarav4: {
      name: "Toyota RAV4",
      tagline: "Spacious SUV, low mileage",
      price: "$14,900",
      year: "2018",
      mileage: "68,000 km",
      condition: "Excellent",
      transmission: "Automatic",
      fuelType: "Petrol",
      specs: [
        { label: "Year", value: "2018" },
        { label: "Mileage", value: "68,000 km" },
        { label: "Condition", value: "Excellent" },
        { label: "Transmission", value: "Automatic" },
        { label: "Fuel Type", value: "Petrol" },
        { label: "Seats", value: "5" },
      ],
      description: "Example listing — replace with real details. Spacious, comfortable, and capable — ideal family SUV with low mileage.",
      images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg"],
    },

  },

/* ───────────── AIRPORT SERVICE VEHICLES ─────────────
     Used on airport.html for the Paramaribo <-> Zanderij
     (Johan Adolf Pengel Int'l Airport) transfer service.
  */
  airport: {

    sedan: {
      name: "Sedan Transfer",
      categoryLabel: "Sedan / Compact",
      tagline: "Comfortable ride for solo travelers & couples",
      price: "Contact for Price",
      priceUnit: "/ trip",
      specs: [
        { label: "Capacity", value: "1–3 Passengers" },
        { label: "Luggage", value: "2–3 Bags" },
        { label: "Ideal For", value: "Solo & Couples" },
        { label: "A/C", value: "Yes" },
      ],
      description: "A comfortable, air-conditioned sedan for a quick and relaxed transfer between Paramaribo and Johan Adolf Pengel International Airport (Zanderij). Perfect for solo travelers or couples with light luggage.",
      images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg"],
    },

    minivan: {
      name: "Minivan (Hiace)",
      categoryLabel: "Minivan",
      tagline: "Great for families & small groups",
      price: "Contact for Price",
      priceUnit: "/ trip",
      specs: [
        { label: "Capacity", value: "4–8 Passengers" },
        { label: "Luggage", value: "5–8 Bags" },
        { label: "Ideal For", value: "Families & Small Groups" },
        { label: "A/C", value: "Yes" },
      ],
      description: "A spacious, air-conditioned minivan with plenty of room for the whole family and their luggage. A smooth, comfortable ride for the trip to or from the airport.",
      images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg"],
    },

    minibus: {
      name: "Mini-Bus / Coaster",
      categoryLabel: "Mini-Bus",
      tagline: "For larger groups & tour parties",
      price: "Contact for Price",
      priceUnit: "/ trip",
      specs: [
        { label: "Capacity", value: "9–20 Passengers" },
        { label: "Luggage", value: "Large Capacity" },
        { label: "Ideal For", value: "Groups & Tours" },
        { label: "A/C", value: "Yes" },
      ],
      description: "Our largest airport transfer vehicle — ideal for tour groups, larger families, or any party traveling together. Roomy, air-conditioned, and built for the Paramaribo–Zanderij route.",
      images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg"],
    },

  },
};


/* WhatsApp number used across the whole site */
const WHATSAPP_NUMBER = "5978906680";
const FACEBOOK_URL = "https://www.facebook.com/share/1Eqevfsc1A/?mibextid=wwXIfr";

function waLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
