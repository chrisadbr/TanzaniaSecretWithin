module.exports = { 
  extends: [
    "airbnb",
    "prettier" 
  ],
  pluggins: ['prettier'],
  rules: {
    'react/jsx-no-target-blank': 'off',
    "no-console":'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
