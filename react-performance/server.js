module.exports = () => {
  const data = {
    products: [],
  };

  for (i = 0; i < 1000; i++) {
    data.products.push({
      id: 1 + i,
      price: 80,
      title: `Camiseta ${i + 1}`
    })
  }

  return data;
}