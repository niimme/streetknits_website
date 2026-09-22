/**
 * Returns the fully-qualified asset path taking into account
 * dynamic basePath configurations for GitHub Pages or root deployments.
 */
export const getAssetPath = (path: string): string => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${cleanPath}`;
};
