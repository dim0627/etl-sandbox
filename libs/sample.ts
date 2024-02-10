export const sample = <T>(collection: T[]): T => {
  const randomIndex = Math.floor(Math.random() * collection.length);
  return collection[randomIndex] as T;
};
