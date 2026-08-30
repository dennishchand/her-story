window.PHOTO_DATA = window.PHOTO_DATA || {};
for (let i = 1; i <= 8; i++) {
  const key = `photo-${String(i).padStart(2, "0")}`;
  window.PHOTO_DATA[key] = `images/${key}.webp`;
}
