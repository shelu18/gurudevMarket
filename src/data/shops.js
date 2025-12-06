// Shop Data - Easy to update when availability changes
export const shops = [
  {
    id: 1,
    shopNumber: "1",
    size: "30×12",
    sizeUnit: "ft",
    area: 360,
    rent: 10000,
    isAvailable: false,
    type: "front",
    features: ["highway_facing", "corner_location"],
    occupiedBy: "Farmers Point"
  },
  {
    id: 2,
    shopNumber: "2",
    size: "30×12",
    sizeUnit: "ft",
    area: 360,
    rent: 10000,
    isAvailable: false,
    type: "standard",
    features: [],
    occupiedBy: "Medical Store and stationary"
  },
  {
    id: 3,
    shopNumber: "3",
    size: "15×12",
    sizeUnit: "ft",
    area: 180,
    rent: 5000,
    isAvailable: true,
    type: "standard",
    features: []
  },
  {
    id: 4,
    shopNumber: "4",
    size: "15×12",
    sizeUnit: "ft",
    area: 180,
    rent: 5000,
    isAvailable: true,
    type: "standard",
    features: []
  },
  {
    id: 5,
    shopNumber: "5",
    size: "15×12",
    sizeUnit: "ft",
    area: 180,
    rent: 5000,
    isAvailable: true,
    type: "standard",
    features: []
  },
  {
    id: 6,
    shopNumber: "6",
    size: "15×12",
    sizeUnit: "ft",
    area: 180,
    rent: 5000,
    isAvailable: true,
    type: "standard",
    features: []
  },
  {
    id: 7,
    shopNumber: "7",
    size: "15×12",
    sizeUnit: "ft",
    area: 180,
    rent: 5000,
    isAvailable: true,
    type: "standard",
    features: []
  },
  {
    id: 8,
    shopNumber: "8",
    size: "15×12",
    sizeUnit: "ft",
    area: 180,
    rent: 5000,
    isAvailable: true,
    type: "standard",
    features: []
  },
  {
    id: 9,
    shopNumber: "9",
    size: "15×12",
    sizeUnit: "ft",
    area: 180,
    rent: 5000,
    isAvailable: true,
    type: "standard",
    features: []
  }
];

// Market Facilities
export const marketFacilities = [
  { id: 1, icon: "⚡", key: "electricity" },
  { id: 2, icon: "💧", key: "water" },
  { id: 3, icon: "🚻", key: "washrooms" },
  { id: 4, icon: "📹", key: "cctv" },
  { id: 5, icon: "👮", key: "security" },
  { id: 6, icon: "🅿️", key: "parking" }
];

// Helper functions
export const getAvailableShopsCount = () => {
  return shops.filter(shop => shop.isAvailable).length;
};

export const getTotalShopsCount = () => {
  return shops.length;
};

export const getAvailableShops = () => {
  return shops.filter(shop => shop.isAvailable);
};

export const getOccupiedShops = () => {
  return shops.filter(shop => !shop.isAvailable);
};
