# CASE FILE 05 — ChubChip E-Report

เว็บไซต์ E‑Report แบบ static สำหรับรายวิชาสัมมนาวิทยาการคอมพิวเตอร์ หัวข้อ Thailand Fish AI ในโทน cinematic investigation / evidence board ตามภาพเรฟล่าสุด

## โครงสร้าง

- `index.html` — หน้าเว็บหลัก
- `styles.css` — ธีม dark editorial, evidence board และ responsive layout
- `app.js` — Timeline, ตัวละคร ChubChip, media filter และ media viewer
- `assets/media/` — ภาพคัดเลือกจากวันซ้อม/วันงานจริง และคลิปวิดีโอคัดเลือก รวมคลิปหลัก `seminar-event.mp4`
- `profiles/664244124/` ฯลฯ — โฟลเดอร์แยกรายคน แต่ละโฟลเดอร์มี `index.html`, `profile-data.js`, `profile.css`, `media/` และ `videos/` เพื่อแก้ไขข้อมูล/รูป/พื้นหลัง/วิดีโอของคนนั้นได้โดยตรง
- `profiles/shared/profile.js` — JavaScript ส่วนกลางสำหรับเติมข้อมูลและเปิดวิดีโอของหน้าโปรไฟล์

## แก้ไขพื้นหลังและวิดีโอโปรไฟล์

เว็บเป็น static visitor-only จึงไม่มีระบบอัปโหลดไฟล์จากหน้าเว็บแบบถาวร ให้ใส่ภาพไว้ในโฟลเดอร์ `media/` และใส่วิดีโอไว้ในโฟลเดอร์ `videos/` ของเจ้าของโปรไฟล์ แล้วแก้ค่าใน `profile-data.js` ของคนนั้น

ตัวอย่างใน `profiles/664244130/profile-data.js`:

```js
background: 'media/profile.jpg',
video: 'videos/profile-video.mp4',
videoFallback: '../../assets/media/seminar-event.mp4',
```

- `background` — ภาพพื้นหลังของหน้าโปรไฟล์จากโฟลเดอร์ `media/` ของคนนั้น รองรับไฟล์ภาพทั่วไป เช่น `.jpg`, `.png`, `.webp`
- `video` — วิดีโอประจำโปรไฟล์ในโฟลเดอร์ `videos/` แนะนำ `.mp4` หรือ `.webm` เพื่อให้เปิดได้ในเบราว์เซอร์
- `videoFallback` — คลิปสำรอง หากยังไม่มีไฟล์วิดีโอประจำโปรไฟล์หรือไฟล์เปิดไม่ได้

## เปิดดูแบบ local

เปิด `index.html` ได้โดยตรงในเบราว์เซอร์ หรือใช้ static server จากโฟลเดอร์นี้ เช่น `python -m http.server 8765` แล้วเปิด `http://localhost:8765/`

เว็บไซต์ไม่มีระบบสมัครสมาชิกหรือเข้าสู่ระบบ และตั้งใจให้เป็นหน้า visitor-only สำหรับผู้ที่มีลิงก์
