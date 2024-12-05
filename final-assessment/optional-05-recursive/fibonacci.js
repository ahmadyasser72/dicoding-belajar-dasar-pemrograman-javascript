function fibonacci(n) {
  if (n === 0) return [0];
  else if (n === 1) return [0, 1];

  return [
    ...fibonacci(n - 1),
    fibonacci(n - 1).at(-1) + fibonacci(n - 2).at(-1),
  ];
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
