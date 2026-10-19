const stageData = {
  prep: {
    readout: 'STAGE 01 / PREP',
    title: 'วันซ้อมสัมมนา — Run-through Day',
    text: '29 กันยายน: วันซ้อมสัมมนาในบทบาทออแกไนซ์ เน้นการรันงาน ตรวจสอบความพร้อมของงาน และเช็กเอกสารที่ต้องเตรียมสำหรับวันจริง',
    items: ['รันงาน', 'เช็กพื้นที่และอุปกรณ์', 'เตรียมโต๊ะ / ใบลงทะเบียน', 'ทบทวนเอกสาร']
  },
  registration: {
    readout: 'STAGE 02 / ARRIVAL',
    title: 'ลงทะเบียน — Make the room ready',
    text: '08:00–09:00 น. ChubChip ดูแลโต๊ะลงทะเบียน เตรียมเอกสาร อำนวยความสะดวก และทำให้ผู้เข้าร่วมพร้อมเข้าสู่งาน',
    items: ['Registration desk', 'อำนวยความสะดวก', 'เตรียมเอกสาร', 'ดูแลจุดต้อนรับ']
  },
  opening: {
    readout: 'STAGE 03 / OPENING',
    title: 'เปิดงาน — Take the mic',
    text: '09:00 น. เริ่มกิจกรรมสัมมนา กล่าวต้อนรับ แนะนำหัวข้อ Thailand Fish AI และเชื่อมผู้เข้าร่วมเข้ากับเรื่องราวของงาน',
    items: ['พิธีกรเปิดงาน', 'แนะนำหัวข้อ', 'แนะนำวิทยากร 5 คน', 'คุมจังหวะบนเวที']
  },
  showcase: {
    readout: 'STAGE 04 / SHOWCASE',
    title: 'Project Showcase — Keep the flow',
    text: '09:45 น. และ 10:45 น. ดำเนินช่วงนำเสนอผลงานทั้งสองช่วง คั่นรายการ เดินไมโครโฟน และประสานงานให้แต่ละฝ่ายทำงานต่อเนื่อง',
    items: ['Showcase ช่วงที่ 1', 'พักเบรก 10:30', 'Showcase ช่วงที่ 2', 'เดินไมโครโฟน']
  },
  closing: {
    readout: 'STAGE 05 / CLOSING',
    title: 'Q&A + Awards — Close the loop',
    text: '11:45 น. เปิดโอกาสให้น้อง ๆ ถาม–ตอบ เก็บตกเนื้อหา แจกรางวัล และกล่าวปิดกิจกรรมให้จบตามกำหนดเวลา 12:00 น.',
    items: ['Q&A เก็บตก', 'แจกรางวัล', 'กล่าวปิดกิจกรรม', 'สรุปงานตามเวลา']
  }
};

const media = [
  {
    type: 'video',
    src: 'assets/media/seminar-event.mp4',
    title: 'คลิปประกอบการจัดงานสัมมนา',
    label: 'VIDEO / FEATURED',
  },
  {
    type: 'photo',
    src: 'assets/media/prep-IMG_20260929_154023.jpg',
    title: 'โต๊ะลงทะเบียนก่อนเปิดงาน',
    label: '29 SEP / PREP',
  },
  {
    type: 'photo',
    src: 'assets/media/prep-MVIMG_20260929_071756.jpg',
    title: 'เช็กพื้นที่และอุปกรณ์',
    label: '29 SEP / PREP',
  },
  {
    type: 'photo',
    src: 'assets/media/prep-IMG_20260929_154033.jpg',
    title: 'ประสานงานทีมออแกไนซ์',
    label: '29 SEP / PREP',
  },
  {
    type: 'photo',
    src: 'assets/media/event-Q_IMG_7654.jpg',
    title: 'เริ่มต้นวันงานจริง',
    label: '30 SEP / EVENT',
  },
  {
    type: 'photo',
    src: 'assets/media/event-Q_IMG_7657.jpg',
    title: 'บรรยากาศผู้เข้าร่วมงาน',
    label: '30 SEP / EVENT',
  },
  {
    type: 'photo',
    src: 'assets/media/event-Mind_IMG_2060.jpg',
    title: 'ทำหน้าที่พิธีกรบนเวที',
    label: '30 SEP / MC',
  },
  {
    type: 'photo',
    src: 'assets/media/event-Mind_IMG_2147.jpg',
    title: 'ช่วงถาม–ตอบและการมีส่วนร่วม',
    label: '30 SEP / Q&A',
  },
  {
    type: 'photo',
    src: 'assets/media/event-Mind_IMG_2177.jpg',
    title: 'ดูแลจังหวะของกิจกรรม',
    label: '30 SEP / EVENT',
  },
  {
    type: 'photo',
    src: 'assets/media/event-Mind_IMG_2210.jpg',
    title: 'บันทึกภาพช่วงกิจกรรม',
    label: '30 SEP / DOCUMENT',
  },
  {
    type: 'photo',
    src: 'assets/media/event-Na_IMG_8818.jpg',
    title: 'ผู้เข้าร่วมในห้องสัมมนา',
    label: '30 SEP / AUDIENCE',
  },
  {
    type: 'photo',
    src: 'assets/media/event-Na_IMG_8847.jpg',
    title: 'ทีมทำงานหลังเวที',
    label: '30 SEP / ORGANIZE',
  },
  {
    type: 'photo',
    src: 'assets/media/event-Na_IMG_8927.jpg',
    title: 'บรรยากาศระหว่างกิจกรรม',
    label: '30 SEP / EVENT',
  },
  {
    type: 'photo',
    src: 'assets/media/event-Q_IMG_7691.jpg',
    title: 'เตรียมต่อช่วง Showcase',
    label: '30 SEP / SHOWCASE',
  },
  {
    type: 'photo',
    src: 'assets/media/event-Q_IMG_7726.jpg',
    title: 'สื่อสารกับผู้เข้าร่วมงาน',
    label: '30 SEP / MC',
  },
  {
    type: 'photo',
    src: 'assets/media/event-Q_IMG_7738.jpg',
    title: 'โมเมนต์ของทีมงาน',
    label: '30 SEP / TEAM',
  },
  {
    type: 'photo',
    src: 'assets/media/event-Q_IMG_7759.jpg',
    title: 'ช่วงส่งต่อไมโครโฟน',
    label: '30 SEP / Q&A',
  },
  {
    type: 'video',
    src: 'assets/media/video-Q_IMG_7693.MOV',
    title: 'คลิปบรรยากาศวันงาน 01',
    label: 'VIDEO / RUN OF SHOW',
  },
  {
    type: 'video',
    src: 'assets/media/video-Q_IMG_7706.MOV',
    title: 'คลิปบรรยากาศวันงาน 02',
    label: 'VIDEO / EVENT',
  },
  {
    type: 'video',
    src: 'assets/media/video-Q_IMG_7662.MOV',
    title: 'คลิปกิจกรรมและผู้เข้าร่วม',
    label: 'VIDEO / ACTIVITY',
  },
];

const $ = (selector, scope=document) => scope.querySelector(selector);
const $$ = (selector, scope=document) => [...scope.querySelectorAll(selector)];

function renderStage(stage){
  const data = stageData[stage];
  $('#stageReadout').textContent = data.readout;
  $('#stagePanel').innerHTML = `
    <h3>${data.title}</h3>
    <p>${data.text}</p>
    <ul>${data.items.map(item => `<li>${item}</li>`).join('')}</ul>
  `;
  const keys = Object.keys(stageData);
  const index = keys.indexOf(stage);
  $$('.timeline-step').forEach((button, buttonIndex) => button.classList.toggle('active', buttonIndex === index));
  $('#lineProgress').style.width = `${index * 25}%`;
  $('#mascot').style.left = `${2 + index * 23.7}%`;
}

function renderMedia(filter='all'){
  const visible = media.filter(item => filter === 'all' || item.type === filter);
  $('#mediaGrid').innerHTML = visible.map((item, index) => `
    <article class="media-item" data-index="${media.indexOf(item)}" data-type="${item.type}">
      <span class="media-type">${item.type === 'video' ? '▶ VIDEO' : 'PHOTO'}</span>
      ${item.type === 'video'
        ? `<div class="media-thumb video-poster"><span class="play-icon">▶</span></div>`
        : `<img class="media-thumb" src="${item.src}" alt="${item.title}" loading="lazy"/>`}
      <div class="media-overlay"><span class="play-icon">${item.type === 'video' ? '▶' : '↗'}</span></div>
      <div class="media-copy"><b>${item.title}</b><small>${item.label}</small></div>
    </article>`).join('');
  $$('.media-item').forEach(card => card.addEventListener('click', () => openMedia(media[Number(card.dataset.index)])));
}

function openMedia(item){
  const content = item.type === 'video'
    ? `<video controls autoplay playsinline>
        <source src="${item.src}" type="video/quicktime"/>
        เบราว์เซอร์นี้ไม่รองรับการเล่นวิดีโอไฟล์นี้
      </video>`
    : `<img src="${item.src}" alt="${item.title}"/>`;
  $('#modalTitle').textContent = `${item.type === 'video' ? 'VIDEO VIEWER' : 'PHOTO VIEWER'} — ${item.label}`;
  $('#modalContent').innerHTML = `${content}<div class="modal-caption">${item.title}</div>`;
  $('#mediaModal').classList.add('open');
  $('#mediaModal').setAttribute('aria-hidden', 'false');
}

function closeModal(){
  $('#mediaModal').classList.remove('open');
  $('#mediaModal').setAttribute('aria-hidden', 'true');
  $('#modalContent').innerHTML = '';
}

$$('[data-scroll]').forEach(button => button.addEventListener('click', () => {
  document.querySelector(button.dataset.scroll)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}));
$$('.timeline-step').forEach(button => button.addEventListener('click', () => renderStage(button.dataset.stage)));
$$('.filter').forEach(button => button.addEventListener('click', () => {
  $$('.filter').forEach(tab => tab.classList.remove('active'));
  button.classList.add('active');
  renderMedia(button.dataset.filter);
}));
$$('.video-open').forEach(button => button.addEventListener('click', () => openMedia({
  type: 'video',
  src: button.dataset.mediaSrc,
  title: button.dataset.mediaTitle,
  label: 'VIDEO / FEATURED',
})));
$$('[data-close-modal]').forEach(button => button.addEventListener('click', closeModal));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeModal();
});
const startButton = $('.start-button');
startButton?.addEventListener('click', () => {
  document.querySelector('#top')?.scrollIntoView({ behavior: 'smooth' });
});

const profileIds = new Set([
  '664244124',
  '664244125',
  '664244126',
  '664244130',
  '664244133',
]);
$$('.member').forEach(member => {
  const id = member.querySelector('b')?.textContent.trim();
  if (!profileIds.has(id)) return;
  const idLink = member.querySelector('b');
  idLink.classList.add('is-profile-link');
  idLink.setAttribute('role', 'link');
  idLink.setAttribute('tabindex', '0');
  idLink.setAttribute(
    'aria-label',
    `เปิดโปรไฟล์ ${member.querySelector('span')?.textContent.trim() || id}`,
  );
  const openProfile = () => {
    window.location.href = `profiles/${encodeURIComponent(id)}/index.html`;
  };
  idLink.addEventListener('click', openProfile);
  idLink.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openProfile();
    }
  });
});

function updateClock() {
  const clock = $('#clock');
  if (!clock) return;
  clock.textContent = new Date().toLocaleTimeString('th-TH', {
    hour: '2-digit',
    minute: '2-digit',
  });
}
updateClock(); setInterval(updateClock, 30000);
renderStage('prep');
renderMedia();
