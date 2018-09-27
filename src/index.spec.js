import test from 'ava';
import ComponentID, { createGenerator } from '../';
import { createLocalVue, shallowMount, mount } from '@vue/test-utils';

test('ComponentID setups `componentID` property on every component', (context) => {
  const Vue = createLocalVue();

  Vue.use(ComponentID);

  const VEmpty = {
    template: '<span class="v-empty">&nbsp;</span>',
  };

  const A = shallowMount(VEmpty, { localVue: Vue });
  const B = shallowMount(VEmpty, { localVue: Vue });

  context.not(A.vm.componentID, B.vm.componentID, 'Component ID\'s should be unique.');
});

test('ComponentID let developer customize generator', (context) => {
  const Vue = createLocalVue();

  Vue.use(ComponentID, {
    generator: () => 'Single-ID'
  });

  const VEmpty = {
    template: '<span class="v-empty">&nbsp;</span>',
  };

  const A = shallowMount(VEmpty, { localVue: Vue });

  context.is(A.vm.componentID, 'Single-ID');
});

test('createGenerator creates an ID generator function', (context) => {
  const generate = createGenerator();
  const generatePrefixed = createGenerator('ID-');

  context.is(generate(), '0');
  context.is(generate(), '1');
  context.is(generatePrefixed(), 'ID-0');
  context.is(generatePrefixed(), 'ID-1');
});

