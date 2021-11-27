import flashNftABI from '../contracts/FlashNFT.json';

export const connectorNames = {
  Injected: 'Injected',
};

export const networkIds = {
  '1': {
    name: 'Ethereum',
    id: 1,
    contract: '0xDaba3aBC83528024dA820d5Dd6b3676DF3f3Ad54',
  },
  '3': { name: 'Ropsten', id: 3 },
  '4': { name: 'Rinkeby', id: 4 },
  '5': { name: 'Görli', id: 5 },
  '10': { name: 'Optimistic', id: 10 },
  '42': { name: 'Kovan', id: 42 },
  '56': { name: 'Bsc', id: 56 },
  '128': { name: 'Heco', id: 128 },
  '137': { name: 'Matic', id: 137 },
  '250': { name: 'Fantom', id: 250 },
  '1285': {
    name: 'Moonriver',
    id: 1285,
    contract: '0xC799237233E24e1703FE88CdD14C6816551A4dEE',
  },
  '43113': { name: 'Avalanche Fuji', id: 43113 },
  '43114': { name: 'Avalanche', id: 43114 },
};

export const contractConf = {
  flashNft: '0xDaba3aBC83528024dA820d5Dd6b3676DF3f3Ad54',
  flashNftABI,
};
