export const products = [
  {
    id: 1,
    title: "Premium Youtube Thumbnail",
    category: "Thumbnails",
    description: "High CTR, click-baity and visually stunning thumbnails that grab attention instantly.",
    price: "₹499",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800",
    features: ["High Resolution (1080p)", "2 Revisions", "1 Day Delivery", "Source PSD File"]
  },
  {
    id: 2,
    title: "Wedding Poster Album",
    category: "Design",
    description: "Beautiful, cinematic poster designs for wedding albums and invitations.",
    price: "₹2000",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=800",
    features: ["Print Ready", "Premium Typography", "Custom Colors", "High Quality Retouching"]
  },
  {
    id: 3,
    title: "Professional Photo Retouching",
    category: "Photo Retouching",
    description: "High-end skin retouching, color grading, and background manipulation.",
    price: "₹800",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800",
    features: ["Skin Smoothing", "Lighting Adjustments", "Background Fixes", "Color Grading"]
  },
  {
    id: 4,
    title: "Cinematic Video Editing",
    category: "Video Editing",
    description: "Convert raw footage into a cinematic masterpiece with transitions and sound design.",
    price: "₹4000",
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=800",
    features: ["Up to 5 min length", "Color Grading", "Sound Mixing", "Motion Graphics"]
  },
  {
    id: 5,
    title: "Wedding Video Highlight",
    category: "Video Editing",
    description: "Emotional, engaging highlight reel of your special day, mapped to perfect music.",
    price: "₹9999",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800",
    features: ["Full Ceremony Sync", "Cinematic Color Grade", "Drone Footage Integration", "Licensed Music"]
  },
  {
    id: 6,
    title: "Custom PSD Templates",
    category: "Templates",
    description: "Get any type of PSD template fully layered and structured at a low price.",
    price: "₹299",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800",
    features: ["Fully Customizable", "Organized Layers", "Commercial License", "Fonts Included"]
  }
];

export const getCategories = () => {
    const categories = new Set(products.map(p => p.category));
    return ["All", ...Array.from(categories)];
}
