function a(b, c) {
  let a = b + Math.random() * (c + 1 - b);
  return Math.floor(a);
}

a(1, 5);
