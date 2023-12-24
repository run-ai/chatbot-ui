import { Plugin, PluginID } from '@/types/plugin';

export const getEndpoint = (plugin: Plugin | null) => {
  let pathPrefix = process.env.PATH_PREFIX || '';
  if (pathPrefix && pathPrefix.startsWith('/')) {
    pathPrefix = pathPrefix.substring(1);
    pathPrefix = pathPrefix.substring(pathPrefix.indexOf("/") + 1);
  }

  if (!plugin) {
    return `${pathPrefix}/api/chat`;
  }

  if (plugin.id === PluginID.GOOGLE_SEARCH) {
    return `${pathPrefix}/api/google`;
  }

  return `${pathPrefix}/api/chat`;
};