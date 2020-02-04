
const Matic = require('maticjs').default
const config = require('./config')
//const token = config.ROPSTEN_TEST_TOKEN // test token address
const from = config.FROM_ADDRESS // from address
const recipient = "" // to address
// Create object of Matic
const matic = new Matic({
  maticProvider: config.MATIC_PROVIDER,
  parentProvider: config.PARENT_PROVIDER,
  rootChainAddress: config.ROOTCHAIN_ADDRESS,
  syncerUrl: config.SYNCER_URL,
  watcherUrl: config.WATCHER_URL
})

const token = config.MATIC_TEST_TOKEN // test token address
const amount = '100000000000000000' // amount in wei

// Send Tokens
matic.transferTokens(token, recipient, amount, {
  from,
  // parent: true, // For token transfer on Main network (false for Matic Network)
  onTransactionHash: (hash) => {
    // action on Transaction success
    console.log(hash) // eslint-disable-line
  },
})



const ttoken = config.MATIC_ERC721_TOKEN // test token address
const tokenId = '1' // ERC721 token Id
// Send Tokens
matic.transferERC721Tokens(ttoken, receipent, tokenId, {
  from,
  // parent: true, // For token transfer on Main network (false for Matic Network)
  onTransactionHash: (hash) => {
    // action on Transaction success
    console.log(hash) // eslint-disable-line
  },
})