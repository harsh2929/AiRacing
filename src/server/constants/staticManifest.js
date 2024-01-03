import * as R from 'ramda';
import {resolve} from 'path';

// eslint-disable-next-line no-undef
const getStaticManifest = R.once(() => __non_webpack_require__(
  resolve(__dirname, '../public/public-manifest.json'),
));


export default new Proxy(
  {},
  {
    get(target, name) {
      return getStaticManifest()[name];
    },
  },
);
