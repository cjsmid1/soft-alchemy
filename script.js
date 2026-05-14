// =============================
// script.js
// =============================

// Active tag filter
let activeTag = null;

// DOM references
const postsContainer = document.getElementById("posts");
const searchInput = document.getElementById("search");
const categoryFilter = document.getElementById("categoryFilter");
const postContainer = document.getElementById("post");

// -----------------------------
// DARK MODE + ICON SWAP
// -----------------------------
function getTheme() {
  return localStorage.getItem("theme") || "light";
}

function applyTheme() {
  const isDark = getTheme() === "dark";

  document.documentElement.classList.toggle("dark", isDark);

  const btn = document.querySelector("#themeToggle");
  if (!btn) return;

  btn.dataset.mode = isDark ? "dark" : "light";
}

function toggleTheme() {
  const isDark = !document.documentElement.classList.contains("dark");
  document.documentElement.classList.toggle("dark", isDark);
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

document.addEventListener("click", (e) => {
  const btn = e.target.closest("#themeToggle");
  if (!btn) return;

  toggleTheme();
});


// -----------------------------
// NAVIGATION
// -----------------------------
function loadNavigation() {
  if (document.querySelector(".nav")) return;

  const navigationHTML = `
    <nav class="nav">
      <div class="nav-box">
        <div class="nav-left">
          <a href="about.html">About</a>
		  <div class="nav-dropdown">
            <button class="nav-dropdown-toggle" type="button">
              Explore
            </button>
          
            <div class="nav-dropdown-menu">
              <a href="kitchen.html">The Kitchen</a>
              <a href="study.html">The Study</a>
              <a href="post.html?id=the-library">The Library</a>
              <a href="garden.html">The Garden</a>
            </div>
          </div>
        </div>

        <a class="nav-logo" href="index.html">
          <img id="alchemyLogo" src="images/writing-soft-alchemy.gif" alt="Soft Alchemy">
        </a>

        <div class="nav-right">
          <a href="blog.html">Archive</a>
          <a href="about.html#contact">Contact</a>
        </div>
      </div>
    </nav>
  `;

  document.body.insertAdjacentHTML("afterbegin", navigationHTML);
}

document.addEventListener("click", (e) => {
  const toggle = e.target.closest(".nav-dropdown-toggle");
  const dropdown = e.target.closest(".nav-dropdown");

  document.querySelectorAll(".nav-dropdown.open").forEach(menu => {
    if (menu !== dropdown) menu.classList.remove("open");
  });

  if (toggle && dropdown) {
    dropdown.classList.toggle("open");
  }
});


// -----------------------------
// POPULATE CATEGORY FILTER
// -----------------------------
if (categoryFilter) {
  const categories = [...new Set(posts.map(p => p.category))];
  categories.forEach(cat => {
    const option = document.createElement("option");
    option.value = cat;
    option.textContent = cat;
    categoryFilter.appendChild(option);
  });
}

// -----------------------------
// FORMAT TAGS
// -----------------------------
function formatTag(tag) {
  return tag
    .replace(/-/g, " ")              // replace hyphens with spaces
    .replace(/\b\w/g, c => c.toUpperCase()); // capitalise each word
}

// -----------------------------
// RENDER BLOG POSTS
// -----------------------------
function createPostPreviewHTML(post, options = {}) {
  const { activeTag = null } = options;

  return `
    <div class="title-row">
      <h2>
        <a href="post.html?id=${post.id}">${post.title}</a>
      </h2>

      <div class="category-title ${post.category.toLowerCase()}">
        ${post.category}
      </div>
    </div>

    <p>${post.excerpt}</p>

    <div class="tag-list">
      ${post.tags.map(tag => `
        <span class="tag ${tag === activeTag ? "active" : ""}" data-tag="${tag}">
          ${formatTag(tag)}
        </span>
      `).join("")}
    </div>
  `;
}

function addTagClickHandlers(container, callback) {
  container.querySelectorAll(".tag").forEach(el => {
    el.addEventListener("click", () => {
      callback(el.dataset.tag);
    });
  });
}

function renderPosts(filteredPosts) {
  if (!postsContainer) return;

  postsContainer.innerHTML = "";

  filteredPosts.forEach((post, i) => {
    const card = document.createElement("div");
    card.className = "card fade-in";
    card.style.animationDelay = `${i * 50}ms`;

    card.innerHTML = createPostPreviewHTML(post, { activeTag });

    postsContainer.appendChild(card);
  });

  addTagClickHandlers(postsContainer, setTagFilter);
}

function renderLatestPost(containerId, category = null) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const latestPost = category
    ? posts.find(post => post.category.toLowerCase() === category.toLowerCase())
    : posts[0];

  if (!latestPost) return;

  container.innerHTML = createPostPreviewHTML(latestPost);

  addTagClickHandlers(container, tag => {
    window.location.href = `blog.html?tag=${encodeURIComponent(tag)}`;
  });
}

function renderFeaturedPost(postId, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const post = posts.find(p => p.id === postId);
  if (!post) return;

  container.innerHTML = createPostPreviewHTML(post);

  addTagClickHandlers(container, tag => {
    window.location.href = `blog.html?tag=${encodeURIComponent(tag)}`;
  });
}

// -----------------------------
// FILTER POSTS
// -----------------------------
function filterPosts(updateURL = true) {
  let filtered = posts;

  const search = searchInput?.value.toLowerCase() || "";
  const category = categoryFilter?.value;

  if (search) {
    filtered = filtered.filter(
      p => p.title.toLowerCase().includes(search) ||
           p.tags.some(t => t.includes(search))
    );
  }

  if (category) {
    filtered = filtered.filter(p => p.category === category);
  }

  if (activeTag) {
    filtered = filtered.filter(p => p.tags.includes(activeTag));
  }

  renderPosts(filtered);

  // Update URL without reloading
  if (updateURL) {
    const params = new URLSearchParams(window.location.search);
    if (activeTag) params.set("tag", activeTag);
    else params.delete("tag");
    window.history.replaceState({}, "", `${location.pathname}?${params}`);
  }
}

// -----------------------------
// TAG CLICK HANDLER
// -----------------------------
function setTagFilter(tag) {
  activeTag = activeTag === tag ? null : tag; // toggle
  filterPosts();
}

// -----------------------------
// EVENT LISTENERS
// -----------------------------
searchInput?.addEventListener("input", () => filterPosts());
categoryFilter?.addEventListener("change", () => filterPosts());

// -----------------------------
// INITIAL BLOG RENDER
// -----------------------------
if (postsContainer) {
  // Apply tag from URL on load
  const urlParams = new URLSearchParams(window.location.search);
  const tagFromUrl = urlParams.get("tag");
  if (tagFromUrl) activeTag = tagFromUrl;

  filterPosts(false);
}

// -----------------------------
// SINGLE POST PAGE
// -----------------------------
if (postContainer) {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const post = posts.find(p => p.id === id);

  if (post) {
    // Inject HTML
    postContainer.innerHTML = `
  <div class="title-row">
    <h1>${post.title}</h1>
    <div class="category-title ${post.category.toLowerCase()}">${post.category}</div>
  </div>
  <div class="tag-list">
    ${post.tags.map(tag => `
      <span class="tag" data-tag="${tag}">${formatTag(tag)}</span>
    `).join("")}
  </div>
  <div class="content">${post.content}</div>
`;

    // Force reflow + fade-in animation
    requestAnimationFrame(() => {
      void postContainer.offsetWidth; // ensures reflow
      postContainer.classList.add("fade-in");
    });

    // Add tag click event to go to filtered blog
    postContainer.querySelectorAll(".tag").forEach(el => {
      el.addEventListener("click", () => {
        const tag = el.dataset.tag;
        window.location.href = `blog.html?tag=${encodeURIComponent(tag)}`;
      });
    });
	
	renderBookshelvesForPage(bookshelfConfigs);
  }
}

document.querySelectorAll(".chaos-list li").forEach(el => {
  const rotate = (Math.random() * 6) - 3;
  const yShift = (Math.random() * 6) - 3;
  const size = 0.95 + Math.random() * 0.25; // 0.95 → 1.10

  el.dataset.rotate = rotate;
  el.dataset.y = yShift;

  el.style.transform = `
    rotate(${rotate}deg)
    translateY(${yShift}px)
    scale(${size})
  `;

});

// -----------------------------
// FUNCTION TO GO TO TAG (USED IN SINGLE POST)
// -----------------------------
function goToTag(tag) {
  window.location.href = `blog.html?tag=${encodeURIComponent(tag)}`;
}

// -----------------------------
// RANDOM POST
// -----------------------------
function goToRandomPost() {
  if (!posts || posts.length === 0) return;

  const randomIndex = Math.floor(Math.random() * posts.length);
  const randomPost = posts[randomIndex];

  window.location.href = `post.html?id=${randomPost.id}`;
}

document.addEventListener("click", (e) => {
  const randomBtn = e.target.closest("#randomPostBtn");
  if (!randomBtn) return;

  e.preventDefault();
  goToRandomPost();
});

// -----------------------------
// BOOKSHELF
// -----------------------------
function renderBookshelf(shelfId, books, allowEcho = false) {
  const shelf = document.getElementById(shelfId);
  if (!shelf) return;

  const echoIndex = allowEcho && books.length > 0
    ? Math.floor(Math.random() * books.length)
    : -1;

  shelf.innerHTML = books.map((book, index) => {
    const tag = book.url ? "a" : "div";
  
    return `
      <${tag}
        class="book-card ${index === echoIndex ? "echo-interruption-card" : ""}"
  
        ${book.url ? `
          href="${book.url}"
          target="_blank"
          rel="noopener noreferrer"
        ` : ""}
  
        data-original-title="${book.title}"
        data-original-author="${book.author || ""}"
        data-original-image="${book.image}"
        data-original-alt="${book.title} cover"
  
        data-echo-image="images/echo-book.jpg"
        data-echo-title="🐾 Echo Interruption!"
        data-echo-author="Every library needs a familiar"
      >
        <img src="${book.image}" alt="${book.title} cover">
  
        <div class="book-info">
          <h3>${book.title}</h3>
  
          <p class="book-author">
            ${book.author || ""}
          </p>
  
          ${book.status
            ? `<span class="book-status">${book.status}</span>`
            : ""}
  
          ${book.genre
            ? `<span class="book-genre-stamp">${book.genre}</span>`
            : ""}
        </div>
      </${tag}>
    `;
  }).join("");

  addEchoInterruption(shelf);
}

function renderBookshelvesForPage(configs = []) {
  const validShelves = configs.filter(config =>
    Array.isArray(config.books) && document.getElementById(config.id)
  );

  // Only add Echo if there are more than 2 shelves
  const echoShelfIndex = validShelves.length > 2
    ? Math.floor(Math.random() * validShelves.length)
    : -1;

  validShelves.forEach((config, index) => {
    renderBookshelf(config.id, config.books, index === echoShelfIndex);
  });
}

function addEchoInterruption(shelf) {
  const echoCard = shelf.querySelector(".echo-interruption-card");
  if (!echoCard) return;

  const img = echoCard.querySelector("img");
  const title = echoCard.querySelector("h3");
  const author = echoCard.querySelector(".book-author");

  echoCard.addEventListener("mouseenter", () => {
    img.src = echoCard.dataset.echoImage;
    img.alt = "Echo interrupting the bookshelf";
    title.innerHTML = echoCard.dataset.echoTitle;
    author.textContent = echoCard.dataset.echoAuthor;
    echoCard.classList.add("is-echo");
  });

  echoCard.addEventListener("mouseleave", () => {
    img.src = echoCard.dataset.originalImage;
    img.alt = echoCard.dataset.originalAlt;
    title.innerHTML = echoCard.dataset.originalTitle;
    author.textContent = echoCard.dataset.originalAuthor;
    echoCard.classList.remove("is-echo");
  });
}

// -----------------------------
// FOOTER
// -----------------------------
function loadFooter() {
  const footerHTML = `
    <footer>
      <div class="footer-meta">

        <button id="themeToggle" class="theme-toggle" aria-label="Toggle theme">
          <span class="icon sun">☀️</span>
          <span class="icon moon">🌙</span>
        </button>

        <div class="footer-center">
          <span class="footer-text">
            Soft Alchemy | Built with Tea & Puppy Distractions
          </span>

          <div class="paw-trail">
            <img class="paw-print" style="--i:1" src="images/paw-print.png" alt="">
            <img class="paw-print" style="--i:2" src="images/paw-print.png" alt="">
            <img class="paw-print" style="--i:3" src="images/paw-print.png" alt="">
            <img class="paw-print" style="--i:4" src="images/paw-print.png" alt="">
            <img class="paw-print" style="--i:5" src="images/paw-print.png" alt="">
			<img class="paw-print" style="--i:6" src="images/paw-print.png" alt="">
            <img class="paw-print" style="--i:7" src="images/paw-print.png" alt="">
            <img class="paw-print" style="--i:8" src="images/paw-print.png" alt="">
            <img class="paw-print" style="--i:9" src="images/paw-print.png" alt="">
            <img class="paw-print" style="--i:10" src="images/paw-print.png" alt="">
			<img class="paw-print" style="--i:11" src="images/paw-print.png" alt="">
            <img class="paw-print" style="--i:12" src="images/paw-print.png" alt="">
            <img class="paw-print" style="--i:13" src="images/paw-print.png" alt="">
			<img class="paw-print" style="--i:14" src="images/paw-print.png" alt="">
            <img class="paw-print" style="--i:15" src="images/paw-print.png" alt="">
            <img class="paw-print" style="--i:16" src="images/paw-print.png" alt="">
          </div>
        </div>

      </div>
    </footer>
  `;

  document.body.insertAdjacentHTML('beforeend', footerHTML);
}

document.addEventListener("DOMContentLoaded", () => {
  loadNavigation();
  
  const logo = document.getElementById("alchemyLogo");
  if (logo) {
    setTimeout(() => {
      logo.src = "images/soft_alchemy_final_frame.png";
    }, 5500);
  }
  
  loadFooter();
  applyTheme();
});