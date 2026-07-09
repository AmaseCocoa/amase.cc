const module = await import('./private/banners').catch((error) => {
  console.warn("[Banners] private part doesn't exist. using empty array:", error);
  return { default: [] };
});

export default module.default;
