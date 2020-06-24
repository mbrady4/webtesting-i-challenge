module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  return { ...item, enhancement: Math.min(item.enhancement + 1, 20) };
}

function fail(item) {
  if (item.enhancement >= 15) {
    if (item.enhancement === 15) {
      return { ...item, durability: Math.max(item.durability - 10, 0) };
    } else {
      return {
        name: item.name,
        durability: Math.max(item.durability - 10, 0),
        enhancement: Math.max(item.enhancement - 1, 0),
      };
    }
  } else {
    return { ...item, durability: Math.max(item.durability - 5, 0) };
  }
}

function repair(item) {
  const repairedItem = { ...item, durability: 100 };
  return repairedItem;
}

function get(item) {
  if (item.enhancement === 0) {
    return { ...item };
  } else {
    const name = "[+" + item.enhancement + "] " + item.name;
    return { ...item, name };
  }
}
