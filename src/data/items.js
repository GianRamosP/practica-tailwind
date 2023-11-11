export const items = [
  { id: "0", name: "Gian", phone: "11110000", favorite: false },
  { id: "1", name: "Marcos", phone: "22220000", favorite: true },
];

export function getContact(id) {
  return items.find((item) => item.id === id);
}
