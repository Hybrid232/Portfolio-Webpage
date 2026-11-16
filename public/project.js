import { projects } from './projects-data.js';

function getSections() {
  const sections = [];
  projects.forEach(project => {
    if (!sections.includes(project.section)) sections.push(project.section);
  });
  return sections;
}

const sectionPanels = new Map();

// Every slide the modal can show for a project: the video (if any) first, then the images.
function getMedia(project) {
  const media = project.imageModal.map((src) => ({ type: 'image', src }));
  if (project.video) media.unshift({ type: 'video', ...project.video });
  return media;
}

function linkLabel(url) {
  if (url.includes('github.com')) return 'GitHub';
  if (url.includes('itch.io')) return 'itch.io';
  if (url.includes('youtu')) return 'YouTube';
  if (url.includes('vimeo.com')) return 'Vimeo';
  return 'Website';
}

// Templates

function tabButtonTemplate(section, index) {
  const activeClass = index === 0 ? " active" : "";
  return `<button type="button" class="tab-button${activeClass}" data-section="${section}">${section}</button>`;
}

function tabPanelTemplate(index) {
  const activeClass = index === 0 ? " active" : "";
  return `<div class="tab-panel${activeClass}"></div>`;
}

function pointsTemplate(points) {
  return `<ul class="project-points">${points.map((point) => `<li>${point}</li>`).join('')}</ul>`;
}

function tagsTemplate(tags) {
  return `<div class="project-tags">${tags
    .map((tag) => `<span class="tag-button">${tag}</span>`)
    .join('')}</div>`;
}

function linksTemplate(links, linkImgs) {
  return `<div class="project-links">${links
    .map((link, i) => {
      const label = linkLabel(link);
      return `<a href="${link}" target="_blank" rel="noopener" class="project-link" title="${label}">
      <img src="${linkImgs[i]}" alt="${label}" class="github-icon"><span>${label}</span>
    </a>`;
    })
    .join('')}</div>`;
}

function itchEmbedTemplate(project) {
  if (!project.itchEmbed) return '';
  return `<iframe class="itch-embed" src="${project.itchEmbed.src}" height="${project.itchEmbed.height}"
    loading="lazy" title="${project.title} on itch.io" frameborder="0"></iframe>`;
}

function projectCardTemplate(project, index) {
  const videoBadge = project.video ? `<span class="thumb-badge">&#9654; Watch video</span>` : '';
  const mediaCount = getMedia(project).length;
  return `<article class="project-card">
  <button type="button" class="project-thumb" data-project-index="${index}"
    aria-label="Open ${project.title} gallery (${mediaCount} items)">
    <img src="${project.imageModal[0]}" alt="${project.title}" class="project-thumbnail" loading="lazy">
    ${videoBadge}
  </button>
  <div class="project-info">
    <h3>${project.title}</h3>
    ${tagsTemplate(project.tags)}
    <p>${project.description}</p>
    ${pointsTemplate(project.points)}
    ${itchEmbedTemplate(project)}
    ${linksTemplate(project.links, project.linkImgs)}
  </div>
</article>`;
}

// ---- Build the tabs/panels shell, then render cards into it ----

function buildPortfolioShell() {
  const container = document.querySelector('.portfolio-container');
  if (!container) return;

  const sections = getSections();
  const tabsHtml = sections.map((section, i) => tabButtonTemplate(section, i)).join('');
  const panelsHtml = sections.map((section, i) => tabPanelTemplate(i)).join('');

  container.innerHTML = `<h2 class="section-title reveal">My Projects</h2>
  <div class="tabs reveal">${tabsHtml}</div>
  <div class="tab-content">${panelsHtml}</div>`;

  // Panels were just created in DOM order matching `sections` - pair them up
  // once here so nothing downstream needs to regenerate an id to find one.
  sectionPanels.clear();
  const panelEls = container.querySelectorAll('.tab-panel');
  sections.forEach((section, i) => sectionPanels.set(section, panelEls[i]));
}

function renderAllProjects() {
  sectionPanels.forEach((panel, section) => {
    panel.innerHTML = projects
      .map((project, index) => (project.section === section ? projectCardTemplate(project, index) : ''))
      .join('');
  });
}

// Thumbnails are built from an HTML string, so listeners get wired up
// after the fact, using the data-project-index each one carries.
function attachThumbnailClicks() {
  document.querySelectorAll('.project-thumb').forEach((thumb) => {
    const index = Number(thumb.getAttribute('data-project-index'));
    thumb.addEventListener('click', () => openModal(index, 0));
  });
}

function initTabs() {
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabPanels = document.querySelectorAll('.tab-panel');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      tabButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const section = button.getAttribute('data-section');

      tabPanels.forEach(panel => panel.classList.remove('active'));
      const targetPanel = sectionPanels.get(section);
      if (targetPanel) targetPanel.classList.add('active');
    });
  });
}

// Media modal (images + embedded video)
function modalTemplate() {
  return `<button class="modal-close" id="modal-close" aria-label="Close">&times;</button>
  <button class="modal-nav modal-prev" id="modal-prev" aria-label="Previous">&#10094;</button>
  <div class="modal-image-wrapper">
    <img class="modal-image" id="modal-image" src="" alt="">
    <div class="modal-video" id="modal-video" hidden>
      <div class="modal-video-frame" id="modal-video-frame"></div>
      <a class="modal-video-link" id="modal-video-link" href="#" target="_blank" rel="noopener">Open video page &#8599;</a>
    </div>
  </div>
  <button class="modal-nav modal-next" id="modal-next" aria-label="Next">&#10095;</button>
  <span class="modal-counter" id="modal-counter"></span>`;
}

function buildModalShell() {
  const modal = document.createElement('div');
  modal.className = 'image-modal';
  modal.id = 'image-modal';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.innerHTML = modalTemplate();
  document.body.appendChild(modal);
}

let currentProjectIndex = 0;
let currentImageIndex = 0;
let imageModal, modalImage, modalVideo, modalVideoFrame, modalVideoLink;
let modalCloseBtn, modalPrevBtn, modalNextBtn, modalCounter;

function currentMedia() {
  return getMedia(projects[currentProjectIndex]);
}

function openModal(projectIndex, imageIndex) {
  currentProjectIndex = projectIndex;
  currentImageIndex = imageIndex;
  updateModalMedia();
  imageModal.classList.add('active');
  document.body.classList.add('modal-open');
  modalCloseBtn.focus();
}

function closeModal() {
  imageModal.classList.remove('active');
  document.body.classList.remove('modal-open');
  stopVideo();
}

// Removing the iframe is the only reliable way to stop playback across providers.
function stopVideo() {
  modalVideoFrame.innerHTML = '';
}

function updateModalMedia() {
  const media = currentMedia();
  const item = media[currentImageIndex];
  const title = projects[currentProjectIndex].title;

  if (item.type === 'video') {
    modalImage.hidden = true;
    modalImage.removeAttribute('src');
    modalVideo.hidden = false;
    modalVideoFrame.innerHTML = `<iframe src="${item.src}" title="${item.title || title}"
      allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
      referrerpolicy="strict-origin-when-cross-origin" allowfullscreen frameborder="0"></iframe>`;
    modalVideoLink.href = item.page || item.src;
  } else {
    stopVideo();
    modalVideo.hidden = true;
    modalImage.hidden = false;
    modalImage.src = item.src;
    modalImage.alt = title;
  }

  const showNav = media.length > 1;
  modalPrevBtn.hidden = !showNav;
  modalNextBtn.hidden = !showNav;
  modalCounter.textContent = (currentImageIndex + 1) + " / " + media.length;
}

function showNextImage() {
  const media = currentMedia();
  currentImageIndex = (currentImageIndex + 1) % media.length;
  updateModalMedia();
}

function showPrevImage() {
  const media = currentMedia();
  currentImageIndex = (currentImageIndex - 1 + media.length) % media.length;
  updateModalMedia();
}

function initModal() {
  imageModal = document.getElementById('image-modal');
  modalImage = document.getElementById('modal-image');
  modalVideo = document.getElementById('modal-video');
  modalVideoFrame = document.getElementById('modal-video-frame');
  modalVideoLink = document.getElementById('modal-video-link');
  modalCloseBtn = document.getElementById('modal-close');
  modalPrevBtn = document.getElementById('modal-prev');
  modalNextBtn = document.getElementById('modal-next');
  modalCounter = document.getElementById('modal-counter');

  modalCloseBtn.addEventListener('click', closeModal);
  modalNextBtn.addEventListener('click', showNextImage);
  modalPrevBtn.addEventListener('click', showPrevImage);

  imageModal.addEventListener('click', (e) => {
    if (e.target === imageModal || e.target.classList.contains('modal-image-wrapper')) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (!imageModal.classList.contains('active')) return;
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowRight') showNextImage();
    if (e.key === 'ArrowLeft') showPrevImage();
  });
}

// Mobile hamburger menu
function initHamburgerMenu() {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navLinks = document.getElementById('nav-links');
  const navOverlay = document.getElementById('nav-overlay');

  if (!hamburgerBtn || !navLinks || !navOverlay) return;

  function openMenu() {
    navLinks.classList.add('open');
    navOverlay.classList.add('active');
    hamburgerBtn.classList.add('active');
    hamburgerBtn.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    navLinks.classList.remove('open');
    navOverlay.classList.remove('active');
    hamburgerBtn.classList.remove('active');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
  }

  hamburgerBtn.addEventListener('click', () => {
    if (navLinks.classList.contains('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  navOverlay.addEventListener('click', closeMenu);
  // Jumping to a section from the slide-out menu should also close it.
  navLinks.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeMenu));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
}

// Highlight the nav link for whichever section is in the middle of the screen.
function initScrollSpy() {
  const links = document.querySelectorAll('.nav-links a[href^="#"]');
  const sections = document.querySelectorAll('.page-section');
  if (!links.length || !sections.length || !('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
      });
    });
  }, { rootMargin: '-45% 0px -50% 0px' });

  sections.forEach((section) => observer.observe(section));
}

// Fade sections in as they scroll into view.
function initReveal() {
  const targets = document.querySelectorAll('.reveal, .portfolio-container');
  if (!('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('in-view'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('in-view');
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.12 });

  targets.forEach((el) => observer.observe(el));
}

// Init
if (document.querySelector('.portfolio-container')) {
  buildPortfolioShell();
  renderAllProjects();
  attachThumbnailClicks();
  initTabs();
  buildModalShell();
  initModal();
}
initHamburgerMenu();
initScrollSpy();
initReveal();

// The projects section is built by this script, so a browser that jumped to a
// #hash on load (e.g. /#contact) landed before the page grew. Jump again now,
// and once more after images finish loading in case they shifted the layout.
function scrollToHash() {
  if (!location.hash) return;
  const target = document.getElementById(location.hash.slice(1));
  if (target) target.scrollIntoView({ behavior: 'instant', block: 'start' });
}
scrollToHash();
window.addEventListener('load', scrollToHash, { once: true });
