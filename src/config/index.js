export const isDev = process.env.NODE_ENV !== 'production';
export const DEV_PORT = 3200;
export const BASE_BRANCH = 'master';

export const HOST_URL = `https://shant-hcl.github.io`;
export const BASE_PATH_URL = 'volt-mx-tutorials';

export const GITHUB_NAME = 'shant-hcl';

export const SERVER = isDev ? `http://localhost:${DEV_PORT}` : `${HOST_URL}/${BASE_PATH_URL}`;
