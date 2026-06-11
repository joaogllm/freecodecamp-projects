const rawData = [
  "A10|Tomatoes|5|2027-01-01", // no zone field
  "B21|Bananas|10|2027-01-01|fridge", // zone: "fridge"
  "C32|Eggs|3|2027-01-01|pantry", // zone: "pantry"
];

function parseShipment(rawData) {
  const products = [];

  for (const shipment of rawData) {
    const [sku, name, qty, expires, zone] = shipment.split("|");

    let duplicated = false;

    for (const product of products) {
      if (product.sku === sku) {
        duplicated = true;
        break;
      }
    }

    if (duplicated) {
      continue;
    }

    products.push({
      sku,
      name,
      qty: Number(qty),
      expires,
      zone: zone || "general",
    });
  }

  return products;
}

function planRestock(plantry, shipment) {
  const actions = [];
  for (const item of shipment) {
    if (item.qty <= 0) {
      actions.push({
        type: "discard",
        item: item,
      });
    } else {
      let exists = false;
      for (const pantryItem of plantry) {
        if (pantryItem.sku === item.sku) {
          exists = true;
          break;
        }
      }
      if (exists) {
        actions.push({
          type: "restock",
          item: item,
        });
      } else {
        actions.push({
          type: "donate",
          item: item,
        });
      }
    }
  }
  return actions;
}

function groupByZone(actions) {
  const grouped = {};

  for (const action of actions) {
    const zone = action.item.zone;
    if (!grouped[zone]) {
      grouped[zone] = [];
    }
    grouped[zone].push(action);
  }

  return grouped;
}

function clonePantry(pantry) {
  const copy = [];
  for (const item of pantry) {
    copy.push({ ...item });
  }
  return copy;
}
const parsedShipment = parseShipment(rawData);
const pantryCopy = clonePantry(parsedShipment);
const result = groupByZone(planRestock(pantryCopy, parsedShipment));

console.log(result);
