//https://eth-ropsten.alchemyapi.io/v2/Mfi1BruzwuLZpgCfdbfEs8-Oo3wQ4rBG

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks:{
    goerli:{
      url:'https://eth-goerli.alchemyapi.io/v2/C2DC3kFwvl-A7Dp3iXzSwuT4FwweqD_N',
      accounts:['1bf7c2c9df508c028816efb5e680aa8e6192a2ffe9bce615978febb142a7664d']
    }
  }

}