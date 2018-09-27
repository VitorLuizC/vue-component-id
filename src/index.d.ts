import Vue from 'vue';

declare module 'vue/types/vue' {
  interface VueConstructor {
    componentID: string;
  }
}

/**
 * A function which generates an unique ID.
 */
type IDGenerator = () => string;

/**
 * Creates an ID generator function. Every execution returns a prefix text
 * concatenated with an incremented number.
 * @param prefix - A text to be concatenated with an incremented number.
 */
export const createGenerator: (prefix?: string) => IDGenerator;

/**
 * Install on Vue instance to generates an unique ID for every component. You
 * can also provide your own generator.
 * @param Vue - Vue constructor, used to implements ID on every component.
 * @param options - Plugin options. Used to change ID generator function.
 */
const install: (Vue: Vue, options: { generator: IDGenerator } = {}) => void;

export default install;
