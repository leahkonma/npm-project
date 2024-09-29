import lodash from 'lodash';
import chalk from 'chalk';

const array = [2, 5, 2, 5, 6, 7, 24, 13, 24, 5];
const uniqNums = lodash.uniq(array);
console.log(uniqNums);
console.log(chalk.red(uniqNums));

console.log(chalk.blueBright("Hello, with chalk!"));
