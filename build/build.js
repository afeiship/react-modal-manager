import baseConfig from '.';
import merge from 'webpack-merge';
import {
  configs,
  inputs,
  outputs,
  loaders,
  plugins,
  externals
} from '@feizheng/webpack-lib-kits';

export default merge(baseConfig, {
  entry: inputs.build(),
  output: outputs.build({
    library: 'ReactModalManager'
  }),
  externals: externals.base({
    '@feizheng/noop': '@feizheng/noop',
    'event-mitt':'event-mitt',
    lodash: 'lodash'
  }),
  plugins: [plugins.clean(), plugins.copyStyles()]
});
