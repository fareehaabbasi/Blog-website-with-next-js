const blogsDets = [
  {
    id: 1,
    img: "/assets/images/blog-card-img/id1.jpg",
    title: "Exploring the Forest Trails",
    slug: "exploring-forest-trails",
    category: "Nature",
    categorySlug: "nature",
    featured: true,
    date: "2025-06-10",
    description:
      "A guide to discovering beautiful forest trails around the world.",
    author: {
      name: "Sarah Johnson",
      image: "/assets/images/authors/sarah.jpg",
      bio: "Nature photographer and travel blogger.",
    },
    tags: ["Nature", "Travel", "Adventure"],
    content: `
      <p>Forests have always been a source of fascination and adventure. Walking through trails allows us to reconnect with nature.</p>
      <p>These natural sanctuaries not only provide fresh air but also serve as habitats for countless species.</p>
      <h2>Why Forest Trails Are Important</h2>
      <p>Forests contribute to ecological balance, offering oxygen, reducing carbon, and maintaining soil health.</p>
      <p>They also provide recreational spaces for humans to relax and rejuvenate.</p>
      <h2>Popular Forest Trails Worldwide</h2>
      <ul>
        <li>Black Forest – Germany: dense woods and scenic villages.</li>
        <li>Redwood National Park – USA: giant trees and peaceful hikes.</li>
        <li>Amazon Rainforest – Brazil: exotic flora and fauna.</li>
        <li>Fiordland – New Zealand: dramatic landscapes and waterfalls.</li>
        <li>Jasper National Park – Canada: wildlife sightings and trails.</li>
      </ul>
      <h2>Tips for Trail Hiking</h2>
      <p>Always carry a map, water, and a first-aid kit.</p>
      <p>Wear comfortable shoes and dress according to the weather.</p>
      <p>Respect the environment – do not litter or disturb wildlife.</p>
      <h2>Seasonal Considerations</h2>
      <p>Some trails are best visited in specific seasons to avoid harsh weather.</p>
      <p>Spring and autumn usually offer ideal temperatures and breathtaking scenery.</p>
      <h2>Conclusion</h2>
      <p>Exploring forest trails can be life-changing. It’s an opportunity to unplug, unwind, and reconnect with nature.</p>
      <p>Whether you’re a beginner hiker or an experienced adventurer, there’s a trail out there for you.</p>
      <p>Embrace the journey, respect nature, and enjoy every step along the way.</p>
      <p>Document your adventures through photography or journaling to cherish memories forever.</p>
      <p>Forest trails remind us of the importance of preserving natural habitats for future generations.</p>
      <p>So lace up your hiking boots and discover the hidden wonders of the world’s forests.</p>
      <p>Happy hiking!</p>
    `,
  },
  {
    id: 2,
    img: "/assets/images/blog-card-img/id2.jpg",
    title: "Top 10 Travel Destinations for 2025",
    slug: "top-travel-destinations-2025",
    category: "Travel",
    categorySlug: "travel",
    featured: false,
    date: "2025-06-08",
    description: "Discover the most amazing places to visit this year.",
    author: {
      name: "David Miller",
      image: "/assets/images/authors/david.jpg",
      bio: "Travel enthusiast and digital nomad.",
    },
    tags: ["Travel", "Tourism", "Destinations"],
    content: `
      <p>Traveling allows us to explore new cultures, meet people, and create lasting memories.</p>
      <p>Every year brings fresh destinations to inspire wanderlust.</p>
      <h2>Top Destinations for 2025</h2>
      <ol>
        <li>Kyoto, Japan: Cherry blossoms, temples, and traditional tea ceremonies.</li>
        <li>Rome, Italy: Historical landmarks, art, and delicious cuisine.</li>
        <li>Cape Town, South Africa: Beautiful landscapes and wildlife experiences.</li>
        <li>Bali, Indonesia: Tropical beaches, surf spots, and spiritual retreats.</li>
        <li>Barcelona, Spain: Stunning architecture and vibrant street culture.</li>
        <li>Patagonia, Argentina: Mountain landscapes and trekking adventures.</li>
        <li>Reykjavik, Iceland: Northern lights and geothermal spas.</li>
        <li>Vancouver, Canada: Urban life with outdoor exploration opportunities.</li>
        <li>Marrakech, Morocco: Colorful markets, food, and cultural heritage.</li>
        <li>Lisbon, Portugal: Historic streets, coastal views, and traditional music.</li>
      </ol>
      <h2>Travel Planning Tips</h2>
      <p>Research local customs and climate before traveling.</p>
      <p>Book accommodations and transport early to avoid high costs.</p>
      <p>Try local cuisines to experience authentic culture.</p>
      <h2>Traveling Responsibly</h2>
      <p>Respect local communities and the environment.</p>
      <p>Minimize plastic use and follow sustainable tourism practices.</p>
      <p>Learn a few local phrases to connect with people.</p>
      <h2>Conclusion</h2>
      <p>Travel broadens the mind and creates unforgettable experiences.</p>
      <p>2025 offers a world of exploration – from ancient cities to natural wonders.</p>
      <p>Plan wisely, pack smartly, and enjoy your adventures to the fullest.</p>
      <p>Remember, the journey is as important as the destination.</p>
    `,
  },
  {
    id: 3,
    img: "/assets/images/blog-card-img/id3.jpg",
    title: "Healthy Breakfast Recipes",
    slug: "healthy-breakfast-recipes",
    category: "Food",
    categorySlug: "food",
    featured: true,
    date: "2025-06-05",
    description: "Start your day right with these nutritious breakfast ideas.",
    author: {
      name: "Emma Brown",
      image: "/assets/images/authors/emma.jpg",
      bio: "Certified nutritionist and food blogger.",
    },
    tags: ["Food", "Health", "Breakfast"],
    content: `
      <p>Breakfast is the most important meal of the day. It fuels the body and mind for the day ahead.</p>
      <p>Eating nutritious food in the morning improves focus, energy, and mood.</p>
      <h2>Quick and Healthy Breakfast Ideas</h2>
      <ul>
        <li>Oatmeal with fruits and nuts – high in fiber and protein.</li>
        <li>Avocado toast on whole grain bread – heart-healthy fats.</li>
        <li>Protein smoothies – blend yogurt, fruits, and seeds.</li>
        <li>Egg muffins – baked eggs with vegetables for a portable option.</li>
        <li>Chia pudding – rich in omega-3 and antioxidants.</li>
      </ul>
      <h2>Meal Prep Tips</h2>
      <p>Prepare ingredients the night before to save time.</p>
      <p>Batch cook items like muffins or oatmeal jars for the week.</p>
      <h2>Healthy Eating Habits</h2>
      <p>Include protein, complex carbs, and healthy fats in your breakfast.</p>
      <p>Avoid sugary cereals and pastries to maintain energy balance.</p>
      <h2>Conclusion</h2>
      <p>A wholesome breakfast sets the tone for the rest of the day.</p>
      <p>Experiment with recipes to keep mornings exciting and nutritious.</p>
      <p>Consistency in eating well contributes to long-term health.</p>
      <p>Start small, try new ingredients, and enjoy every bite.</p>
      <p>Healthy mornings lead to productive and fulfilling days.</p>
    `,
  },
  {
    id: 4,
    img: "/assets/images/blog-card-img/id4.jpg",
    title: "Mindfulness Meditation Techniques",
    slug: "mindfulness-meditation-techniques",
    category: "Health",
    categorySlug: "health",
    featured: false,
    date: "2025-06-02",
    description:
      "Learn simple meditation techniques to improve mental well-being.",
    author: {
      name: "Olivia White",
      image: "/assets/images/authors/olivia.jpg",
      bio: "Wellness coach and meditation expert.",
    },
    tags: ["Health", "Mindfulness", "Meditation"],
    content: `
      <p>Mindfulness meditation helps calm the mind and reduce stress.</p>
      <p>By focusing on the present moment, you can improve concentration and emotional balance.</p>
      <h2>Getting Started</h2>
      <p>Choose a quiet space where you won’t be disturbed.</p>
      <p>Sit comfortably with your back straight and close your eyes.</p>
      <h2>Basic Techniques</h2>
      <ul>
        <li>Focus on your breath – inhale and exhale slowly.</li>
        <li>Body scan – notice sensations from head to toe.</li>
        <li>Guided meditation – listen to an audio guide for structure.</li>
        <li>Walking meditation – slow steps with awareness of movement.</li>
      </ul>
      <h2>Tips for Beginners</h2>
      <p>Start with 5–10 minutes daily and gradually increase.</p>
      <p>Be patient – thoughts will come, just observe without judgment.</p>
      <h2>Advanced Practices</h2>
      <p>Focus on loving-kindness meditation to cultivate compassion.</p>
      <p>Use mindfulness during daily activities like eating and cleaning.</p>
      <h2>Benefits</h2>
      <p>Reduces anxiety and depression symptoms.</p>
      <p>Improves sleep quality and emotional regulation.</p>
      <p>Enhances cognitive function and decision-making skills.</p>
      <p>Builds resilience against stress and burnout.</p>
      <h2>Conclusion</h2>
      <p>Regular practice strengthens the mind and nurtures inner peace.</p>
      <p>Commit to a daily routine and gradually notice positive changes.</p>
      <p>Mindfulness is a lifelong skill that enhances well-being and relationships.</p>
      <p>Start small, stay consistent, and enjoy the journey.</p>
    `,
  },
  {
    id: 5,
    img: "/assets/images/blog-card-img/id5.jpg",
    title: "Best Programming Languages to Learn",
    slug: "best-programming-languages",
    category: "Education",
    categorySlug: "education",
    featured: true,
    date: "2025-05-30",
    description: "A guide to the most in-demand programming languages.",
    author: {
      name: "Mark Taylor",
      image: "/assets/images/authors/mark.jpg",
      bio: "Software engineer and coding mentor.",
    },
    tags: ["Programming", "Education", "Coding"],
    content: `
      <p>Learning programming languages can boost your career and open new opportunities.</p>
      <p>It also improves problem-solving and logical thinking skills.</p>
      <h2>Top Languages in 2025</h2>
      <ul>
        <li>JavaScript – essential for web development.</li>
        <li>Python – perfect for data science and automation.</li>
        <li>Java – widely used in enterprise software.</li>
        <li>Go – efficient for cloud and system programming.</li>
        <li>Rust – high-performance and memory-safe applications.</li>
      </ul>
      <h2>Choosing the Right Language</h2>
      <p>Consider your career goals and industry trends.</p>
      <p>Start with one language and build projects for practical learning.</p>
      <h2>Learning Resources</h2>
      <ul>
        <li>Online tutorials and coding platforms.</li>
        <li>Books and documentation.</li>
        <li>Open-source projects for contribution and practice.</li>
        <li>Coding bootcamps and mentorship programs.</li>
      </ul>
      <h2>Tips for Success</h2>
      <p>Practice daily and solve real problems.</p>
      <p>Break projects into smaller tasks for manageable learning.</p>
      <p>Collaborate with other developers to enhance skills.</p>
      <h2>Conclusion</h2>
      <p>Programming is a lifelong learning journey.</p>
      <p>Stay updated with trends, focus on practical projects, and build a strong foundation.</p>
      <p>With dedication, you can master any programming language.</p>
      <p>Keep experimenting and creating real-world applications.</p>
    `,
  },
  {
    id: 6,
    img: "/assets/images/blog-card-img/id6.jpg",
    title: "Photography Tips for Beginners",
    slug: "photography-tips-beginners",
    category: "Photography",
    categorySlug: "photography",
    featured: false,
    date: "2025-05-28",
    description:
      "Learn basic photography techniques to capture stunning photos.",
    author: {
      name: "Liam Carter",
      image: "/assets/images/authors/liam.jpg",
      bio: "Professional photographer and educator.",
    },
    tags: ["Photography", "Tips", "Beginners"],
    content: `
      <p>Photography is a creative way to capture moments and tell stories.</p>
      <p>Even beginners can take stunning photos with some guidance.</p>
      <h2>Camera Basics</h2>
      <p>Understand your camera settings – ISO, aperture, and shutter speed.</p>
      <p>Practice manual mode to gain full control over exposure.</p>
      <h2>Composition Tips</h2>
      <ul>
        <li>Rule of thirds – divide the frame into 3x3 sections.</li>
        <li>Leading lines – use natural lines to guide the viewer’s eye.</li>
        <li>Framing – use objects to frame the subject creatively.</li>
        <li>Symmetry – balance the elements in the frame for aesthetics.</li>
      </ul>
      <h2>Lighting</h2>
      <p>Use natural light whenever possible.</p>
      <p>Golden hour – early morning or late evening – gives warm tones.</p>
      <p>Avoid harsh midday sunlight unless for creative effect.</p>
      <h2>Editing</h2>
      <p>Post-processing enhances photos without overdoing it.</p>
      <p>Learn software like Lightroom or Photoshop for adjustments.</p>
      <h2>Practice</h2>
      <p>Shoot daily and experiment with angles, subjects, and lighting.</p>
      <p>Review your photos critically and learn from mistakes.</p>
      <h2>Conclusion</h2>
      <p>Photography is a skill that improves with patience and practice.</p>
      <p>Be curious, creative, and persistent to capture memorable images.</p>
    `,
  },
  {
    id: 7,
    img: "/assets/images/blog-card-img/id7.jpg",
    title: "10 Quick Home Workouts",
    slug: "quick-home-workouts",
    category: "Fitness",
    categorySlug: "fitness",
    featured: true,
    date: "2025-05-25",
    description: "Stay fit with these easy workouts you can do at home.",
    author: {
      name: "Sophia Green",
      image: "/assets/images/authors/sophia.jpg",
      bio: "Fitness coach and health blogger.",
    },
    tags: ["Fitness", "Health", "Workouts"],
    content: `
      <p>Maintaining fitness at home is possible with simple workouts.</p>
      <p>No need for expensive equipment – bodyweight exercises are effective.</p>
      <h2>Warm-Up</h2>
      <p>Start with 5 minutes of stretching and light cardio.</p>
      <h2>Workout Routine</h2>
      <ol>
        <li>Push-ups – 3 sets of 12 reps</li>
        <li>Squats – 3 sets of 15 reps</li>
        <li>Planks – hold for 30–60 seconds</li>
        <li>Lunges – 3 sets of 12 reps per leg</li>
        <li>Jumping jacks – 3 sets of 30 seconds</li>
        <li>Mountain climbers – 3 sets of 20 reps</li>
        <li>Glute bridges – 3 sets of 15 reps</li>
        <li>Bicycle crunches – 3 sets of 20 reps</li>
        <li>Tricep dips – 3 sets of 12 reps</li>
        <li>High knees – 3 sets of 30 seconds</li>
      </ol>
      <h2>Cool Down</h2>
      <p>Stretch major muscle groups and focus on deep breathing.</p>
      <h2>Tips for Success</h2>
      <p>Maintain proper form to prevent injury.</p>
      <p>Stay consistent – even 20–30 minutes daily makes a difference.</p>
      <p>Combine workouts with healthy nutrition for best results.</p>
      <p>Track your progress and adjust intensity gradually.</p>
      <p>Celebrate small milestones to stay motivated.</p>
      <p>Enjoy the process and make fitness a lifestyle.</p>
    `,
  },
  {
    id: 8,
    img: "/assets/images/blog-card-img/id8.jpg",
    title: "Sustainable Living Tips",
    slug: "sustainable-living-tips",
    category: "Lifestyle",
    categorySlug: "lifestyle",
    featured: false,
    date: "2025-05-22",
    description: "Simple ways to make your life more eco-friendly.",
    author: {
      name: "Grace Lee",
      image: "/assets/images/authors/grace.jpg",
      bio: "Environmental activist and lifestyle blogger.",
    },
    tags: ["Lifestyle", "Sustainability", "Eco-friendly"],
    content: `
      <p>Living sustainably is about making conscious choices to reduce environmental impact.</p>
      <p>Small changes in daily life can contribute to a healthier planet.</p>
      <h2>Reduce, Reuse, Recycle</h2>
      <p>Minimize single-use plastics and opt for reusable items.</p>
      <p>Recycle paper, plastic, and metals whenever possible.</p>
      <h2>Energy Efficiency</h2>
      <p>Use energy-saving appliances and switch off electronics when not in use.</p>
      <p>Consider renewable energy sources like solar panels for home energy.</p>
      <h2>Water Conservation</h2>
      <p>Fix leaks and use water-saving devices to conserve water.</p>
      <p>Collect rainwater for gardening and cleaning purposes.</p>
      <h2>Eco-friendly Transportation</h2>
      <p>Walk, cycle, or use public transport instead of driving cars daily.</p>
      <p>Carpool whenever possible to reduce carbon emissions.</p>
      <h2>Mindful Consumption</h2>
      <p>Buy only what you need and choose sustainable products.</p>
      <p>Support brands with ethical practices and minimal packaging.</p>
      <h2>Plant-based Diet</h2>
      <p>Include more plant-based meals in your diet to reduce environmental footprint.</p>
      <p>Grow your own vegetables and herbs if possible.</p>
      <h2>Conclusion</h2>
      <p>Sustainable living is a journey, not a destination.</p>
      <p>Small, consistent changes can have a big impact over time.</p>
      <p>Stay mindful, educate others, and lead by example for a greener future.</p>
    `,
  },
  {
    id: 9,
    img: "/assets/images/blog-card-img/id9.jpg",
    title: "Exploring Street Food Around the World",
    slug: "exploring-street-food",
    category: "Food",
    categorySlug: "food",
    featured: true,
    date: "2025-05-20",
    description:
      "A delicious journey through street food in different countries.",
    author: {
      name: "Aiden Brooks",
      image: "/assets/images/authors/aiden.jpg",
      bio: "Foodie and travel blogger.",
    },
    tags: ["Food", "Travel", "StreetFood"],
    content: `
      <p>Street food is a window into local culture, flavors, and traditions.</p>
      <p>Exploring street food allows travelers to taste authentic local dishes.</p>
      <h2>Asia</h2>
      <ul>
        <li>Thailand – Pad Thai, Mango Sticky Rice</li>
        <li>India – Chaat, Samosa</li>
        <li>Japan – Takoyaki, Taiyaki</li>
      </ul>
      <h2>Europe</h2>
      <ul>
        <li>Italy – Pizza al taglio, Gelato</li>
        <li>Spain – Churros, Tapas</li>
        <li>Germany – Bratwurst, Pretzels</li>
      </ul>
      <h2>Americas</h2>
      <ul>
        <li>Mexico – Tacos, Elote</li>
        <li>USA – Hot dogs, Pretzels</li>
        <li>Brazil – Pastel, Coxinha</li>
      </ul>
      <h2>Tips for Street Food</h2>
      <p>Check the cleanliness and popularity of the stall.</p>
      <p>Try small portions first to test flavors.</p>
      <p>Engage with vendors to learn about the dish history.</p>
      <h2>Conclusion</h2>
      <p>Street food connects you with local culture in the most delicious way.</p>
      <p>Be adventurous, explore widely, and savor every bite.</p>
      <p>Traveling isn’t just about sights, but also about flavors that tell stories.</p>
    `,
  },
  {
    id: 10,
    img: "/assets/images/blog-card-img/id10.jpg",
    title: "Minimalist Home Decor Ideas",
    slug: "minimalist-home-decor",
    category: "Lifestyle",
    categorySlug: "lifestyle",
    featured: false,
    date: "2025-05-18",
    description: "Transform your home with simple and elegant decor ideas.",
    author: {
      name: "Isabella King",
      image: "/assets/images/authors/isabella.jpg",
      bio: "Interior designer and lifestyle blogger.",
    },
    tags: ["Lifestyle", "HomeDecor", "Minimalism"],
    content: `
      <p>Minimalist decor focuses on simplicity, functionality, and clean lines.</p>
      <p>Decluttering is the first step to creating a minimalist space.</p>
      <h2>Choosing Furniture</h2>
      <p>Opt for multipurpose furniture to save space.</p>
      <p>Neutral colors and natural materials enhance minimalism.</p>
      <h2>Decor Accessories</h2>
      <ul>
        <li>Use a few statement pieces instead of many small items.</li>
        <li>Incorporate plants to add warmth and life.</li>
        <li>Keep surfaces clear to maintain a tidy appearance.</li>
      </ul>
      <h2>Lighting</h2>
      <p>Use natural light whenever possible.</p>
      <p>Soft, warm lighting creates a cozy atmosphere.</p>
      <h2>Storage Solutions</h2>
      <p>Hidden storage keeps clutter out of sight.</p>
      <p>Regularly evaluate items and donate what’s not needed.</p>
      <h2>Conclusion</h2>
      <p>Minimalist homes feel spacious, calm, and functional.</p>
      <p>Focus on quality over quantity, and let your home breathe.</p>
      <p>Small changes lead to big improvements in lifestyle and comfort.</p>
    `,
  },
  {
    id: 8,
    img: "/assets/images/blog-card-img/id8.jpg",
    title: "Sustainable Living Tips",
    slug: "sustainable-living-tips",
    category: "Lifestyle",
    categorySlug: "lifestyle",
    featured: false,
    date: "2025-05-22",
    description: "Simple ways to make your life more eco-friendly.",
    author: {
      name: "Grace Lee",
      image: "/assets/images/authors/grace.jpg",
      bio: "Environmental activist and lifestyle blogger.",
    },
    tags: ["Lifestyle", "Sustainability", "Eco-friendly"],
    content: `
      <p>Living sustainably is about making conscious choices to reduce environmental impact.</p>
      <p>Small changes in daily life can contribute to a healthier planet.</p>
      <h2>Reduce, Reuse, Recycle</h2>
      <p>Minimize single-use plastics and opt for reusable items.</p>
      <p>Recycle paper, plastic, and metals whenever possible.</p>
      <h2>Energy Efficiency</h2>
      <p>Use energy-saving appliances and switch off electronics when not in use.</p>
      <p>Consider renewable energy sources like solar panels for home energy.</p>
      <h2>Water Conservation</h2>
      <p>Fix leaks and use water-saving devices to conserve water.</p>
      <p>Collect rainwater for gardening and cleaning purposes.</p>
      <h2>Eco-friendly Transportation</h2>
      <p>Walk, cycle, or use public transport instead of driving cars daily.</p>
      <p>Carpool whenever possible to reduce carbon emissions.</p>
      <h2>Mindful Consumption</h2>
      <p>Buy only what you need and choose sustainable products.</p>
      <p>Support brands with ethical practices and minimal packaging.</p>
      <h2>Plant-based Diet</h2>
      <p>Include more plant-based meals in your diet to reduce environmental footprint.</p>
      <p>Grow your own vegetables and herbs if possible.</p>
      <h2>Conclusion</h2>
      <p>Sustainable living is a journey, not a destination.</p>
      <p>Small, consistent changes can have a big impact over time.</p>
      <p>Stay mindful, educate others, and lead by example for a greener future.</p>
    `,
  },
  {
    id: 9,
    img: "/assets/images/blog-card-img/id9.jpg",
    title: "Exploring Street Food Around the World",
    slug: "exploring-street-food",
    category: "Food",
    categorySlug: "food",
    featured: true,
    date: "2025-05-20",
    description:
      "A delicious journey through street food in different countries.",
    author: {
      name: "Aiden Brooks",
      image: "/assets/images/authors/aiden.jpg",
      bio: "Foodie and travel blogger.",
    },
    tags: ["Food", "Travel", "StreetFood"],
    content: `
      <p>Street food is a window into local culture, flavors, and traditions.</p>
      <p>Exploring street food allows travelers to taste authentic local dishes.</p>
      <h2>Asia</h2>
      <ul>
        <li>Thailand – Pad Thai, Mango Sticky Rice</li>
        <li>India – Chaat, Samosa</li>
        <li>Japan – Takoyaki, Taiyaki</li>
      </ul>
      <h2>Europe</h2>
      <ul>
        <li>Italy – Pizza al taglio, Gelato</li>
        <li>Spain – Churros, Tapas</li>
        <li>Germany – Bratwurst, Pretzels</li>
      </ul>
      <h2>Americas</h2>
      <ul>
        <li>Mexico – Tacos, Elote</li>
        <li>USA – Hot dogs, Pretzels</li>
        <li>Brazil – Pastel, Coxinha</li>
      </ul>
      <h2>Tips for Street Food</h2>
      <p>Check the cleanliness and popularity of the stall.</p>
      <p>Try small portions first to test flavors.</p>
      <p>Engage with vendors to learn about the dish history.</p>
      <h2>Conclusion</h2>
      <p>Street food connects you with local culture in the most delicious way.</p>
      <p>Be adventurous, explore widely, and savor every bite.</p>
      <p>Traveling isn’t just about sights, but also about flavors that tell stories.</p>
    `,
  },
  {
    id: 10,
    img: "/assets/images/blog-card-img/id10.jpg",
    title: "Minimalist Home Decor Ideas",
    slug: "minimalist-home-decor",
    category: "Lifestyle",
    categorySlug: "lifestyle",
    featured: false,
    date: "2025-05-18",
    description: "Transform your home with simple and elegant decor ideas.",
    author: {
      name: "Isabella King",
      image: "/assets/images/authors/isabella.jpg",
      bio: "Interior designer and lifestyle blogger.",
    },
    tags: ["Lifestyle", "HomeDecor", "Minimalism"],
    content: `
      <p>Minimalist decor focuses on simplicity, functionality, and clean lines.</p>
      <p>Decluttering is the first step to creating a minimalist space.</p>
      <h2>Choosing Furniture</h2>
      <p>Opt for multipurpose furniture to save space.</p>
      <p>Neutral colors and natural materials enhance minimalism.</p>
      <h2>Decor Accessories</h2>
      <ul>
        <li>Use a few statement pieces instead of many small items.</li>
        <li>Incorporate plants to add warmth and life.</li>
        <li>Keep surfaces clear to maintain a tidy appearance.</li>
      </ul>
      <h2>Lighting</h2>
      <p>Use natural light whenever possible.</p>
      <p>Soft, warm lighting creates a cozy atmosphere.</p>
      <h2>Storage Solutions</h2>
      <p>Hidden storage keeps clutter out of sight.</p>
      <p>Regularly evaluate items and donate what’s not needed.</p>
      <h2>Conclusion</h2>
      <p>Minimalist homes feel spacious, calm, and functional.</p>
      <p>Focus on quality over quantity, and let your home breathe.</p>
      <p>Small changes lead to big improvements in lifestyle and comfort.</p>
    `,
  },
  {
    id: 11,
    img: "/assets/images/blog-card-img/id11.jpg",
    title: "Guide to Urban Gardening",
    slug: "guide-to-urban-gardening",
    category: "Lifestyle",
    categorySlug: "lifestyle",
    featured: true,
    date: "2025-05-15",
    description: "Grow your own greens in small urban spaces.",
    author: {
      name: "Ethan Clarke",
      image: "/assets/images/authors/ethan.jpg",
      bio: "Urban gardener and eco-lifestyle blogger.",
    },
    tags: ["Gardening", "Lifestyle", "Urban"],
    content: `
      <p>Urban gardening is the art of growing plants in small city spaces.</p>
      <p>It improves air quality, mental health, and provides fresh produce.</p>
      <h2>Getting Started</h2>
      <p>Choose containers, pots, or vertical gardens based on space.</p>
      <p>Select plants suitable for indoor or balcony growth.</p>
      <h2>Soil and Watering</h2>
      <p>Use high-quality soil and ensure proper drainage.</p>
      <p>Water regularly but avoid overwatering to prevent root rot.</p>
      <h2>Plant Selection</h2>
      <ul>
        <li>Herbs – basil, mint, parsley</li>
        <li>Vegetables – tomatoes, peppers, lettuce</li>
        <li>Flowers – marigolds, petunias, geraniums</li>
      </ul>
      <h2>Maintenance Tips</h2>
      <p>Fertilize plants every few weeks.</p>
      <p>Prune dead leaves and check for pests regularly.</p>
      <h2>Benefits</h2>
      <p>Reduces stress and improves home aesthetics.</p>
      <p>Provides fresh ingredients for cooking.</p>
      <p>Encourages eco-friendly habits and sustainability.</p>
      <h2>Conclusion</h2>
      <p>Urban gardening is accessible to everyone.</p>
      <p>Start small, stay consistent, and enjoy the green therapy.</p>
      <p>Your urban garden can flourish with patience and care.</p>
      <p>Make it a habit and share the joy with family and neighbors.</p>
      <p>Happy gardening!</p>
    `,
  },
  {
    id: 12,
    img: "/assets/images/blog-card-img/id12.jpg",
    title: "Mastering Time Management",
    slug: "mastering-time-management",
    category: "Productivity",
    categorySlug: "productivity",
    featured: false,
    date: "2025-05-12",
    description: "Strategies to efficiently manage your time and tasks.",
    author: {
      name: "Lily Morgan",
      image: "/assets/images/authors/lily.jpg",
      bio: "Productivity coach and writer.",
    },
    tags: ["Productivity", "TimeManagement", "LifeSkills"],
    content: `
      <p>Time management is key to achieving goals and reducing stress.</p>
      <p>Proper planning increases productivity and work-life balance.</p>
      <h2>Identify Priorities</h2>
      <p>List tasks in order of importance and urgency.</p>
      <p>Focus on high-impact activities first.</p>
      <h2>Plan Your Day</h2>
      <ul>
        <li>Create a to-do list or schedule.</li>
        <li>Allocate specific time blocks for tasks.</li>
        <li>Include breaks to avoid burnout.</li>
      </ul>
      <h2>Avoid Procrastination</h2>
      <p>Break tasks into smaller, manageable steps.</p>
      <p>Use techniques like Pomodoro for focused work sessions.</p>
      <h2>Minimize Distractions</h2>
      <p>Turn off notifications and limit social media usage.</p>
      <p>Create a dedicated workspace to increase focus.</p>
      <h2>Review and Adjust</h2>
      <p>End the day reviewing completed tasks.</p>
      <p>Adjust plans for the next day accordingly.</p>
      <h2>Conclusion</h2>
      <p>Mastering time management is a continuous process.</p>
      <p>Practice, patience, and consistency lead to improvement.</p>
      <p>Track progress and celebrate small victories for motivation.</p>
      <p>Ultimately, good time management improves productivity and life satisfaction.</p>
    `,
  },
  {
    id: 13,
    img: "/assets/images/blog-card-img/id13.jpg",
    title: "Digital Marketing Trends in 2025",
    slug: "digital-marketing-trends-2025",
    category: "Business",
    categorySlug: "business",
    featured: true,
    date: "2025-05-10",
    description: "Stay ahead with the latest digital marketing strategies.",
    author: {
      name: "Noah Evans",
      image: "/assets/images/authors/noah.jpg",
      bio: "Digital marketing strategist and content creator.",
    },
    tags: ["Marketing", "Business", "Trends"],
    content: `
      <p>Digital marketing continues to evolve rapidly with new technologies and platforms.</p>
      <p>Marketers must stay updated to remain competitive.</p>
      <h2>Content Marketing</h2>
      <p>High-quality, valuable content attracts and retains audiences.</p>
      <p>Blogs, videos, podcasts, and social media posts are essential tools.</p>
      <h2>Influencer Marketing</h2>
      <p>Collaborating with influencers expands reach and credibility.</p>
      <p>Micro-influencers often provide higher engagement rates.</p>
      <h2>AI and Automation</h2>
      <p>AI tools help with analytics, personalization, and customer support.</p>
      <p>Automation streamlines repetitive marketing tasks.</p>
      <h2>Video Marketing</h2>
      <p>Short-form videos are increasingly effective for engagement.</p>
      <p>Live streaming creates real-time interaction with audiences.</p>
      <h2>SEO and Voice Search</h2>
      <p>Optimizing for search engines remains critical for visibility.</p>
      <p>Voice search optimization will grow as smart assistants become more popular.</p>
      <h2>Conclusion</h2>
      <p>Marketers must adapt to trends while keeping audience needs in focus.</p>
      <p>Continuous learning and testing strategies ensure long-term success.</p>
      <p>Combining creativity with data-driven approaches drives results.</p>
      <p>Stay curious, innovate, and lead in the digital space.</p>
    `,
  },
  {
    id: 14,
    img: "/assets/images/blog-card-img/id14.jpg",
    title: "Mastering Personal Finance",
    slug: "mastering-personal-finance",
    category: "Finance",
    categorySlug: "finance",
    featured: false,
    date: "2025-05-08",
    description:
      "Tips for managing your money effectively and building wealth.",
    author: {
      name: "Mia Roberts",
      image: "/assets/images/authors/mia.jpg",
      bio: "Financial advisor and money blogger.",
    },
    tags: ["Finance", "Money", "Wealth"],
    content: `
      <p>Personal finance is about managing income, expenses, savings, and investments wisely.</p>
      <p>Good financial habits lead to security and long-term wealth.</p>
      <h2>Budgeting</h2>
      <p>Create a monthly budget to track income and expenses.</p>
      <p>Include essential expenses, savings, and discretionary spending.</p>
      <h2>Saving Strategies</h2>
      <ul>
        <li>Pay yourself first – save before spending.</li>
        <li>Automate savings for consistency.</li>
        <li>Maintain an emergency fund for unexpected expenses.</li>
      </ul>
      <h2>Investing</h2>
      <p>Invest in stocks, mutual funds, or retirement plans.</p>
      <p>Diversify investments to reduce risks.</p>
      <h2>Debt Management</h2>
      <p>Pay off high-interest debt as a priority.</p>
      <p>Avoid unnecessary loans and track repayments.</p>
      <h2>Financial Goals</h2>
      <p>Set short-term and long-term financial goals.</p>
      <p>Review goals regularly and adjust plans as needed.</p>
      <h2>Conclusion</h2>
      <p>Mastering personal finance ensures peace of mind and financial freedom.</p>
      <p>Discipline, planning, and informed decisions are key to success.</p>
      <p>Start today and build a secure financial future step by step.</p>
    `,
  },
  {
    id: 15,
    img: "/assets/images/blog-card-img/id15.jpg",
    title: "Yoga for Beginners",
    slug: "yoga-for-beginners",
    category: "Health",
    categorySlug: "health",
    featured: true,
    date: "2025-05-05",
    description: "A beginner-friendly guide to starting yoga practice.",
    author: {
      name: "Chloe Adams",
      image: "/assets/images/authors/chloe.jpg",
      bio: "Yoga instructor and wellness coach.",
    },
    tags: ["Health", "Yoga", "Fitness"],
    content: `
      <p>Yoga promotes flexibility, strength, and mental clarity.</p>
      <p>Starting yoga can be simple with basic poses and daily practice.</p>
      <h2>Basic Poses</h2>
      <ul>
        <li>Mountain Pose – posture and balance.</li>
        <li>Downward Dog – stretches the spine and legs.</li>
        <li>Child’s Pose – relaxes the body and mind.</li>
        <li>Cat-Cow – improves spine flexibility.</li>
        <li>Tree Pose – enhances balance and concentration.</li>
      </ul>
      <h2>Breathing Techniques</h2>
      <p>Practice deep diaphragmatic breathing to reduce stress.</p>
      <p>Coordinate breath with movement for better focus.</p>
      <h2>Routine Tips</h2>
      <p>Practice daily for at least 20 minutes.</p>
      <p>Wear comfortable clothing and use a yoga mat.</p>
      <h2>Benefits</h2>
      <p>Improves flexibility, posture, and circulation.</p>
      <p>Reduces anxiety and promotes relaxation.</p>
      <p>Boosts energy and overall well-being.</p>
      <h2>Conclusion</h2>
      <p>Yoga is a lifelong practice accessible to everyone.</p>
      <p>Start slow, stay consistent, and gradually increase intensity.</p>
    `,
  },
  {
    id: 16,
    img: "/assets/images/blog-card-img/id16.jpg",
    title: "Top 10 Hiking Destinations",
    slug: "top-10-hiking-destinations",
    category: "Travel",
    categorySlug: "travel",
    featured: false,
    date: "2025-05-02",
    description:
      "The best hiking trails around the world for adventure lovers.",
    author: {
      name: "Lucas Bennett",
      image: "/assets/images/authors/lucas.jpg",
      bio: "Adventure traveler and hiking expert.",
    },
    tags: ["Travel", "Hiking", "Adventure"],
    content: `
      <p>Hiking allows exploration of natural landscapes and physical fitness.</p>
      <p>Planning is essential for safety and enjoyment.</p>
      <h2>Top Destinations</h2>
      <ul>
        <li>Inca Trail – Peru</li>
        <li>Torres del Paine – Chile</li>
        <li>Mount Fuji – Japan</li>
        <li>Appalachian Trail – USA</li>
        <li>Dolomites – Italy</li>
        <li>Patagonia – Argentina</li>
        <li>Swiss Alps – Switzerland</li>
        <li>Kilimanjaro – Tanzania</li>
        <li>Great Wall – China</li>
        <li>Banff National Park – Canada</li>
      </ul>
      <h2>Preparation Tips</h2>
      <p>Check weather and terrain before hiking.</p>
      <p>Carry sufficient water, snacks, and first-aid kit.</p>
      <p>Wear proper footwear and clothing.</p>
      <h2>Hiking Etiquette</h2>
      <p>Respect nature, wildlife, and fellow hikers.</p>
      <p>Follow marked trails and avoid littering.</p>
      <h2>Conclusion</h2>
      <p>Hiking combines adventure, fitness, and nature immersion.</p>
      <p>Choose a trail that matches your experience level and enjoy the journey.</p>
    `,
  },
  {
    id: 17,
    img: "/assets/images/blog-card-img/id17.jpg",
    title: "Guide to Freelancing in 2025",
    slug: "guide-to-freelancing-2025",
    category: "Business",
    categorySlug: "business",
    featured: true,
    date: "2025-04-30",
    description: "Start and grow your freelancing career successfully.",
    author: {
      name: "Ella Foster",
      image: "/assets/images/authors/ella.jpg",
      bio: "Freelance consultant and career coach.",
    },
    tags: ["Freelancing", "Business", "Career"],
    content: `
      <p>Freelancing offers flexibility and control over your career.</p>
      <p>Success depends on skill, marketing, and client relationships.</p>
      <h2>Getting Started</h2>
      <p>Identify your skills and niche market.</p>
      <p>Create a portfolio showcasing your best work.</p>
      <h2>Finding Clients</h2>
      <ul>
        <li>Freelance platforms like Upwork and Fiverr</li>
        <li>Networking and referrals</li>
        <li>Social media and personal branding</li>
      </ul>
      <h2>Setting Rates</h2>
      <p>Research industry standards and adjust for experience.</p>
      <p>Value your work and avoid underpricing.</p>
      <h2>Time Management</h2>
      <p>Plan projects, deadlines, and communication efficiently.</p>
      <p>Use tools like Trello or Asana to stay organized.</p>
      <h2>Conclusion</h2>
      <p>Freelancing requires discipline, persistence, and adaptability.</p>
      <p>Deliver quality work, maintain client relationships, and continuously learn.</p>
      <p>Over time, freelancing can become a stable and rewarding career.</p>
    `,
  },
  {
    id: 18,
    img: "/assets/images/blog-card-img/id18.jpg",
    title: "Home Office Setup Ideas",
    slug: "home-office-setup-ideas",
    category: "Lifestyle",
    categorySlug: "lifestyle",
    featured: false,
    date: "2025-04-28",
    description: "Create an efficient and stylish home workspace.",
    author: {
      name: "Sophia Turner",
      image: "/assets/images/authors/sophia-turner.jpg",
      bio: "Interior designer and productivity blogger.",
    },
    tags: ["Lifestyle", "HomeOffice", "Productivity"],
    content: `
      <p>A well-organized home office improves productivity and focus.</p>
      <p>Good lighting, ergonomics, and minimal clutter are key.</p>
      <h2>Desk and Chair</h2>
      <p>Choose an adjustable chair for comfort.</p>
      <p>Desk should be spacious and functional.</p>
      <h2>Lighting</h2>
      <p>Use natural light and supplement with task lighting.</p>
      <p>Reduce glare on screens to prevent eye strain.</p>
      <h2>Organization</h2>
      <ul>
        <li>Use shelves, organizers, and storage boxes.</li>
        <li>Keep only essential items on the desk.</li>
        <li>Label cables and accessories for easy access.</li>
      </ul>
      <h2>Decor and Inspiration</h2>
      <p>Add plants or artwork for a pleasant environment.</p>
      <p>Personal touches enhance creativity and motivation.</p>
      <h2>Technology</h2>
      <p>Ensure a stable internet connection and necessary devices.</p>
      <p>Use noise-canceling headphones if needed.</p>
      <h2>Conclusion</h2>
      <p>A thoughtful home office setup supports work efficiency and well-being.</p>
      <p>Regularly review and update your workspace to keep it functional and inspiring.</p>
    `,
  },
  {
    id: 19,
    img: "/assets/images/blog-card-img/id19.jpg",
    title: "Top 5 Mental Health Practices",
    slug: "top-mental-health-practices",
    category: "Health",
    categorySlug: "health",
    featured: true,
    date: "2025-04-25",
    description: "Simple habits to improve mental health and well-being.",
    author: {
      name: "Mason Hill",
      image: "/assets/images/authors/mason.jpg",
      bio: "Mental health advocate and writer.",
    },
    tags: ["Health", "MentalHealth", "Wellbeing"],
    content: `
      <p>Mental health is essential for a balanced and happy life.</p>
      <p>Simple daily practices can strengthen mental resilience.</p>
      <h2>Mindfulness Meditation</h2>
      <p>Spend 10–15 minutes focusing on breathing and present moments.</p>
      <h2>Physical Exercise</h2>
      <p>Regular activity releases endorphins and reduces stress.</p>
      <h2>Healthy Diet</h2>
      <p>Nutrition affects mood and cognitive function.</p>
      <h2>Social Connections</h2>
      <p>Maintain relationships with family, friends, and community.</p>
      <h2>Journaling</h2>
      <p>Writing thoughts and feelings improves self-awareness.</p>
      <h2>Sleep Hygiene</h2>
      <p>Consistent sleep schedule is crucial for mental well-being.</p>
      <h2>Conclusion</h2>
      <p>Implement these practices gradually to build mental resilience.</p>
      <p>Regular attention to mental health enhances quality of life and happiness.</p>
      <p>Stay mindful, active, and connected to maintain balance.</p>
    `,
  },
  {
    id: 20,
    img: "/assets/images/blog-card-img/id20.jpg",
    title: "Learning JavaScript for Beginners",
    slug: "learning-javascript-beginners",
    category: "Education",
    categorySlug: "education",
    featured: true,
    date: "2025-04-22",
    description:
      "A beginner-friendly guide to start learning JavaScript programming.",
    author: {
      name: "Oliver Scott",
      image: "/assets/images/authors/oliver.jpg",
      bio: "Software engineer and coding educator.",
    },
    tags: ["Programming", "JavaScript", "Education"],
    content: `
      <p>JavaScript is a versatile programming language used for web development.</p>
      <p>It allows you to create interactive and dynamic websites.</p>
      <h2>Getting Started</h2>
      <p>Learn basic syntax, variables, and data types.</p>
      <p>Practice simple operations and conditional statements.</p>
      <h2>Functions and Loops</h2>
      <p>Functions help organize code into reusable blocks.</p>
      <p>Loops allow repeating tasks efficiently.</p>
      <h2>DOM Manipulation</h2>
      <p>Learn to interact with HTML elements using JavaScript.</p>
      <p>Change content, styles, and respond to user actions.</p>
      <h2>Events</h2>
      <p>Use events like click, mouseover, or keypress to trigger actions.</p>
      <h2>Best Practices</h2>
      <ul>
        <li>Write clean and readable code.</li>
        <li>Comment your code for clarity.</li>
        <li>Test and debug regularly.</li>
        <li>Use meaningful variable and function names.</li>
      </ul>
      <h2>Conclusion</h2>
      <p>Consistent practice and building small projects are key to mastering JavaScript.</p>
      <p>Start coding today, experiment, and gradually tackle more complex problems.</p>
      <p>With patience and dedication, you can become proficient in JavaScript programming.</p>
      <p>Enjoy the learning journey and create real-world applications along the way.</p>
    `,
  },
];

export default blogsDets;
