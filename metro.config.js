const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const { withNativeWind } = require('nativewind/metro')

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {};

// module.exports = mergeConfig(getDefaultConfig(__dirname), config);
// module.exports = withNativeWind(config, { input: './global.css'})

const baseConfig = getDefaultConfig(__dirname);
const customConfig = withNativeWind(baseConfig, { input: './global.css' });

module.exports = mergeConfig(baseConfig, customConfig);