function renderRoomTimeline(containerId, room, options = {}) {
  const timelineItems = [];

  if (room === "garden" && typeof gardenTimeline !== "undefined") {
    timelineItems.push(...gardenTimeline);
  }

  if (room === "fermentation" && typeof fermentationTimeline !== "undefined") {
    timelineItems.push(...fermentationTimeline);
  }

  if (typeof posts !== "undefined") {
    timelineItems.push(
      ...posts
        .filter((post) => {
          const categoryMatches = post.category?.toLowerCase() === room;

          const tagMatches = post.tags?.some(
            (tag) => tag.toLowerCase() === room
          );

          return categoryMatches || tagMatches;
        })
        .filter((post) => post.date)
        .map((post) => ({
          ...post,
          type: "post"
        }))
    );
  }

  if (typeof updates !== "undefined") {
    timelineItems.push(
      ...updates
        .filter((update) => update.room === room)
        .filter((update) => update.date)
        .map((update) => ({
          ...update,
          type: "update"
        }))
    );
  }

  renderTimeline(containerId, timelineItems, options);
}


function renderTimeline(containerId, timelineItems, options = {}) {
  const container = document.getElementById(containerId);
  if (!container || !timelineItems) return;

  const order = options.order || "asc";
  const showMonthMarker = options.showMonthMarker !== false;
  const timelineMode = options.timelineMode || "date";

  const sortedItems = timelineMode === "process"
    ? [...timelineItems]
    : [...timelineItems].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);

      return order === "desc"
        ? dateB - dateA
        : dateA - dateB;
    });

  let groupedItems;

  if (timelineMode === "process") {
    groupedItems = [
      {
        monthKey: timelineMode,
        label: options.processLabel || "",
        items: sortedItems,
      }
    ];
  } else {
    const monthOrder =
      options.monthOrder || getTimelineMonthOrder(sortedItems, order);

    groupedItems = monthOrder.map((monthKey) => ({
      monthKey,
      label: formatTimelineMonth(monthKey),
      items: sortedItems.filter((item) => item.date.startsWith(monthKey)),
    }));
  }

  container.innerHTML = groupedItems
    .map((month) => {
      const columns = balanceTimelineItems(month.items, order, options);

      return `
        <section class="timeline-month-section" id="timeline-${month.monthKey}">
          ${showMonthMarker
          ? `<div class="timeline-month-marker">${month.label}</div>`
          : ""}

         <div class="timeline-month-items ${timelineMode === "compact" ? "timeline-compact-items" : ""}">
  <svg class="timeline-thread-layer" aria-hidden="true"></svg>

  <div class="timeline-marker-layer">
    ${month.items.map((item, index) =>
      renderTimelineMarker(item, order, index, month.items.length, options)
    ).join("")}
  </div>

  ${timelineMode !== "compact" ? `
    <div class="timeline-desktop-columns">
      <div class="timeline-column timeline-column-left">
        ${columns.left.map(item =>
      renderTimelineEntry({ ...item, timelineMode })
    ).join("")}
      </div>

      <div class="timeline-column timeline-column-right">
        ${columns.right.map(item =>
      renderTimelineEntry({ ...item, timelineMode })
    ).join("")}
      </div>
    </div>
  ` : ""}

  <div class="timeline-mobile-list ${timelineMode === "compact" ? "timeline-compact-list" : ""}">
    ${month.items.map((item) =>
      renderTimelineEntry({
        ...item,
        timelineMode,
        timelineSpacer: 0,
      })
    ).join("")}
  </div>
</div>
        </section>
      `;
    })
    .join("");

  setupTimelineMarkerHover(container);
  setupTimelineEntryHover(container);
  setupTimelineImageLightbox(container);
  if (typeof setupUpdateCardModals === "function") {
    setupUpdateCardModals(container);
  }
  renderTimelineMonthJump(groupedItems);
}

function isMobileTimeline() {
  return window.matchMedia("(max-width: 700px)").matches;
}

function getTimelineMonthOrder(items, order = "asc") {
  const months = [...new Set(
    items.map((item) => item.date.slice(0, 7))
  )];

  return order === "desc"
    ? months.sort().reverse()
    : months.sort();
}

function getTimelineTilt(seed) {
  let hash = 0;

  for (let i = 0; i < seed.length; i++) {
    hash = seed.charCodeAt(i) + ((hash << 5) - hash);
  }

  const tilts = [-1.4, 1.1, -0.8, 1.5, -1.1, 0.9];
  return tilts[Math.abs(hash) % tilts.length];
}

function renderTimelineEntry(item) {
  const entryId = getTimelineEntryId(item);
  const dateGroup = getTimelineDateGroup(item);
  const spacer = item.timelineSpacer || 0;
  const tilt = getTimelineTilt(entryId);
  const htmlId = item.id ? `id="${item.id}"` : "";

  return `
    <article 
      ${htmlId}
      class="timeline-entry timeline-${item.type}" 
      data-entry="${entryId}"
      data-date-group="${dateGroup}"
      style="margin-top: ${spacer}rem; --timeline-tilt: ${tilt}deg;"
    >
      ${renderTimelineItem(item, { timelineMode: item.timelineMode })}
    </article>
  `;
}

function getTimelinePosition(item, order = "asc", index = 0, total = 1, options = {}) {
  if (options.timelineMode === "process" || options.timelineMode === "compact") {
    if (total <= 1) return 50;

    const position = (index / (total - 1)) * 100;
    return order === "desc" ? 100 - position : position;
  }

  return getDayPositionInMonth(item.date, order);
}

function getDayPositionInMonth(dateString, order = "asc") {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const position = ((day - 1) / (daysInMonth - 1)) * 100;

  return order === "desc" ? 100 - position : position;
}

function renderTimelineMarker(
  item,
  order = "asc",
  index = 0,
  total = 1,
  options = {}
) {
  const dateGroup = getTimelineDateGroup(item);
  const position = getTimelinePosition(item, order, index, total, options);

  const markerContent = item.markerImage
    ? `<img src="${item.markerImage}" alt="" class="timeline-marker-image">`
    : `<span class="timeline-marker-dot"></span>`;

  return `
    <button 
      class="timeline-marker" 
      type="button" 
      data-date-group="${dateGroup}" 
      style="top: ${position}%"
      aria-label="Highlight entries for ${item.title || formatTimelineDate(item.date)}"
    >
      ${markerContent}
    </button>
  `;
}

function renderTimelineItem(item) {
  const showDate = item.timelineMode !== "process";
  const date = showDate ? formatTimelineDate(item.date) : "";

  if (item.type === "post") {
    return createPostPreviewHTML(item);
  }

  if (item.type === "update") {
    return renderTimelineUpdateCard(item);
  }

  if (item.type === "photo") {
    const imageSrc = item.image;

    return `
      ${showDate ? `<div class="timeline-date">${date}</div>` : ""}

      ${(item.title || item.status)
        ? `<h3>
        ${item.title || ""}
        ${item.title && item.status ? " → " : ""}
        ${item.status || ""}
      </h3>`
        : ""
      }

      ${imageSrc
        ? `<img class="timeline-image" src="${imageSrc}" alt="${item.title || "Garden timeline photo"}">`
        : ""
      }
      ${item.text ? `<p>${item.text}</p>` : ""}
    `;
  }

  if (item.type === "video") {
    const videoSrc = item.image;
    const shouldLoop = item.loop === true;
    const posterAttr = item.poster ? `poster="${item.poster}"` : "";

    return `
      <div class="timeline-date">${date}</div>
      ${item.title ? `<h3>${item.title}</h3>` : ""}
      ${videoSrc
        ? `
            <video
              class="timeline-image timeline-video"
              src="${videoSrc}"
              autoplay
              muted
              ${shouldLoop ? "loop" : ""}
              playsinline
              preload="metadata"
              ${posterAttr}
              aria-label="${item.title || "Garden timeline video"}"
            ></video>
          `
        : ""
      }
      ${item.text ? `<p>${item.text}</p>` : ""}
    `;
  }

  return `
    <div class="timeline-date">${date}</div>
    ${item.title ? `<h3>${item.title}</h3>` : ""}
    ${item.text ? `<p>${item.text}</p>` : ""}
  `;
}

function balanceTimelineItems(items, order = "asc", options = {}) {
  const columns = { left: [], right: [] };

  const MAX_SPACER = 2; // prevents giant empty holes
  const MAX_DISTANCE_FROM_MARKER = 3;

  const estimatedTotalHeight = items.reduce(
    (sum, item) => sum + estimateTimelineItemWeight(item),
    0
  );

  // Month height now adapts to actual amount of content
  const monthHeight = Math.max(14, estimatedTotalHeight / 2 + items.length * 1.5);

  let leftCursor = 0;
  let rightCursor = 0;

  items.forEach((item, index) => {
    const itemHeight = estimateTimelineItemWeight(item);
    const markerPosition = getTimelinePosition(item, order, index, items.length, options) / 100;
    const markerY = markerPosition * monthHeight;

    let chosenSide = index === 0
      ? "left"
      : leftCursor <= rightCursor
        ? "left"
        : "right";

    let cursor = chosenSide === "left" ? leftCursor : rightCursor;

    let spacer = Math.max(0, markerY - cursor - MAX_DISTANCE_FROM_MARKER);

    // Important: cap the spacer so sparse months don't become enormous
    spacer = Math.min(spacer, MAX_SPACER);

    const layoutItem = {
      ...item,
      timelineSpacer: spacer,
    };

    columns[chosenSide].push(layoutItem);

    const newCursor = cursor + spacer + itemHeight;

    if (chosenSide === "left") {
      leftCursor = newCursor;
    } else {
      rightCursor = newCursor;
    }
  });

  return columns;
}

function estimateTimelineItemWeight(item) {
  let height = 4;

  if (item.title) height += 1.2;
  if (item.text) height += item.text.length / 80;

  if (item.image) {
    switch (item.imageSize) {
      case "landscape":
        height += 3;
        break;

      case "square":
        height += 7;
        break;

      case "portrait":
        height += 9;
        break;

      default:
        height += 8;
    }
  }

  return height;
}

function setupTimelineMarkerHover(container) {
  container.querySelectorAll(".timeline-marker").forEach((marker) => {
    marker.addEventListener("mouseenter", () => {
      activateTimelineThread(container, marker);
    });

    marker.addEventListener("mouseleave", () => {
      clearTimelineThreads(container);
    });

    marker.addEventListener("focus", () => {
      activateTimelineThread(container, marker);
    });

    marker.addEventListener("blur", () => {
      clearTimelineThreads(container);
    });
  });
}

function activateTimelineThread(container, marker) {
  if (isMobileTimeline()) return;
  const dateGroup = marker.dataset.dateGroup;

  clearTimelineThreads(container);

  marker.classList.add("timeline-marker-active");

  const monthItems = marker.closest(".timeline-month-items");
  const svg = monthItems.querySelector(".timeline-thread-layer");

  const entries = [...monthItems.querySelectorAll(
    `.timeline-entry[data-date-group="${dateGroup}"]`
  )].filter(isVisibleTimelineEntry);

  entries.forEach((entry) => {
    entry.classList.add("timeline-highlight");
    drawTimelineThread(monthItems, svg, marker, entry);
  });
}

function isVisibleTimelineEntry(entry) {
  return entry.offsetParent !== null;
}

function setupTimelineEntryHover(container) {
  container.querySelectorAll(".timeline-entry").forEach((entry) => {
    entry.addEventListener("mouseenter", () => {
      activateTimelineThreadFromEntry(container, entry);
    });

    entry.addEventListener("mouseleave", () => {
      clearTimelineThreads(container);
    });
  });
}

function activateTimelineThreadFromEntry(container, entry) {
  if (isMobileTimeline()) return;
  const dateGroup = entry.dataset.dateGroup;

  clearTimelineThreads(container);

  entry.classList.add("timeline-highlight");

  const monthItems = entry.closest(".timeline-month-items");
  const svg = monthItems.querySelector(".timeline-thread-layer");

  const marker = monthItems.querySelector(
    `.timeline-marker[data-date-group="${dateGroup}"]`
  );

  if (!marker) return;

  marker.classList.add("timeline-marker-active");

  drawTimelineThread(monthItems, svg, marker, entry, true);
}

function clearTimelineThreads(container) {
  container.querySelectorAll(".timeline-highlight").forEach((entry) => {
    entry.classList.remove("timeline-highlight");
  });

  container.querySelectorAll(".timeline-marker-active").forEach((marker) => {
    marker.classList.remove("timeline-marker-active");
  });

  container.querySelectorAll(".timeline-thread-layer").forEach((svg) => {
    svg.innerHTML = "";
  });
}

function drawTimelineThread(wrapper, svg, marker, entry, reverse = false) {
  const wrapperRect = wrapper.getBoundingClientRect();
  const markerRect = marker.getBoundingClientRect();
  const entryRect = entry.getBoundingClientRect();

  const markerX = markerRect.left + markerRect.width / 2 - wrapperRect.left;
  const markerY = markerRect.top + markerRect.height / 2 - wrapperRect.top;

  const entryX =
    entryRect.left < markerRect.left
      ? entryRect.right - wrapperRect.left
      : entryRect.left - wrapperRect.left;

  const entryY = entryRect.top + entryRect.height / 2 - wrapperRect.top;

  const controlX = (markerX + entryX) / 2;

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

  path.setAttribute(
    "d",
    `M ${markerX} ${markerY} C ${controlX} ${markerY}, ${controlX} ${entryY}, ${entryX} ${entryY}`
  );

  path.setAttribute("class", "timeline-thread-path");

  svg.appendChild(path);

  const length = path.getTotalLength();

  path.style.strokeDasharray = length;
  path.style.strokeDashoffset = reverse ? -length : length;

  // Force browser to apply the hidden state first
  path.getBoundingClientRect();

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      path.classList.add("timeline-thread-draw");
      path.style.strokeDashoffset = 0;
    });
  });
}

function getTimelineEntryId(item) {
  return `${item.date}-${(item.title || item.text || item.type)
    .toLowerCase()
    .replace(/<br>/g, "-")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")}`;
}

function getTimelineDateGroup(item) {
  return item.date;
}

function formatTimelineDate(dateString) {
  return new Date(dateString).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
  });
}

function formatTimelineMonth(monthKey) {
  const [year, month] = monthKey.split("-");

  return new Date(Number(year), Number(month) - 1).toLocaleDateString("en-GB", {
    month: "short",
  });
}

function setupTimelineImageLightbox(container) {
  container.querySelectorAll(".timeline-image").forEach((media) => {
    media.addEventListener("click", () => {
      const src = media.currentSrc || media.src;
      const alt = media.alt || media.getAttribute("aria-label") || "";

      openTimelineLightbox(src, alt);
    });
  });
}

function openTimelineLightbox(src, alt = "") {
  const isVideo = /\.(mp4|webm|mov)$/i.test(src);

  openSiteModal(
    isVideo
      ? `
        <video
          src="${src}"
          class="timeline-lightbox-image timeline-lightbox-video"
          controls
          autoplay
          muted
          loop
          playsinline
        ></video>
      `
      : `<img src="${src}" alt="${alt}" class="timeline-lightbox-image">`,
    {
      contentClass: "timeline-lightbox-content"
    }
  );
}

function renderTimelineMonthJump(groupedItems) {
  const jumpLists = document.querySelectorAll(".timeline-month-jump");
  if (!jumpLists.length) return;

  const jumpMonths = [...groupedItems]
    .filter((month) => month.items.length > 0)
    .sort((a, b) => a.monthKey.localeCompare(b.monthKey));

  const jumpHtml = jumpMonths
    .map(
      (month) => `
        <li>
        <a href="#timeline-${month.monthKey}">${month.label}</a>
        </li>
      `
    )
    .join("");

  jumpLists.forEach((jumpList) => {
    jumpList.innerHTML = jumpHtml;
  });
}