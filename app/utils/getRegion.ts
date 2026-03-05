export const getRegion = () => {
  try {
    const region = new Intl.DateTimeFormat().resolvedOptions().locale.split('-')[1]?.toUpperCase();
    return region || 'US';
  } catch {
    return 'US';
  }
};