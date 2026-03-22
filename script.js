/* ── DATA ── */
const DESTINATIONS = [
  {
    id: 1,
    name: "Taj Mahal",
    location: "Agra, Uttar Pradesh",
    category: "historical",
    rating: 4.9,
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna. Commissioned in 1632 by the Mughal emperor Shah Jahan to house the tomb of his favourite wife, Mumtaz Mahal, it is considered the jewel of Muslim art in India and one of the universally admired masterpieces of the world's heritage.",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800",
    best_time: "October – March (pleasant weather)",
    gallery: [
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800",
      "https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?w=800",
      "https://images.unsplash.com/photo-1548013146-72479768bada?w=800",
    ],
    nearby: ["Agra Fort", "Fatehpur Sikri", "Mehtab Bagh"],
    tips: "Visit at sunrise for the best light and fewest crowds. Remove shoes before entering the main mausoleum.",
    map_link:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3549.5!2d78.0419!3d27.1751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39747121d702ff6d%3A0xdd2ae4803f767dde!2sTaj%20Mahal!5e0!3m2!1sen!2sin!4v1",
  },
  {
    id: 2,
    name: "Goa Beaches",
    location: "Goa",
    category: "beach",
    rating: 4.7,
    description:
      "Goa is India's smallest state by area and is famous for its stunning beaches, vibrant nightlife, Portuguese colonial architecture, and fresh seafood. From the bustling shores of Baga and Calangute to the serene Palolem in South Goa, every beach has its own personality and charm.",
    image: "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?w=800",
    best_time: "November – February (dry season)",
    gallery: [
      "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?w=800",
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800",
      "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=800",
    ],
    nearby: ["Dudhsagar Falls", "Old Goa Churches", "Anjuna Flea Market"],
    tips: "Rent a scooter to explore local villages. Try the fish curry rice – it's iconic Goan cuisine!",
    map_link:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3871.5!2d73.8278!3d15.2993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfba106336b741%3A0xb53a5f8a39f85cfc!2sGoa!5e0!3m2!1sen!2sin!4v1",
  },
  {
    id: 3,
    name: "Manali",
    location: "Himachal Pradesh",
    category: "hill",
    rating: 4.8,
    description:
      "Manali is a high-altitude Himalayan resort town in the Kullu Valley. It's a gateway to skiing in the Solang Valley, trekking in Parvati Valley, and is the starting point of many routes to the ancient Spiti Valley and Leh. Snow-capped peaks, apple orchards, and the roaring Beas River define this magical town.",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
    best_time: "March – June & Oct – Dec",
    gallery: [
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    ],
    nearby: ["Rohtang Pass", "Solang Valley", "Hadimba Temple", "Kasol"],
    tips: "Carry warm clothes even in summer. Book accommodation in advance during peak season (June–July).",
    map_link:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27069.5!2d77.1892!3d32.2396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3904feef43ce01c1%3A0xabfb8a7af3ec5e59!2sManali!5e0!3m2!1sen!2sin!4v1",
  },
  {
    id: 4,
    name: "Golden Temple",
    location: "Amritsar, Punjab",
    category: "temple",
    rating: 4.9,
    description:
      "The Harmandir Sahib, popularly known as the Golden Temple, is the holiest gurdwara of Sikhism. The temple is built on a 67-ft square platform in the middle of the sacred Amrit Sarovar lake. The upper floors are covered with real gold, giving the temple its name. The langar (community kitchen) serves free meals to 100,000 people daily.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/The_Golden_Temple_of_Amrithsar_7.jpg/500px-The_Golden_Temple_of_Amrithsar_7.jpg",
    best_time: "October – March",
    gallery: [
      "https://images.unsplash.com/photo-1589308078054-8328c7c7d4b5?w=800",
      "https://images.unsplash.com/photo-1609948543911-1d7f7c0d9f01?w=800",
      "https://images.unsplash.com/photo-1627894483216-2138af692e32?w=800",
    ],
    nearby: ["Jallianwala Bagh", "Wagah Border", "Durgiana Temple"],
    tips: "Cover your head and remove shoes before entering. Visit at night when the temple is beautifully lit.",
    map_link:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3392.7!2d74.8765!3d31.6200!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391964c7c6e5f6eb%3A0x489df097e0ce5b9c!2sGolden%20Temple!5e0!3m2!1sen!2sin!4v1",
  },
  {
    id: 5,
    name: "Kerala Backwaters",
    location: "Kerala",
    category: "nature",
    rating: 4.8,
    description:
      "The Kerala backwaters are a chain of brackish lagoons and lakes lying parallel to the Arabian Sea coast. The network includes five large lakes linked by canals, both man-made and natural. A houseboat stay on the backwaters is one of India's most iconic experiences, gliding through paddy fields, coconut groves, and charming villages.",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800",
    best_time: "September – March",
    gallery: [
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800",
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=800",
      "https://images.unsplash.com/photo-1570789210967-2cac24afeb00?w=800",
    ],
    nearby: ["Alleppey", "Kumarakom", "Munnar", "Varkala"],
    tips: "Book a traditional houseboat (kettuvallam) for an overnight experience. Best enjoyed in the cooler months.",
    map_link:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d251379.5!2d76.3388!3d9.4981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b08600f5d3af37b%3A0x6a37a2a88d0e1e6e!2sAlleppey!5e0!3m2!1sen!2sin!4v1",
  },
  {
    id: 6,
    name: "Jaipur – Pink City",
    location: "Rajasthan",
    category: "historical",
    rating: 4.7,
    description:
      "Jaipur, the capital of Rajasthan, is known as the Pink City due to the distinctive colour of its buildings. Founded in 1727 by Maharaja Jai Singh II, it is home to magnificent forts and palaces including Amber Fort, City Palace, and Hawa Mahal (Palace of Winds). The colourful bazaars, rich cuisine, and vibrant culture make it a must-visit.",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800",
    best_time: "October – March",
    gallery: [
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800",
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800",
      "https://images.unsplash.com/photo-1548013146-72479768bada?w=800",
    ],
    nearby: ["Amber Fort", "Hawa Mahal", "Jantar Mantar", "Nahargarh Fort"],
    tips: "Bargain at the local bazaars for jewellery and textiles. Try Dal Baati Churma — a traditional Rajasthani dish.",
    map_link:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d226751.2!2d75.7873!3d26.9124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur!5e0!3m2!1sen!2sin!4v1",
  },
  {
    id: 7,
    name: "Rishikesh",
    location: "Uttarakhand",
    category: "nature",
    rating: 4.6,
    description:
      "Rishikesh, nestled in the foothills of the Himalayas along the holy Ganges River, is the 'Yoga Capital of the World'. It's also India's premier destination for adventure sports — white-water rafting, bungee jumping, cliff diving, and trekking. The Ganga Aarti at Triveni Ghat at dusk is a deeply spiritual experience.",
    image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800",
    best_time: "February – May & Sept – November",
    gallery: [
      "https://images.unsplash.com/photo-1595815771614-ade5019e3f9b?w=800",
      "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800",
      "https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?w=800",
    ],
    nearby: ["Haridwar", "Mussoorie", "Valley of Flowers", "Kedarnath"],
    tips: "Book rafting in advance during peak season. Many ashrams offer yoga retreats and meditation courses.",
    map_link:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55718.5!2d78.2676!3d30.0869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929c356c888af%3A0x8c2c1a8e1f31f49f!2sRishikesh!5e0!3m2!1sen!2sin!4v1",
  },
  {
    id: 8,
    name: "Andaman Islands",
    location: "Andaman & Nicobar",
    category: "beach",
    rating: 4.8,
    description:
      "The Andaman Islands are a tropical paradise in the Bay of Bengal, famed for their pristine white-sand beaches, crystal-clear turquoise waters, and vibrant coral reefs. Radhanagar Beach was voted Asia's best beach. The islands offer world-class snorkelling, scuba diving, and sea-walking experiences.",
    image:
      "https://www.experienceandamans.com/blog/wp-content/uploads/2023/12/beaches-in-andaman-islands.jpeg.webp",
    best_time: "October – May",
    gallery: [
      "https://images.unsplash.com/photo-1589308454676-9c3e2d646f60?w=800",
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800",
      "https://images.unsplash.com/photo-1610041321327-b794a7e95c3b?w=800",
    ],
    nearby: [
      "Havelock Island",
      "Neil Island",
      "Cellular Jail",
      "Baratang Island",
    ],
    tips: "Apply for Restricted Area Permits before visiting tribal islands. Carry reef-safe sunscreen to protect corals.",
    map_link:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d503756.5!2d92.6586!3d11.7401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x308f85dbc9e54e75%3A0x3c3a4a9e6c8e4f5d!2sAndaman%20Islands!5e0!3m2!1sen!2sin!4v1",
  },
  {
    id: 9,
    name: "Varanasi – The Holy City",
    location: "Uttar Pradesh",
    category: "temple",
    rating: 4.7,
    description:
      "Varanasi, one of the world's oldest living cities, sits on the banks of the sacred Ganges. The city is a major religious hub in Hinduism and Jainism. The Ganga Aarti ceremony at Dashashwamedh Ghat is a mesmerising ritual performed every evening. The ancient ghats, narrow lanes, and the aroma of incense make Varanasi a unique, transcendent experience.",
    image: "https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=800",
    best_time: "October – March",
    gallery: [
      "https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=800",
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800",
      "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=800",
    ],
    nearby: ["Sarnath", "Kashi Vishwanath Temple", "Ramnagar Fort"],
    tips: "Take a boat ride at dawn to witness the morning rituals and the sunrise over the ghats. It is unforgettable.",
    map_link:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114890.4!2d82.9739!3d25.3176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2db76febcf4d%3A0xdc63de93fde226c5!2sVaranasi!5e0!3m2!1sen!2sin!4v1",
  },
  {
    id: 10,
    name: "Coorg – Scotland of India",
    location: "Karnataka",
    category: "nature",
    rating: 4.6,
    description:
      "Coorg (Kodagu) is a misty hill station in the Western Ghats, known as the 'Scotland of India' and the 'Coffee Land of India'. The region is blanketed in coffee and spice plantations. Abbey Falls, Raja's Seat, and Namdroling Monastery are top attractions.",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800",
    best_time: "October – March",
    gallery: [
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800",
      "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800",
      "https://images.unsplash.com/photo-1572204292164-b35ba943fca7?w=800",
    ],
    nearby: [
      "Madikeri Fort",
      "Dubare Elephant Camp",
      "Iruppu Falls",
      "Bylakuppe",
    ],
    tips: "Visit during monsoon for lush greenery, or winter for clear skies. Try Pandi Curry (pork curry) — a local speciality.",
    map_link:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126125.5!2d75.7356!3d12.4244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba5a8d77bda63f9%3A0x6d8e1e1e1e1e1e1e!2sCoorg!5e0!3m2!1sen!2sin!4v1",
  },
  {
    id: 11,
    name: "Leh – Ladakh",
    location: "Jammu & Kashmir",
    category: "hill",
    rating: 4.9,
    description:
      "Leh-Ladakh is a high-altitude desert region in the northernmost part of India, bordered by China and Pakistan. It boasts dramatic mountain landscapes, crystal-clear lakes (Pangong Tso, Tso Moriri), ancient Buddhist monasteries, and the world's highest motorable roads.",
    image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=800",
    best_time: "May – September",
    gallery: [
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=800",
      "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?w=800",
      "https://images.unsplash.com/photo-1593181629936-11c609b8db9b?w=800",
    ],
    nearby: [
      "Pangong Lake",
      "Nubra Valley",
      "Khardung La",
      "Thiksey Monastery",
    ],
    tips: "Acclimatize for 2 days before any strenuous activity to avoid altitude sickness. Carry warm clothing and sunscreen.",
    map_link:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d422985.5!2d77.5771!3d34.1526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38fde4ff97a35505%3A0xd8a2e9b2b5c7b8d6!2sLeh!5e0!3m2!1sen!2sin!4v1",
  },
  {
    id: 12,
    name: "Hampi – City of Ruins",
    location: "Karnataka",
    category: "historical",
    rating: 4.7,
    description:
      "Hampi is a UNESCO World Heritage Site and one of India's most impressive archaeological sites. Spread over 26 sq km, it contains the ruins of the Vijayanagara Empire — majestic temples, massive gopurams, royal enclosures, and ancient markets.",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800",
    best_time: "November – February",
    gallery: [
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800",
      "https://images.unsplash.com/photo-1600100599309-8d60c3b76b6a?w=800",
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990c52?w=800",
    ],
    nearby: ["Vittala Temple", "Lotus Mahal", "Tungabhadra Dam", "Pattadakal"],
    tips: "Rent a bicycle or auto-rickshaw to cover the vast site. Virupaksha Temple and Vittala Temple are must-sees.",
    map_link:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30944.5!2d76.4601!3d15.3350!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb7792e7fe5e8fb%3A0x7e0b22a1b5c1c2d3!2sHampi!5e0!3m2!1sen!2sin!4v1",
  },
];

/* ── STORAGE ── */
const S = {
  get: (k) => {
    try {
      return JSON.parse(localStorage.getItem(k)) || null;
    } catch {
      return null;
    }
  },
  set: (k, v) => {
    try {
      localStorage.setItem(k, JSON.stringify(v));
    } catch (e) {}
  },
  getFavs: () => S.get("tn_favs") || [],
  setFavs: (v) => S.set("tn_favs", v),
  getPlans: () => S.get("tn_plans") || [],
  setPlans: (v) => S.set("tn_plans", v),
  getDark: () => S.get("tn_dark") || false,
  setDark: (v) => S.set("tn_dark", v),
  getRecent: () => S.get("tn_recent") || [],
  setRecent: (v) => S.set("tn_recent", v),
};

/* ── TOAST ── */
function toast(msg, type = "success") {
  const c = document.getElementById("toast-container");
  const t = document.createElement("div");
  t.className = `toast ${type}`;
  const icons = {
    success: "circle-check",
    error: "circle-xmark",
    info: "circle-info",
  };
  t.innerHTML = `<i class="fas fa-${icons[type] || "circle-info"}"></i>${msg}`;
  c.appendChild(t);
  setTimeout(() => t.remove(), 3200);
}

/* ── DARK MODE ── */
function toggleDark() {
  const d = !S.getDark();
  S.setDark(d);
  applyDark(d);
}
function applyDark(dark) {
  document.documentElement.classList.toggle("dark", dark);
  document.body.style.background = dark ? "#1a110e" : "#faf7f4";
  const ic = document.getElementById("darkIcon");
  if (ic) ic.className = dark ? "fas fa-sun text-sm" : "fas fa-moon text-sm";
}

/* ── NAV ── */
const PAGES = ["home", "explore", "favorites", "planner", "about"];
function showPage(p) {
  PAGES.forEach((id) => {
    document.getElementById("page-" + id).classList.toggle("hidden", id !== p);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
  document.querySelectorAll(".tn-nav-link,.tn-mobile-link").forEach((l) => {
    l.classList.remove("active");
    const txt = l.textContent.trim().toLowerCase();
    const map = {
      home: "home",
      explore: "explore",
      saved: "favorites",
      plan: "planner",
      about: "about",
    };
    for (const [k, v] of Object.entries(map)) {
      if (txt.startsWith(k) && v === p) l.classList.add("active");
    }
  });
  if (p === "home") renderHome();
  if (p === "explore") renderExplore();
  if (p === "favorites") renderFavorites();
  if (p === "planner") renderPlans();
}
function toggleMobileMenu() {
  document.getElementById("mobileMenu").classList.toggle("hidden");
}

/* ── CARD BUILDER ── */
function buildCard(d, showRemove = false) {
  const favs = S.getFavs();
  const isFav = favs.includes(d.id);
  return `<div class="tn-card fade-in" id="card-${d.id}">
    <div class="tn-card-img-wrap">
      <img class="tn-card-img" src="${d.image}" alt="${d.name}" loading="lazy" onclick="openDetail(${d.id})" style="cursor:pointer"/>
      <div class="tn-card-cat">${catIcon(d.category)}&nbsp;${cap(d.category)}</div>
      <button onclick="toggleFav(${d.id},event)" class="tn-card-fav ${isFav ? "active" : ""}">
        <i class="${isFav ? "fas" : "far"} fa-bookmark text-sm" style="color:${isFav ? "var(--primary)" : "#c0a090"}"></i>
      </button>
    </div>
    <div class="tn-card-body">
      <p class="tn-card-loc"><i class="fas fa-location-dot text-xs" style="color:var(--primary)"></i>${d.location}</p>
      <h3 class="tn-card-name">${d.name}</h3>
      <p class="tn-card-desc">${d.description}</p>
      <div class="tn-card-footer">
        <div class="tn-rating"><i class="fas fa-star text-xs" style="color:#c0853a"></i>${d.rating}</div>
        <div style="display:flex;gap:.5rem;align-items:center">
          ${showRemove ? `<button onclick="removeFav(${d.id})" style="width:30px;height:30px;border-radius:var(--radius-sm);border:1.5px solid #fecaca;background:#fff5f5;color:#e05050;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:.75rem;transition:var(--transition)" onmouseover="this.style.background='#fee2e2'" onmouseout="this.style.background='#fff5f5'"><i class="fas fa-trash"></i></button>` : ""}
          <button class="tn-card-btn" onclick="openDetail(${d.id})">Explore <i class="fas fa-arrow-right text-xs"></i></button>
        </div>
      </div>
    </div>
  </div>`;
}

/* ── HOME ── */
function renderHome() {
  const featured = [...DESTINATIONS]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 6);
  document.getElementById("featuredGrid").innerHTML = featured
    .map((d) => buildCard(d))
    .join("");
  const rec = DESTINATIONS.filter(
    (d) => !featured.map((x) => x.id).includes(d.id),
  )
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);
  document.getElementById("recommendedGrid").innerHTML = rec
    .map((d) => buildCard(d))
    .join("");
  const recent = S.getRecent()
    .map((id) => DESTINATIONS.find((d) => d.id === id))
    .filter(Boolean)
    .slice(0, 4);
  const rg = document.getElementById("recentGrid"),
    re = document.getElementById("recentEmpty");
  if (recent.length) {
    rg.innerHTML = recent.map((d) => buildCard(d)).join("");
    re.classList.add("hidden");
  } else {
    rg.innerHTML = "";
    re.classList.remove("hidden");
  }
}
function heroSearch() {
  const q = document.getElementById("heroSearchInput").value.trim();
  if (!q) {
    toast("Please enter a search term", "error");
    return;
  }
  showPage("explore");
  document.getElementById("exploreSearch").value = q;
  renderExplore();
}
function filterAndShow(cat) {
  showPage("explore");
  document.getElementById("filterCat").value = cat;
  document
    .querySelectorAll(".tn-tab")
    .forEach((b) => b.classList.toggle("active", b.dataset.cat === cat));
  renderExplore();
}

/* ── EXPLORE ── */
let expTO = null;
function renderExplore() {
  clearTimeout(expTO);
  document.getElementById("exploreLoader").style.display = "flex";
  document.getElementById("exploreGrid").innerHTML = "";
  expTO = setTimeout(() => {
    const q = (
      document.getElementById("exploreSearch").value || ""
    ).toLowerCase();
    const cat = document.getElementById("filterCat").value;
    const minR = parseFloat(document.getElementById("filterRating").value) || 0;
    const sort = document.getElementById("filterSort").value;
    let res = DESTINATIONS.filter((d) => {
      const mq =
        !q ||
        d.name.toLowerCase().includes(q) ||
        d.location.toLowerCase().includes(q) ||
        d.description.toLowerCase().includes(q);
      return mq && (!cat || d.category === cat) && d.rating >= minR;
    });
    if (sort === "rating") res.sort((a, b) => b.rating - a.rating);
    else res.sort((a, b) => a.name.localeCompare(b.name));
    document.getElementById("exploreLoader").style.display = "none";
    const grid = document.getElementById("exploreGrid"),
      empty = document.getElementById("exploreEmpty");
    if (res.length) {
      grid.innerHTML = res.map((d) => buildCard(d)).join("");
      empty.classList.add("hidden");
    } else {
      grid.innerHTML = "";
      empty.classList.remove("hidden");
    }
  }, 350);
}
function resetFilters() {
  ["exploreSearch"].forEach((id) => (document.getElementById(id).value = ""));
  document.getElementById("filterCat").value = "";
  document.getElementById("filterRating").value = "0";
  document.getElementById("filterSort").value = "rating";
  document
    .querySelectorAll(".tn-tab")
    .forEach((b) => b.classList.toggle("active", b.dataset.cat === ""));
  renderExplore();
}
function setCatTab(el, cat) {
  document
    .querySelectorAll(".tn-tab")
    .forEach((b) => b.classList.remove("active"));
  el.classList.add("active");
  document.getElementById("filterCat").value = cat;
  renderExplore();
}

/* ── FAVORITES ── */
function toggleFav(id, e) {
  if (e) e.stopPropagation();
  let favs = S.getFavs();
  if (favs.includes(id)) {
    favs = favs.filter((f) => f !== id);
    toast("Removed from saved", "info");
  } else {
    favs.push(id);
    toast("Destination saved! 🔖", "success");
  }
  S.setFavs(favs);
  updateFavCount();
  document.querySelectorAll('[id^="card-"]').forEach((card) => {
    const cid = parseInt(card.id.split("-")[1]);
    const btn = card.querySelector('[onclick^="toggleFav"]');
    if (btn) {
      const ic = btn.querySelector("i");
      const iF = favs.includes(cid);
      ic.className = (iF ? "fas" : "far") + " fa-bookmark text-sm";
      ic.style.color = iF ? "var(--primary)" : "#c0a090";
      btn.classList.toggle("active", iF);
    }
  });
}
function removeFav(id) {
  S.setFavs(S.getFavs().filter((f) => f !== id));
  toast("Removed from saved", "info");
  updateFavCount();
  renderFavorites();
}
function renderFavorites() {
  const dests = S.getFavs()
    .map((id) => DESTINATIONS.find((d) => d.id === id))
    .filter(Boolean);
  const grid = document.getElementById("favGrid"),
    empty = document.getElementById("favEmpty");
  if (dests.length) {
    grid.innerHTML = dests.map((d) => buildCard(d, true)).join("");
    empty.classList.add("hidden");
  } else {
    grid.innerHTML = "";
    empty.classList.remove("hidden");
  }
}
function updateFavCount() {
  const n = S.getFavs().length,
    el = document.getElementById("fav-count");
  if (el) {
    el.textContent = n > 0 ? n : "";
    el.style.display = n > 0 ? "inline-flex" : "none";
  }
}

/* ── DETAIL MODAL ── */
function openDetail(id) {
  const d = DESTINATIONS.find((x) => x.id === id);
  if (!d) return;
  let rec = S.getRecent().filter((r) => r !== id);
  rec.unshift(id);
  S.setRecent(rec.slice(0, 8));
  const favs = S.getFavs();
  const isFav = favs.includes(id);
  const gallery = d.gallery || [d.image];
  const slides = gallery
    .map((img) => `<img src="${img}" alt="${d.name}"/>`)
    .join("");
  const nearby = (d.nearby || [])
    .map(
      (n) =>
        `<span class="tn-nearby-tag"><i class="fas fa-location-dot text-xs"></i>${n}</span>`,
    )
    .join("");
  document.getElementById("modalContent").innerHTML = `
    <div class="slider-wrap">
      <div class="slider-track" id="sliderTrack">${slides}</div>
      ${gallery.length > 1 ? `<button class="slider-btn" style="left:14px" onclick="slide(-1)"><i class="fas fa-chevron-left"></i></button><button class="slider-btn" style="right:14px" onclick="slide(1)"><i class="fas fa-chevron-right"></i></button>` : ""}
    </div>
    ${gallery.length > 1 ? `<div style="display:flex;justify-content:center;gap:6px;padding:.75rem 0;background:var(--primary-dark)" id="sliderDots">${gallery.map((_, i) => `<div class="slider-dot ${i === 0 ? "active" : ""}" onclick="goSlide(${i})"></div>`).join("")}</div>` : ""}
    <div style="padding:1.75rem">
      <div style="display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:space-between;gap:1rem;margin-bottom:1.25rem">
        <div>
          <span class="tn-badge" style="margin-bottom:.6rem">${catIcon(d.category)} ${cap(d.category)}</span>
          <h2 style="font-size:1.5rem;font-weight:900;letter-spacing:-.03em;margin-top:.2rem">${d.name}</h2>
          <p style="color:var(--text-muted);font-size:.85rem;margin-top:.3rem;display:flex;align-items:center;gap:.4rem"><i class="fas fa-location-dot text-xs" style="color:var(--primary)"></i>${d.location}</p>
        </div>
        <div style="display:flex;align-items:center;gap:.6rem">
          <div style="background:var(--primary);color:var(--secondary);padding:.4rem .85rem;border-radius:99px;font-weight:800;font-size:.85rem;display:flex;align-items:center;gap:.3rem"><i class="fas fa-star text-xs" style="color:#f5c87a"></i>${d.rating}</div>
          <button onclick="toggleFav(${d.id})" style="width:38px;height:38px;border-radius:99px;border:1.5px solid ${isFav ? "var(--primary)" : "var(--border)"};background:${isFav ? "var(--secondary)" : "transparent"};cursor:pointer;display:flex;align-items:center;justify-content:center;transition:var(--transition)" id="modalFavBtn">
            <i class="${isFav ? "fas" : "far"} fa-bookmark" style="color:var(--primary)"></i>
          </button>
        </div>
      </div>
      <div style="display:flex;gap:.5rem;flex-wrap:wrap;margin-bottom:1.25rem" id="detailTabs">
        <button class="tn-detail-tab active" onclick="showTab('overview',this)">Overview</button>
        <button class="tn-detail-tab" onclick="showTab('tips',this)">Travel Tips</button>
        <button class="tn-detail-tab" onclick="showTab('map',this)"><i class="fas fa-map mr-1"></i>Map</button>
      </div>
      <div id="tab-overview">
        <p style="font-size:.9rem;line-height:1.75;color:var(--text-muted);margin-bottom:1.25rem">${d.description}</p>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:.75rem;margin-bottom:1.25rem">
          <div class="tn-info-block"><div class="tn-info-block-label"><i class="fas fa-calendar-days mr-1"></i>Best Time to Visit</div><div class="tn-info-block-val">${d.best_time_to_visit || d.best_time || "Year round"}</div></div>
          <div class="tn-info-block"><div class="tn-info-block-label"><i class="fas fa-tag mr-1"></i>Category</div><div class="tn-info-block-val">${catIcon(d.category)} ${cap(d.category)}</div></div>
        </div>
        ${nearby ? `<div><p style="font-size:.72rem;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:var(--text-muted);margin-bottom:.65rem">Nearby Attractions</p><div style="display:flex;flex-wrap:wrap;gap:.5rem">${nearby}</div></div>` : ""}
      </div>
      <div id="tab-tips" class="hidden">
        <div class="tn-info-block" style="border-left-color:#2d6a3f">
          <div class="tn-info-block-label" style="color:#2d6a3f"><i class="fas fa-lightbulb mr-1"></i>Pro Travel Tips</div>
          <p style="font-size:.9rem;line-height:1.7;color:var(--text-muted);margin-top:.35rem">${d.tips || d.travel_tips || "Explore freely and enjoy the local culture!"}</p>
        </div>
      </div>
      <div id="tab-map" class="hidden">
        <iframe src="${d.map_link}" width="100%" height="300" style="border:0;border-radius:var(--radius);display:block" allowfullscreen loading="lazy"></iframe>
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:.75rem;margin-top:1.5rem;padding-top:1.25rem;border-top:1px solid var(--border)">
        <button onclick="openPlannerFor('${d.name}')" class="tn-btn-primary" style="flex:1;justify-content:center"><i class="fas fa-calendar-plus text-xs"></i>Plan This Trip</button>
        <button onclick="shareDestination(${d.id})" class="tn-btn-outline" style="justify-content:center"><i class="fas fa-share-nodes text-xs"></i>Share</button>
      </div>
    </div>`;
  document.getElementById("detailModal").classList.add("open");
  window._sliderIdx = 0;
  window._sliderLen = gallery.length;
  document.body.style.overflow = "hidden";
}
function closeDetailModal() {
  document.getElementById("detailModal").classList.remove("open");
  document.body.style.overflow = "";
}
function closeModal(e) {
  if (e.target === document.getElementById("detailModal")) closeDetailModal();
}
function showTab(name, btn) {
  ["overview", "tips", "map"].forEach((t) => {
    const el = document.getElementById("tab-" + t);
    if (el) el.classList.toggle("hidden", t !== name);
  });
  document
    .querySelectorAll("#detailTabs .tn-detail-tab")
    .forEach((b) => b.classList.toggle("active", b === btn));
}
function slide(dir) {
  window._sliderIdx = Math.max(
    0,
    Math.min(window._sliderLen - 1, (window._sliderIdx || 0) + dir),
  );
  applySlide();
}
function goSlide(i) {
  window._sliderIdx = i;
  applySlide();
}
function applySlide() {
  const t = document.getElementById("sliderTrack");
  if (t) t.style.transform = `translateX(-${window._sliderIdx * 100}%)`;
  document
    .querySelectorAll(".slider-dot")
    .forEach((d, i) => d.classList.toggle("active", i === window._sliderIdx));
}

/* ── PLANNER ── */
let editingPlanId = null;
function savePlan() {
  const dest = document.getElementById("planDest").value.trim(),
    date = document.getElementById("planDate").value;
  if (!dest || !date) {
    toast("Destination and date are required", "error");
    return;
  }
  const notes = document.getElementById("planNotes").value.trim(),
    budget = document.getElementById("planBudget").value,
    mode = document.getElementById("planMode").value;
  let plans = S.getPlans();
  if (editingPlanId !== null) {
    plans = plans.map((p) =>
      p.id === editingPlanId ? { ...p, dest, date, notes, budget, mode } : p,
    );
    toast("Trip updated!", "success");
    editingPlanId = null;
  } else {
    plans.push({ id: Date.now(), dest, date, notes, budget, mode });
    toast("Trip added to planner! ✈️", "success");
  }
  S.setPlans(plans);
  clearPlanForm();
  renderPlans();
}
function clearPlanForm() {
  ["planDest", "planDate", "planNotes", "planBudget"].forEach(
    (id) => (document.getElementById(id).value = ""),
  );
  document.getElementById("planMode").value = "✈️ Flight";
  document.getElementById("planFormTitle").innerHTML =
    '<span style="width:28px;height:28px;background:var(--secondary);border-radius:6px;display:inline-flex;align-items:center;justify-content:center;color:var(--primary);font-size:.8rem"><i class="fas fa-plus"></i></span>Add New Trip';
  document.getElementById("cancelEditBtn").classList.add("hidden");
  editingPlanId = null;
}
function cancelEdit() {
  clearPlanForm();
}
function deletePlan(id) {
  S.setPlans(S.getPlans().filter((p) => p.id !== id));
  toast("Trip removed", "info");
  renderPlans();
}
function editPlan(id) {
  const p = S.getPlans().find((x) => x.id === id);
  if (!p) return;
  document.getElementById("planDest").value = p.dest;
  document.getElementById("planDate").value = p.date;
  document.getElementById("planNotes").value = p.notes || "";
  document.getElementById("planBudget").value = p.budget || "";
  document.getElementById("planMode").value = p.mode || "✈️ Flight";
  document.getElementById("planFormTitle").innerHTML =
    '<span style="width:28px;height:28px;background:var(--secondary);border-radius:6px;display:inline-flex;align-items:center;justify-content:center;color:var(--primary);font-size:.8rem"><i class="fas fa-pen"></i></span>Edit Trip';
  document.getElementById("cancelEditBtn").classList.remove("hidden");
  editingPlanId = id;
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function renderPlans() {
  const plans = S.getPlans().sort(
    (a, b) => new Date(a.date) - new Date(b.date),
  );
  const container = document.getElementById("plansList"),
    empty = document.getElementById("plansEmpty");
  if (!plans.length) {
    container.innerHTML = "";
    empty.classList.remove("hidden");
    return;
  }
  empty.classList.add("hidden");
  container.innerHTML = plans
    .map((p) => {
      const d = new Date(p.date),
        dL = Math.ceil((d - new Date()) / 864e5);
      const badge =
        dL < 0
          ? `<span class="tn-badge" style="background:#f0f0f0;color:#888">Past</span>`
          : dL === 0
            ? `<span class="tn-badge" style="background:#d1fae5;color:#065f46">Today!</span>`
            : `<span class="tn-badge" style="background:var(--secondary);color:var(--primary)">${dL}d away</span>`;
      return `<div class="tn-plan-card fade-in" style="margin-bottom:1rem">
      <div style="display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:space-between;gap:.75rem">
        <div style="flex:1;min-width:0">
          <div style="display:flex;flex-wrap:wrap;align-items:center;gap:.5rem;margin-bottom:.4rem">
            <h3 style="font-weight:800;font-size:1.05rem">${p.dest}</h3>${badge}<span class="tn-badge">${p.mode || ""}</span>
          </div>
          <p style="font-size:.82rem;color:var(--text-muted);display:flex;align-items:center;gap:.4rem">
            <i class="fas fa-calendar-days text-xs" style="color:var(--primary)"></i>${d.toLocaleDateString("en-IN", { weekday: "short", year: "numeric", month: "short", day: "numeric" })}
            ${p.budget ? `<span style="margin-left:.5rem"><i class="fas fa-indian-rupee-sign text-xs" style="color:#2d6a3f"></i> ${parseInt(p.budget).toLocaleString()}</span>` : ""}
          </p>
          ${p.notes ? `<p style="font-size:.82rem;color:var(--text-soft);margin-top:.5rem;font-style:italic">"${p.notes}"</p>` : ""}
        </div>
        <div style="display:flex;gap:.5rem">
          <button onclick="editPlan(${p.id})" style="width:34px;height:34px;border-radius:var(--radius-sm);border:1.5px solid var(--border);background:transparent;cursor:pointer;color:var(--primary);display:flex;align-items:center;justify-content:center;font-size:.8rem;transition:var(--transition)" onmouseover="this.style.background='var(--secondary)'" onmouseout="this.style.background='transparent'"><i class="fas fa-pen"></i></button>
          <button onclick="deletePlan(${p.id})" style="width:34px;height:34px;border-radius:var(--radius-sm);border:1.5px solid #fecaca;background:transparent;cursor:pointer;color:#e05050;display:flex;align-items:center;justify-content:center;font-size:.8rem;transition:var(--transition)" onmouseover="this.style.background='#fff5f5'" onmouseout="this.style.background='transparent'"><i class="fas fa-trash"></i></button>
        </div>
      </div>
    </div>`;
    })
    .join("");
}
function openPlannerFor(name) {
  document.getElementById("qpDest").value = name;
  document.getElementById("plannerModal").classList.add("open");
}
function closePlannerModal(e) {
  if (!e || e.target === document.getElementById("plannerModal"))
    document.getElementById("plannerModal").classList.remove("open");
}
function saveQuickPlan() {
  const dest = document.getElementById("qpDest").value.trim(),
    date = document.getElementById("qpDate").value;
  if (!dest || !date) {
    toast("Destination and date required", "error");
    return;
  }
  const plans = S.getPlans();
  plans.push({
    id: Date.now(),
    dest,
    date,
    notes: document.getElementById("qpNotes").value.trim(),
    mode: "✈️ Flight",
    budget: "",
  });
  S.setPlans(plans);
  document.getElementById("plannerModal").classList.remove("open");
  toast("Trip added to planner! ✈️", "success");
}

/* ── SHARE ── */
function shareDestination(id) {
  const d = DESTINATIONS.find((x) => x.id === id);
  if (!d) return;
  const text = `Discover ${d.name} in ${d.location}! Rated ${d.rating}⭐ – via TravelNest`;
  if (navigator.share) {
    navigator.share({ title: d.name, text, url: window.location.href });
  } else {
    navigator.clipboard
      .writeText(text)
      .then(() => toast("Link copied to clipboard!", "info"));
  }
}

/* ── HELPERS ── */
function cap(s) {
  return s ? s.charAt(0).toUpperCase() + s.slice(1) : "";
}
function catIcon(c) {
  return (
    {
      beach: '<i class="fas fa-umbrella-beach text-xs"></i>',
      hill: '<i class="fas fa-mountain text-xs"></i>',
      historical: '<i class="fas fa-landmark text-xs"></i>',
      temple: '<i class="fas fa-place-of-worship text-xs"></i>',
      nature: '<i class="fas fa-leaf text-xs"></i>',
      city: '<i class="fas fa-city text-xs"></i>',
    }[c] || '<i class="fas fa-map-pin text-xs"></i>'
  );
}

/* ── INIT ── */
document.addEventListener("DOMContentLoaded", () => {
  applyDark(S.getDark());
  updateFavCount();
  renderHome();
  document
    .getElementById("heroSearchInput")
    .addEventListener("keydown", (e) => {
      if (e.key === "Enter") heroSearch();
    });
});
