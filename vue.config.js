const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: 'vuejsdasar.test',
    port: 8080,
    https: false,
  }
})
