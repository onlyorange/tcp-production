const { readdirSync, statSync } = require('fs');
const { baseRoutes, routes, fileExclusionList } = require('./pageRoutes');

const pagesPath = '../../src/pages';

// Remove files listed in the exclusion list from pages and create the default Next routes
// Example: a file test.js will be mapped to the route /test
const createNextRoutes = (files, subRoute = '') => {
  files
    .filter(file => fileExclusionList.indexOf(file) === -1)
    .forEach((file) => {
      if (statSync(`${pagesPath}${subRoute ? `/${subRoute}` : ''}/${file}`).isDirectory()) {
        createNextRoutes(readdirSync(`${pagesPath}/${file}`), file);
      } else {
        baseRoutes[`${subRoute ? `${subRoute}/` : ''}${file.replace('.js', '')}`] = `${
          subRoute ? `/${subRoute}` : ''
        }/${file.replace('.js', '')}`;
      }
    });
};

createNextRoutes(readdirSync(pagesPath));

module.exports = Object.keys(routes).map(routeName => ({
  name: routeName,
  regex: routes[routeName].replace(':language', `:language(${process.env.LOCALE_LIST})`),
}));
