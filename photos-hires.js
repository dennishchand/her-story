window.PHOTO_DATA = {};
for (let i = 1; i <= 20; i++) {
  const key = `photo-${String(i).padStart(2, "0")}`;
  window.PHOTO_DATA[key] = `assets/${key}.webp`;
}
