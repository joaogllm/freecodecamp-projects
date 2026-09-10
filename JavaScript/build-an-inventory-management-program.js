let inventory = [
  { name: "flour", quantity: 20 },
  { name: "rice", quantity: 5 },
  { name: "beans", quantity: 10 },
];
// let inventory = []

function findProductIndex(productName) {
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name === productName.toLowerCase()) {
      return i;
    }
  }
  return -1;
}

function addProduct(product) {
  let index = findProductIndex(product.name);
  if (index !== -1) {
    inventory[index].quantity += product.quantity;
    console.log(`${product.name.toLowerCase()} quantity updated`);
  } else {
    inventory.push({
      name: product.name.toLowerCase(),
      quantity: product.quantity,
    });
    console.log(`${product.name.toLowerCase()} added to inventory`);
  }
}

function removeProduct(productName, quantity) {
  let index = findProductIndex(productName);
  if (index === -1) {
    console.log(`${productName.toLowerCase()} not found`);
  } else {
    if (inventory[index].quantity < quantity) {
      console.log(
        `Not enough ${productName.toLowerCase()} available, remaining pieces: ${inventory[index].quantity}`,
      );
    } else {
      inventory[index].quantity -= quantity;
      if (inventory[index].quantity === 0) {
        inventory.splice(index, 1);
      } else {
        console.log(
          `Remaining ${productName.toLowerCase()} pieces: ${inventory[index].quantity}`,
        );
      }
    }
  }
}
