async function featuredTwoData() {
  const res = await fetch("https://dummyjson.com/products?limit=4&skip=60");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export { featuredTwoData };

async function featuredThreeData() {
  const res1 = fetch("https://dummyjson.com/products?limit=3&skip=95");
  const res2 = fetch("https://dummyjson.com/products?limit=3&skip=75");
  const res3 = fetch("https://dummyjson.com/products?limit=3&skip=80");
  var [resArrival, resSeller, resSpecial] = await Promise.all([
    res1,
    res2,
    res3,
  ]);
  if (!resArrival.ok || !resSeller.ok || !resSpecial.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return [
    { label: "New Arrivals", ...(await resArrival.json()) },
    { label: "Best Sellers", ...(await resSeller.json()) },
    { label: "Special Offer", ...(await resSpecial.json()) },
  ];
}
export { featuredThreeData };

async function productData(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export { productData };
