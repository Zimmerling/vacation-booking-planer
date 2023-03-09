function dateDiff(dateA: Date, dateB: Date): number {
  if (dateA > dateB) return 0;
  const diff = Math.abs(dateA.getTime() - dateB.getTime());
  return Math.ceil(diff / (1000 * 3600 * 24));
}

export { dateDiff };
