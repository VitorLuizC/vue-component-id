/**
 * A function which generates an unique ID.
 * @typedef {function():string} IDGenerator
 */

/**
 * Creates an ID generator function. Every execution returns a prefix text
 * concatenated with an incremented number.
 * @param {string} [prefix] A text to be concatenated with an incremented number.
 * @return {IDGenerator}
 */
export const createGenerator = (prefix = '') => {
  let count = 0;
  return () => prefix + (count++).toString(10);
};

/**
 * Default generator function.
 */
const DEFAULT_GENERATOR = createGenerator();

/**
 * Install on Vue instance to generates an unique ID for every component. You
 * can also provide your own generator.
 * @param {Vue} Vue Vue constructor, used to implements ID on every component.
 * @param {{ generator: IDGenerator }} [options] Plugin options. Used to change ID generator function.
 */
const install = (Vue, options = {}) => {
  const { generator = DEFAULT_GENERATOR } = options;

  Vue.mixin({
    data () {
      return {
        componentID: generator()
      };
    }
  });
};

export default install;
