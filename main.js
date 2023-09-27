const items = [
  {
    id: 1,
    img: "url('images/desktop-image-hero-1.jpg')",
    title: "Discover innovative ways to decorate",
    desc: "We provide unmatched quality, comfort,and style for property owners acroos the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of what you love.",
  },
  {
    id: 2,
    img: "url('images/desktop-image-hero-2.jpg')",
    title: "We are available all across the globe",
    desc: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    id: 3,
    img: "url('images/desktop-image-hero-3.jpg')",
    title: "Manufactured with the best materials",
    desc: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
  },
];

// DOM ELEMENTS
const imageEl = document.getElementById("image");
const titleEl = document.getElementById("title");
const descEl = document.getElementById("desc");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

// init current idx
let currentIndex = 0;

// content update
const updateContent = () => {
  const nowDisplaying = items[currentIndex];
  imageEl.style.backgroundImage = nowDisplaying.img;
  titleEl.textContent = nowDisplaying.title;
  descEl.textContent = nowDisplaying.desc;
};

const prevSlide = () => {
  currentIndex == 0 ? alert('last slide') : currentIndex = (currentIndex - 1) % items.length;
  updateContent();
};

const nextSlide = () => {
    currentIndex == items.length - 1 ? alert('last slide') : currentIndex = (currentIndex + 1) % items.length;
  updateContent();
};

updateContent();

// Event listeners
prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);
