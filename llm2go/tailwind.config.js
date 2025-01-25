/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [
    require('./example-preset.js'),
  ],
  // This will replace the configuration in the preset
  corePlugins: ['float', 'padding', 'margin']
}