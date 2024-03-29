/**
 * @Description:
 * App config contains and configures all environment variables.
 * Please use this file to import and use application configurations:
 */

const path = require('path');
const dotenv = require('dotenv');
const API_HOSTS = require('../../API_HOST').environment;

const { ENV_DEVELOPMENT } = require('../../isomorphic/constants');

const envApiKey = process.env.ENV_API_KEY || '';

const DEFAULT_BRAND = 'FACTORY_BEO';
const MACHINE_IP = '127.0.0.1';
const SESSION_API_URL = '/common/session';
const CONFIG_KEYS_URL =
  '/model/atg/commerce/common/GetConfigurationKeys/getConfigurationKeys?BYPASS=true';

// Default: At minute 15 past every hour from 0 through 23
const CONFIG_CRON_SCHEDULE = process.env.CACHE_FLUSH_CRON_TIMER || '15 0-23 * * *';

// Environment configurations with defaults from respective .env file
// <ROOT>/config/<ACTIVE_BRAND>/<environment>.env
dotenv.config({
  path: path.resolve(
    __dirname,
    `..${path.sep}..${path.sep}app${path.sep}env${path.sep}${process.env.BUILD_ENV ||
      ENV_DEVELOPMENT}.env`,
  ),
});

if (
  typeof API_HOSTS !== 'undefined' && // API hosts map is available on the root
  process.env.ENV_API_KEY && // environment variable defined for <host_datacenter>
  typeof API_HOSTS[envApiKey] !== 'undefined' // <host_datacenter> entry available in hosts file
) {
  process.env.API_DOMAIN = API_HOSTS[envApiKey];
} else {
  /* eslint-disable no-console */
  console.warn('WARNING: Incorrect API/Hosts map configuration. Please revisit.');
}

const NODE_ENV = process.env.NODE_ENV || ENV_DEVELOPMENT;
const HOST = process.env.HOST || null; // Let http.Server use its default IPv6/4 host

const PORT = parseInt(process.env.PORT, 10);
const APP_ENV = process && process.env ? process.env.ENV : 'DEV_ENV';

const API_PROXY_URL = process.env.API_DOMAIN;
const HANDSHAKE_URL = API_PROXY_URL + SESSION_API_URL;
const CONFIG_KEYS_API = API_PROXY_URL + CONFIG_KEYS_URL;

module.exports = {
  APP_ENV,
  NODE_ENV,
  HOST,
  HANDSHAKE_URL,
  API_PROXY_URL,
  MACHINE_IP,
  PORT,
  DEFAULT_BRAND,
  CONFIG_KEYS_API,
  CONFIG_CRON_SCHEDULE,
  SESSION_API_URL,
};
