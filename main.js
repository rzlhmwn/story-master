const allStories = [
  {
    id: 0,
    author: "BALI 1",
    imageUrl: "https://rawcdn.githack.com/rzlhmwn/story-master/436d946c2c481af6ebc381e29fe9b42c22f1104b/BALI1.jpg",
  },

  {
    id: 1,
    author: "BALI 2",
    imageUrl: "https://rawcdn.githack.com/rzlhmwn/story-master/436d946c2c481af6ebc381e29fe9b42c22f1104b/BALI2.jpg",
  },

  {
    id: 2,
    author: "BALI 3",
    imageUrl: "https://rawcdn.githack.com/rzlhmwn/story-master/436d946c2c481af6ebc381e29fe9b42c22f1104b/BALI3.jpg",
  },

  {
    id: 3,
    author: "JAKARTA 1",
    imageUrl: "https://rawcdn.githack.com/rzlhmwn/story-master/436d946c2c481af6ebc381e29fe9b42c22f1104b/JKT1.jpg",
  },

  {
    id: 4,
    author: "JAKARTA 2",
    imageUrl: "https://rawcdn.githack.com/rzlhmwn/story-master/436d946c2c481af6ebc381e29fe9b42c22f1104b/JKT2.gif",
  },

  {
    id: 5,
    author: "MALANG",
    imageUrl: "https://rawcdn.githack.com/rzlhmwn/story-master/436d946c2c481af6ebc381e29fe9b42c22f1104b/MLG1.gif",
  },

  {
    id: 6,
    author: "Eden Faith",
    imageUrl: "images/7.jpg",
  },

  {
    id: 7,
    author: "Flora Maeve",
    imageUrl: "images/8.jpg",
  },

  {
    id: 8,
    author: "Nathaniel Hayes",
    imageUrl: "images/9.jpg",
  },

  {
    id: 9,
    author: "Everett Lee",
    imageUrl: "images/10.jpg",
  },

  {
    id: 9,
    author: "Owen",
    imageUrl: "images/11.jpg",
  },

  {
    id: 9,
    author: "Caleb Knox",
    imageUrl: "images/12.jpg",
  },

  {
    id: 9,
    author: "Felix",
    imageUrl: "images/13.jpg",
  },
];

const stories = document.querySelector(".stories");
const storiesFullView = document.querySelector(".stories-full-view");
const closeBtn = document.querySelector(".close-btn");
const storyImageFull = document.querySelector(".stories-full-view .story img");
const storyAuthorFull = document.querySelector(
  ".stories-full-view .story .author"
);
const nextBtn = document.querySelector(".stories-container .next-btn");
const previousBtn = document.querySelector(".stories-container .previous-btn");
const storiesContent = document.querySelector(".stories-container .content");
const nextBtnFull = document.querySelector(".stories-full-view .next-btn");
const previousBtnFull = document.querySelector(
  ".stories-full-view .previous-btn"
);

let currentActive = 0;

const createStories = () => {
  allStories.forEach((s, i) => {
    const story = document.createElement("div");
    story.classList.add("story");
    const img = document.createElement("img");
    img.src = s.imageUrl;
    const author = document.createElement("div");
    author.classList.add("author");
    author.innerHTML = s.author;

    story.appendChild(img);
    story.appendChild(author);

    stories.appendChild(story);

    story.addEventListener("click", () => {
      showFullView(i);
    });
  });
};

createStories();

const showFullView = (index) => {
  currentActive = index;
  updateFullView();
  storiesFullView.classList.add("active");
};

closeBtn.addEventListener("click", () => {
  storiesFullView.classList.remove("active");
});

const updateFullView = () => {
  storyImageFull.src = allStories[currentActive].imageUrl;
  storyAuthorFull.innerHTML = allStories[currentActive].author;
};

nextBtn.addEventListener("click", () => {
  storiesContent.scrollLeft += 300;
});

previousBtn.addEventListener("click", () => {
  storiesContent.scrollLeft -= 300;
});

storiesContent.addEventListener("scroll", () => {
  if (storiesContent.scrollLeft <= 24) {
    previousBtn.classList.remove("active");
  } else {
    previousBtn.classList.add("active");
  }

  let maxScrollValue =
    storiesContent.scrollWidth - storiesContent.clientWidth - 24;

  if (storiesContent.scrollLeft >= maxScrollValue) {
    nextBtn.classList.remove("active");
  } else {
    nextBtn.classList.add("active");
  }
});

nextBtnFull.addEventListener("click", () => {
  if (currentActive >= allStories.length - 1) {
    return;
  }
  currentActive++;
  updateFullView();
});

previousBtnFull.addEventListener("click", () => {
  if (currentActive <= 0) {
    return;
  }
  currentActive--;
  updateFullView();
});
