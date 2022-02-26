module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'entry',
        corejs: 3
      },
      /***'@babel/env', 
         { 
             targets: { /* your targeted browser  },
             useBuiltIns: "usage" 
         }**/
    ]
  ]
}
