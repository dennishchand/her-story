const PHOTO_DATA = window.PHOTO_DATA || {};
document.getElementById("heroMobile").srcset = PHOTO_DATA["photo-01"] || "";
document.getElementById("heroImage").src = PHOTO_DATA["photo-04"] || "";

const memories = [
  {
    id: 13, section: "trending", title: "That Smile, Again", location: "One of our days out", date: "",
    caption: "One of those photos that does not really need a big story. The smile is the story.",
    image: PHOTO_DATA["photo-13"], position: "center 38%"
  },
  {
    id: 14, section: "trending", title: "Dressed Up & Glowing", location: "A special night", date: "",
    caption: "A little dressed up, a little extra, and somehow still making it look effortless.",
    image: PHOTO_DATA["photo-14"], position: "center 36%"
  },
  {
    id: 1, section: "trending", title: "Drinks by the Water", location: "Dinner date", date: "",
    caption: "Good weather, a drink in hand, and another smile I was obviously going to photograph.",
    image: PHOTO_DATA["photo-01"], position: "center 35%"
  },
  {
    id: 11, section: "trending", title: "Christmas Chapter", location: "Christmas outing", date: "December",
    caption: "A Christmas photo that deserves its own episode — festive setup included.",
    image: PHOTO_DATA["photo-11"], position: "center 45%"
  },
  {
    id: 5, section: "trending", title: "Night Out Energy", location: "Evening out", date: "",
    caption: "One of those nights where the lighting was good and the smile was even better.",
    image: PHOTO_DATA["photo-05"], position: "center 30%"
  },
  {
    id: 4, section: "trending", title: "Dinner & That Look", location: "Dinner date", date: "",
    caption: "Food on the table, a proper smile across from me, and exactly the kind of moment I wanted to keep.",
    image: PHOTO_DATA["photo-04"], position: "center 35%"
  },

  {
    id: 8, section: "adventure", title: "Middle of the Road", location: "Road trip stop", date: "",
    caption: "A random stop on a quiet road that somehow turned into one of the coolest photos in the album.",
    image: PHOTO_DATA["photo-08"], position: "center 42%"
  },
  {
    id: 9, section: "adventure", title: "Rainy-Day Stop", location: "Out exploring", date: "",
    caption: "Not every adventure needs sunshine. Sometimes the weather just makes the memory better.",
    image: PHOTO_DATA["photo-09"], position: "center 35%"
  },
  {
    id: 19, section: "adventure", title: "Ocean Views", location: "Island escape", date: "",
    caption: "Big view, open arms, and one of those moments that makes a trip feel worth it.",
    image: PHOTO_DATA["photo-19"], position: "center center"
  },
  {
    id: 18, section: "adventure", title: "Marina Evening", location: "By the water", date: "",
    caption: "A quiet waterfront table, sunset light and a smile that makes the whole frame work.",
    image: PHOTO_DATA["photo-18"], position: "center 30%"
  },
  {
    id: 2, section: "adventure", title: "Sunny Side Up", location: "Day out", date: "",
    caption: "Sunshine, sunglasses and the kind of relaxed day that looks even better in hindsight.",
    image: PHOTO_DATA["photo-02"], position: "center 30%"
  },
  {
    id: 7, section: "adventure", title: "Island Mode", location: "Tropical stop", date: "",
    caption: "Flower in the hair, fresh coconut on the table — island mode fully switched on.",
    image: PHOTO_DATA["photo-07"], position: "center 28%"
  },

  {
    id: 3, section: "daily", title: "Coffee First", location: "Coffee stop", date: "",
    caption: "A cup in hand and a smile across the table. One of the ordinary moments I never really find ordinary.",
    image: PHOTO_DATA["photo-03"], position: "center 30%"
  },
  {
    id: 6, section: "daily", title: "Cocktail Approved", location: "Lunch or drinks", date: "",
    caption: "The drink may be in focus, but we both know who the actual subject of the photo is.",
    image: PHOTO_DATA["photo-06"], position: "center 32%"
  },
  {
    id: 10, section: "daily", title: "Coffee & Cats", location: "Cafe date", date: "",
    caption: "A coffee date, a blue dress and another photo that feels very much like a normal day with us.",
    image: PHOTO_DATA["photo-10"], position: "center 35%"
  },
  {
    id: 12, section: "daily", title: "Lunch Break", location: "Lunch date", date: "",
    caption: "One of the best parts of going out for food is getting another photo for the archive before we start eating.",
    image: PHOTO_DATA["photo-12"], position: "center 25%"
  },
  {
    id: 15, section: "daily", title: "Table for Two", location: "Dinner date", date: "",
    caption: "Warm lighting, a wooden table and the kind of simple evening I could happily replay.",
    image: PHOTO_DATA["photo-15"], position: "center 30%"
  },
  {
    id: 16, section: "daily", title: "Game Day Moment", location: "A proud little moment", date: "",
    caption: "A different kind of memory — one of those photos that belongs in the 'look what happened today' collection.",
    image: PHOTO_DATA["photo-16"], position: "center 32%"
  },
  {
    id: 17, section: "daily", title: "One More Drink", location: "Night out", date: "",
    caption: "A drink, a flower, a smile and a night that made it into the permanent collection.",
    image: PHOTO_DATA["photo-17"], position: "center 30%"
  },
  {
    id: 20, section: "daily", title: "Celebration Mode", location: "A celebration", date: "",
    caption: "One of those nights where the table was full, the room was busy, and the photo still feels like its own little moment.",
    image: PHOTO_DATA["photo-20"], position: "center 32%"
  }
];

const sections = [
  { id: "trending", eyebrow: "RECENTLY ADDED", title: "Trending Memories" },
  { id: "adventure", eyebrow: "OUT & ABOUT", title: "Adventure & Travel" },
  { id: "daily", eyebrow: "UNSCRIPTED", title: "The Daily Cut" }
];

const galleryRoot = document.getElementById("galleryRoot");

function makeCard(memory, index) {
  return `
    <button class="memory-card" data-memory-id="${memory.id}" aria-label="Open ${memory.title}">
      <img src="${memory.image}" alt="${memory.title}" loading="lazy" style="object-position:${memory.position}">
      <div class="card-shade"></div>
      <div class="card-index">${String(index + 1).padStart(2, "0")}</div>
      <div class="card-copy">
        <h3>${memory.title}</h3>
        <p>${memory.location}</p>
        ${memory.date ? `<span>${memory.date}</span>` : ""}
      </div>
    </button>`;
}

function renderGallery() {
  galleryRoot.innerHTML = sections.map(section => {
    const items = memories.filter(m => m.section === section.id);
    return `
      <section class="gallery-section" id="${section.id}">
        <div class="section-head">
          <div>
            <div class="section-kicker">${section.eyebrow}</div>
            <h2>${section.title}</h2>
          </div>
          <div class="row-controls" aria-label="Scroll ${section.title}">
            <button class="row-btn" data-scroll-row="${section.id}" data-dir="-1" aria-label="Scroll left">‹</button>
            <button class="row-btn" data-scroll-row="${section.id}" data-dir="1" aria-label="Scroll right">›</button>
          </div>
        </div>
        <div class="memory-row" data-row-id="${section.id}">
          ${items.map(makeCard).join("")}
        </div>
      </section>`;
  }).join("");
}
renderGallery();

const topbar = document.getElementById("topbar");
window.addEventListener("scroll", () => topbar.classList.toggle("scrolled", window.scrollY > 45));

document.getElementById("openAlbum").addEventListener("click", () => {
  document.getElementById("trending").scrollIntoView({ behavior: "smooth" });
});

const photoModal = document.getElementById("photoModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalLocation = document.getElementById("modalLocation");
const modalDate = document.getElementById("modalDate");
const modalDateSep = document.getElementById("modalDateSep");
const modalCaption = document.getElementById("modalCaption");

function openPhoto(memory) {
  modalImage.src = memory.image;
  modalTitle.textContent = memory.title;
  modalLocation.textContent = memory.location;
  modalDate.textContent = memory.date || "";
  modalDate.hidden = !memory.date;
  modalDateSep.hidden = !memory.date;
  modalCaption.textContent = memory.caption;
  photoModal.classList.add("active");
  photoModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}
function closePhoto() {
  photoModal.classList.remove("active");
  photoModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

document.addEventListener("click", e => {
  const card = e.target.closest("[data-memory-id]");
  if (card) {
    const memory = memories.find(m => m.id === Number(card.dataset.memoryId));
    if (memory) openPhoto(memory);
  }

  const scrollButton = e.target.closest("[data-scroll-row]");
  if (scrollButton) {
    const row = document.querySelector(`[data-row-id="${scrollButton.dataset.scrollRow}"]`);
    row?.scrollBy({ left: Number(scrollButton.dataset.dir) * row.clientWidth * .78, behavior: "smooth" });
  }
});

document.querySelectorAll("[data-close-photo]").forEach(el => el.addEventListener("click", closePhoto));

const storyModal = document.getElementById("storyModal");
function openStory() {
  storyModal.classList.add("active");
  storyModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}
function closeStory() {
  storyModal.classList.remove("active");
  storyModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}
document.getElementById("openStory").addEventListener("click", openStory);
document.querySelectorAll("[data-close-story]").forEach(el => el.addEventListener("click", closeStory));

document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    closePhoto();
    closeStory();
  }
});

document.querySelectorAll(".memory-row").forEach(row => {
  let down = false;
  let startX = 0;
  let startScroll = 0;
  let moved = 0;

  row.addEventListener("pointerdown", e => {
    down = true;
    startX = e.clientX;
    startScroll = row.scrollLeft;
    moved = 0;
    row.setPointerCapture(e.pointerId);
  });
  row.addEventListener("pointermove", e => {
    if (!down) return;
    const delta = e.clientX - startX;
    moved = Math.max(moved, Math.abs(delta));
    row.scrollLeft = startScroll - delta;
  });
  row.addEventListener("pointerup", () => { down = false; });
  row.addEventListener("pointercancel", () => { down = false; });
});

const soundToggle = document.getElementById("soundToggle");
let soundOn = false;
soundToggle.addEventListener("click", () => {
  soundOn = !soundOn;
  soundToggle.textContent = soundOn ? "♫" : "♪";
  soundToggle.title = soundOn ? "Ambience on (visual only)" : "Ambience off";
});
