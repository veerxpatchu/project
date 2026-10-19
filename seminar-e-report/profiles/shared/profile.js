const profile = window.profileData;
const $ = selector => document.querySelector(selector);

function setCustomBackground() {
  if (!profile.background) return;

  const safePath = profile.background.replace(/"/g, '\\"');
  document.body.style.setProperty(
    '--profile-background-image',
    `url("${safePath}")`,
  );
}

function setupProfileVideo() {
  const video = $('#profileVideo');
  const fallbackVideo = profile.videoFallback || '../../assets/media/seminar-event.mp4';
  const configuredVideo = profile.video?.trim();
  let usingFallback = !configuredVideo;

  video.addEventListener('error', () => {
    if (usingFallback) return;

    usingFallback = true;
    video.src = fallbackVideo;
    video.load();
    $('#profileVideoCaption').textContent =
      `คลิปสำรองการจัดงานสัมมนา — ${profile.name}`;
  });

  video.src = configuredVideo || fallbackVideo;
  video.load();
}

setCustomBackground();

$('#profileNumber').innerHTML = `PROFILE <em>${profile.id}</em>`;
$('#profileName').textContent = profile.name;
$('#profileRole').textContent = profile.role;
$('#profileSummary').textContent = profile.summary;
$('#profilePhoto').src = profile.photo || 'media/profile.jpg';
$('#profilePhoto').alt = `รูปโปรไฟล์ของ ${profile.name}`;
$('#profileCode').textContent = `ID / ${profile.id}`;
$('#profileId').textContent = profile.id;
$('#profileFullName').textContent = profile.name;
$('#profileRoleInfo').textContent = profile.role;
$('#profileGithub').innerHTML = profile.github
  ? `<a href="${profile.github}" target="_blank" rel="noreferrer">เปิด GitHub ↗</a>`
  : '<span class="github-empty">ยังไม่ได้ระบุลิงก์ GitHub</span>';
$('#profileResponsibilities').innerHTML = profile.responsibilities.map(item => `<li>${item}</li>`).join('');
$('#profileReflection').textContent = profile.reflection;
$('#profileVideoCaption').textContent = `คลิปประกอบการจัดงานสัมมนา — ${profile.name}`;
document.title = `${profile.name} — Profile File`;

setupProfileVideo();

$('#playVideo').addEventListener('click', () => {
  const video = $('#profileVideo');
  video.paused ? video.play() : video.pause();
});
