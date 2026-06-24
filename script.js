/* ===========================================================
   DAMILOLAA — Editorial Portfolio — interactions
=========================================================== */

/* ---------------- DATA ---------------- */

const GALLERY = [
  {src:'assets/streetwear-01.jpg', cat:'streetwear', name:'African Streetwear', tall:true},
  {src:'assets/streetwear-02.jpg', cat:'streetwear', name:'African Streetwear'},
  {src:'assets/streetwear-03.png', cat:'streetwear', name:'African Streetwear'},
  {src:'assets/streetwear-04.jpg', cat:'streetwear', name:'African Streetwear', tall:true},
  {src:'assets/editorial-01.jpg', cat:'editorial', name:'Dami Fashion Editorial'},
  {src:'assets/editorial-02.jpg', cat:'editorial', name:'Dami Fashion Editorial', tall:true},
  {src:'assets/editorial-03.jpg', cat:'editorial', name:'Dami Fashion Editorial'},
  {src:'assets/editorial-04.png', cat:'editorial', name:'Dami Fashion Editorial'},
  {src:'assets/hero-main.png', cat:'editorial', name:'Editorial Lead', tall:true},
  {src:'assets/oldmoney-01.jpg', cat:'luxury', name:'Old Money'},
  {src:'assets/oldmoney-02.jpg', cat:'luxury', name:'Old Money', tall:true},
  {src:'assets/sbr-01.jpg', cat:'luxury', name:'SBR'},
  {src:'assets/sbr-02.jpg', cat:'luxury', name:'SBR'},
  {src:'assets/hope-01.png', cat:'creative', name:'Hope'},
  {src:'assets/hope-02.png', cat:'creative', name:'Hope', tall:true},
  {src:'assets/hope-03.jpg', cat:'creative', name:'Hope'},
  {src:'assets/dxc-01.png', cat:'commercial', name:'DXC Models'},
  {src:'assets/dxc-02.png', cat:'commercial', name:'DXC Models'},
  {src:'assets/dxc-03.png', cat:'commercial', name:'DXC Models', tall:true},
  {src:'assets/lego-01.jpg', cat:'campaign', name:'Lego'},
  {src:'assets/lego-02.jpg', cat:'campaign', name:'Lego', tall:true},
  {src:'assets/lego-03.jpg', cat:'campaign', name:'Lego'},
  {src:'assets/lego-04.jpg', cat:'campaign', name:'Lego'},
  {src:'assets/lego-05.jpg', cat:'campaign', name:'Lego', tall:true},
  {src:'assets/lego-06.jpg', cat:'campaign', name:'Lego'},
  {src:'assets/greenyankees-01.jpg', cat:'campaign', name:"Green Yankee's"},
  {src:'assets/greenyankees-02.png', cat:'campaign', name:"Green Yankee's", tall:true},
  {src:'assets/greenyankees-03.png', cat:'campaign', name:"Green Yankee's"},
  {src:'assets/greenyankees-04.jpg', cat:'campaign', name:"Green Yankee's"},
  {src:'assets/dstreetwears-01.png', cat:'editorial', name:'dstreetwears', tall:true},
  {src:'assets/dstreetwears-02.png', cat:'editorial', name:'dstreetwears'},
  {src:'assets/dstreetwears-03.png', cat:'editorial', name:'dstreetwears'},
  {src:'assets/hope-04.jpg', cat:'creative', name:'Hope', tall:true},
  {src:'assets/oldmoney-03.jpg', cat:'luxury', name:'Old Money'},
  {src:'assets/oldmoney-04.jpg', cat:'luxury', name:'Old Money', tall:true},
  {src:'assets/sbr-03.jpg', cat:'luxury', name:'SBR'},
  {src:'assets/portrait-01.jpg', cat:'editorial', name:'Editorial Portrait'},
];

const BRANDS = [
  {
    id:'african-streetwear', index:'01', name:'African Streetwear',
    blurb:'A street-cast story built around colour-blocked tailoring and Lagos pace — shot in motion, graded down to grain.',
    tag:'Streetwear Campaign',
    hero:'assets/streetwear-01.jpg',
    reel:['assets/streetwear-01.jpg','assets/streetwear-02.jpg','assets/streetwear-03.png','assets/streetwear-04.jpg'],
    face:'The brand wanted a face that could hold the energy of the street without losing the polish of a campaign frame — Damilolaa anchored every set-up as both subject and co-director of movement.'
  },
  {
    id:'dami-editorial', index:'02', name:'Dami Fashion Look Editorial',
    blurb:'A solo editorial sitting — four looks, one continuous mood. Soft directional light, hard black backdrop.',
    tag:'Editorial Sitting',
    hero:'assets/editorial-01.jpg',
    reel:['assets/editorial-01.jpg','assets/editorial-02.jpg','assets/editorial-03.jpg','assets/editorial-04.png','assets/hero-main.png'],
    face:'Self-led creative direction — wardrobe, posing and pacing built entirely around Damilolaa\'s own read of each look.'
  },
  {
    id:'dstreetwear', index:'03', name:'DStreetwear',
    blurb:'A single hero frame for DStreetwear\'s capsule drop — high contrast, low colour, full attitude.',
    tag:'Capsule Campaign',
    hero:'assets/dstreetwears-01.png',
    reel:['assets/dstreetwears-02.png','assets/dstreetwears-03.png','assets/insta-1.jpeg','assets/insta-4.jpeg'],
    face:'Cast as the face of the capsule drop, carrying the brand\'s identity in a single decisive frame.'
  },
  {
    id:'dxc-models', index:'04', name:'DXC Models',
    blurb:'Agency portfolio work for DXC Models MGMT — the set of frames used for representation and casting submissions.',
    tag:'Agency Portfolio',
    hero:'assets/dxc-03.png',
    reel:['assets/dxc-01.png','assets/dxc-02.png','assets/dxc-03.png'],
    face:'Representation portfolio shot to agency spec — clean composition, true skin tone, full range of expression.'
  },
  {
    id:'green-yankees', index:'05', name:"Green Yankee's",
    blurb:'Vintage-Americana tailoring reframed through a Lagos lens — utility fabrics, muted tones, deliberate slouch.',
    tag:'Lookbook Campaign',
    hero:'assets/greenyankees-01.jpg',
    reel:['assets/greenyankees-01.jpg','assets/greenyankees-02.png','assets/greenyankees-03.png','assets/greenyankees-04.jpg'],
    face:'Styling leaned on Damilolaa\'s ease in oversized silhouettes — every frame reads relaxed, never stiff.'
  },
  {
    id:'hope', index:'06', name:'Hope',
    blurb:'A creative-direction-led project under the Hope identity — soft portraiture, restrained palette, quiet confidence.',
    tag:'Creative Direction',
    hero:'assets/hope-01.png',
    reel:['assets/hope-01.png','assets/hope-02.png','assets/hope-03.jpg'],
    face:'Damilolaa took a creative-direction role on Hope, shaping mood and sequencing alongside the camera.'
  },
  {
    id:'lego', index:'07', name:'Lego',
    blurb:'A playful, colour-forward campaign for Lego — six frames spanning studio set-ups and on-location movement.',
    tag:'Brand Campaign',
    hero:'assets/lego-01.jpg',
    reel:['assets/lego-01.jpg','assets/lego-02.jpg','assets/lego-03.jpg','assets/lego-04.jpg','assets/lego-05.jpg','assets/lego-06.jpg'],
    face:'Brought a sense of play to a global brand without losing the editorial spine of the portfolio.'
  },
  {
    id:'old-money', index:'08', name:'Old Money',
    blurb:'Tailored heritage dressing — tweed, cream, polished leather. The quietest, most controlled set in the book.',
    tag:'Luxury Editorial',
    hero:'assets/oldmoney-01.jpg',
    reel:['assets/oldmoney-01.jpg','assets/oldmoney-02.jpg','assets/oldmoney-03.jpg','assets/oldmoney-04.jpg'],
    face:'Old Money called for restraint over performance — Damilolaa\'s stillness in front of camera became the story.'
  },
  {
    id:'sbr', index:'09', name:'SBR',
    blurb:'A two-frame statement campaign — high-contrast monochrome, sharp tailoring, full-length verticals.',
    tag:'Statement Campaign',
    hero:'assets/sbr-03.jpg',
    reel:['assets/sbr-01.jpg','assets/sbr-02.jpg','assets/sbr-03.jpg'],
    face:'SBR\'s campaign needed presence in just two frames — every detail of posture and gaze had to carry weight.'
  },
];

const CAT_LABEL = {streetwear:'Streetwear', editorial:'Editorial', luxury:'Luxury', creative:'Creative Direction', commercial:'Commercial', campaign:'Fashion Campaign'};

/* ---------------- RENDER GALLERY ---------------- */
const masonry = document.getElementById('masonry');
const allTiles = [];
GALLERY.forEach((item, i) => {
  const tile = document.createElement('div');
  tile.className = 'tile' + (item.tall ? ' tall' : '');
  tile.dataset.cat = item.cat;
  tile.dataset.idx = i;
  tile.innerHTML = `<img src="${item.src}" alt="${item.name}" loading="lazy">
    <div class="tile-info"><div class="cat">${CAT_LABEL[item.cat]}</div><div class="name serif">${item.name}</div></div>`;
  tile.addEventListener('click', () => openLightbox(GALLERY, i));
  masonry.appendChild(tile);
  allTiles.push(tile);
});

document.getElementById('filterRow').addEventListener('click', e => {
  const btn = e.target.closest('button');
  if (!btn) return;
  document.querySelectorAll('#filterRow button').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const f = btn.dataset.filter;
  allTiles.forEach(t => {
    t.classList.toggle('hidden', f !== 'all' && t.dataset.cat !== f);
  });
});

/* ---------------- RENDER BRANDS ---------------- */
const brandList = document.getElementById('brandList');
BRANDS.forEach(b => {
  const block = document.createElement('div');
  block.className = 'brand-block reveal';
  block.innerHTML = `
    <div class="brand-top">
      <div class="left">
        <div class="index serif">${b.index} / 09</div>
        <h3 class="serif">${b.name}</h3>
        <p>${b.blurb}</p>
        <span class="tag">${b.tag}</span>
        <p style="margin-top:22px; font-size:13px; color:var(--ash);"><b style="color:var(--silver)">Face Behind The Brand:</b> ${b.face}</p>
      </div>
      <div class="brand-feature" data-open="${b.id}"><img src="${b.hero}" alt="${b.name}" loading="lazy"></div>
    </div>
    <div class="reel" data-reel="${b.id}"></div>
  `;
  brandList.appendChild(block);

  const reel = block.querySelector(`[data-reel="${b.id}"]`);
  b.reel.forEach((src, i) => {
    const fr = document.createElement('div');
    fr.className = 'frame';
    fr.innerHTML = `<span class="fnum">${String(i+1).padStart(2,'0')}</span><img src="${src}" alt="${b.name} ${i+1}" loading="lazy">`;
    fr.addEventListener('click', () => openLightbox(b.reel.map(s => ({src:s, name:b.name})), i));
    reel.appendChild(fr);
  });

  block.querySelector('.brand-feature').addEventListener('click', () => {
    openLightbox(b.reel.map(s => ({src:s, name:b.name})), 0);
  });
});

/* ---------------- LIGHTBOX ---------------- */
const lightbox = document.getElementById('lightbox');
const lbImg = document.getElementById('lbImg');
const lbCap = document.getElementById('lbCap');
let lbSet = [], lbIndex = 0;

function openLightbox(set, idx){
  lbSet = set; lbIndex = idx;
  updateLightbox();
  lightbox.classList.add('open');
}
function updateLightbox(){
  const item = lbSet[lbIndex];
  lbImg.src = item.src;
  lbImg.alt = item.name || '';
  lbCap.textContent = `${item.name || ''} — ${lbIndex+1} / ${lbSet.length}`;
}
document.getElementById('lbClose').addEventListener('click', () => lightbox.classList.remove('open'));
document.getElementById('lbNext').addEventListener('click', () => { lbIndex = (lbIndex+1) % lbSet.length; updateLightbox(); });
document.getElementById('lbPrev').addEventListener('click', () => { lbIndex = (lbIndex-1+lbSet.length) % lbSet.length; updateLightbox(); });
lightbox.addEventListener('click', e => { if (e.target === lightbox) lightbox.classList.remove('open'); });
document.addEventListener('keydown', e => {
  if (!lightbox.classList.contains('open')) return;
  if (e.key === 'Escape') lightbox.classList.remove('open');
  if (e.key === 'ArrowRight') { lbIndex = (lbIndex+1) % lbSet.length; updateLightbox(); }
  if (e.key === 'ArrowLeft') { lbIndex = (lbIndex-1+lbSet.length) % lbSet.length; updateLightbox(); }
});

/* film cards: open a video lightbox with close / prev / next navigation */
const videoLightbox = document.getElementById('videoLightbox');
const vlbVideo = document.getElementById('vlbVideo');
const vlbCap = document.getElementById('vlbCap');
let filmSet = [];
let filmIndex = 0;

const filmCards = Array.from(document.querySelectorAll('.film-card'));
filmCards.forEach((card, idx) => {
  const vid = card.querySelector('video');
  if (vid){
    card.addEventListener('mouseenter', () => vid.play().catch(()=>{}));
    card.addEventListener('mouseleave', () => { vid.pause(); vid.currentTime = 0; });
  }
  card.addEventListener('click', e => {
    e.preventDefault();
    // pause any previewing cards
    filmCards.forEach(c => { const v = c.querySelector('video'); if (v) v.pause(); });
    filmSet = filmCards.map(c => c.querySelector('video')?.src || '');
    filmIndex = idx;
    openVideoLightbox();
  });
});

function openVideoLightbox(){
  const src = filmSet[filmIndex];
  if (!src) return;
  vlbVideo.src = src;
  vlbVideo.currentTime = 0;
  vlbVideo.play().catch(()=>{});
  vlbCap.textContent = `Video ${filmIndex+1} / ${filmSet.length}`;
  videoLightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function updateVideoLightbox(){
  const src = filmSet[filmIndex];
  if (!src) return;
  vlbVideo.src = src;
  vlbVideo.currentTime = 0;
  vlbVideo.play().catch(()=>{});
  vlbCap.textContent = `Video ${filmIndex+1} / ${filmSet.length}`;
}

document.getElementById('vlbClose').addEventListener('click', () => {
  videoLightbox.classList.remove('open');
  vlbVideo.pause(); vlbVideo.src = '';
  document.body.style.overflow = 'auto';
});
document.getElementById('vlbNext').addEventListener('click', () => { filmIndex = (filmIndex+1) % filmSet.length; updateVideoLightbox(); });
document.getElementById('vlbPrev').addEventListener('click', () => { filmIndex = (filmIndex-1+filmSet.length) % filmSet.length; updateVideoLightbox(); });
videoLightbox.addEventListener('click', e => { if (e.target === videoLightbox){ videoLightbox.classList.remove('open'); vlbVideo.pause(); vlbVideo.src=''; document.body.style.overflow='auto'; } });
document.addEventListener('keydown', e => {
  if (!videoLightbox.classList.contains('open')) return;
  if (e.key === 'Escape') { videoLightbox.classList.remove('open'); vlbVideo.pause(); vlbVideo.src=''; document.body.style.overflow='auto'; }
  if (e.key === 'ArrowRight') { filmIndex = (filmIndex+1) % filmSet.length; updateVideoLightbox(); }
  if (e.key === 'ArrowLeft') { filmIndex = (filmIndex-1+filmSet.length) % filmSet.length; updateVideoLightbox(); }
});

/* ---------------- SPLASH / LOADER ---------------- */
const splash = document.getElementById('splash');
const loaderFill = document.getElementById('loaderFill');
const loaderPct = document.getElementById('loaderPct');
let pct = 0;
const loadInt = setInterval(() => {
  pct += Math.random()*18;
  if (pct >= 100){ pct = 100; clearInterval(loadInt); }
  loaderFill.style.width = pct + '%';
  loaderPct.textContent = 'Loading ' + Math.floor(pct) + '%';
}, 220);

function enterSite(){
  splash.classList.add('gone');
  document.body.style.overflow = 'auto';
  setTimeout(() => splash.style.display = 'none', 1100);
}
document.getElementById('enterBtn').addEventListener('click', enterSite);
setTimeout(() => { if (!splash.classList.contains('gone')) enterSite(); }, 4800);
document.body.style.overflow = 'hidden';

/* ---------------- MOBILE DRAWER ---------------- */
const drawer = document.getElementById('drawer');
document.getElementById('menuBtn').addEventListener('click', () => drawer.classList.add('open'));
document.getElementById('drawerClose').addEventListener('click', () => drawer.classList.remove('open'));
drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', () => drawer.classList.remove('open')));

/* ---------------- CURSOR ---------------- */
const cursor = document.getElementById('cursor');
window.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});
document.querySelectorAll('a, button, .tile, .frame, .brand-feature, .film-card').forEach(el => {
  el.addEventListener('mouseenter', () => cursor.classList.add('is-link'));
  el.addEventListener('mouseleave', () => cursor.classList.remove('is-link'));
});

/* ---------------- SCROLL: progress, folio, nav hide, reveals ---------------- */
const progress = document.getElementById('progress');
const folioNum = document.getElementById('folioNum');
const folioBar = document.getElementById('folioBar');
const topnav = document.getElementById('topnav');
const sections = Array.from(document.querySelectorAll('.section, .hero, #brands, #contact'));
let lastY = window.scrollY;

window.addEventListener('scroll', () => {
  const y = window.scrollY;
  const max = document.body.scrollHeight - window.innerHeight;
  const ratio = max > 0 ? y / max : 0;
  progress.style.width = (ratio*100) + '%';
  folioBar.style.height = (ratio*100) + '%';
  const page = Math.min(9, Math.max(1, Math.ceil(ratio*9) || 1));
  folioNum.textContent = String(page).padStart(2,'0');

  if (y > lastY && y > 200) topnav.classList.add('hide');
  else topnav.classList.remove('hide');
  lastY = y;
}, {passive:true});

const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver(entries => {
  entries.forEach(en => { if (en.isIntersecting) en.target.classList.add('in'); });
}, {threshold:0.12});
revealEls.forEach(el => io.observe(el));

/* ---------------- CONTACT FORM ---------------- */
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  document.getElementById('formNote').textContent = 'Thank you — your inquiry has been noted. (Connect a form backend like Formspree to send these live.)';
  e.target.reset();
});

/* ---------------- SMOOTH ANCHOR NAV ---------------- */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id.length > 1){
      e.preventDefault();
      document.querySelector(id)?.scrollIntoView({behavior:'smooth'});
    }
  });
});
