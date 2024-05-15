import componentsImg from './assets/components.png';
import propsImg from './assets/config.png';
import jsxImg from './assets/jsx-ui.png';
import stateImg from './assets/state-mgmt.png';

export const CORE_CONCEPTS = [
  {
    img: componentsImg,
    Title: 'Components',
    Description:
      'The core UI building block - compose the user interface by combining multiple components.',
  },
  {
    img: jsxImg,
    Title: 'JSX',
    Description:
      'Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.',
  },
  {
    img: propsImg,
    Title: 'Props',
    Description:
      'Make components configurable (and therefore reusable) by passing input data to them.',
  },
  {
    img: stateImg,
    Title: 'State',
    Description:
      'React-managed data which, when changed, causes the component to re-render & the UI to update.',
  },
];