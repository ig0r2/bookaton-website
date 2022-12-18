// prettier.config.js
module.exports = {
    tailwindConfig: './tailwind.config.js',
    plugins: [require('prettier-plugin-tailwindcss')],
    overrides: [
        {
            files: '*.html',
            options: {
                bracketSameLine: true,
            }
        }
    ]
  }