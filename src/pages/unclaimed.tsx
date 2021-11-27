import { useState } from 'react';
import { Button, Input, InputNumber } from 'antd';
import { useWeb3React } from '@web3-react/core';
import { contractConf, networkIds } from '@/constants';
import { checkSum, getContract } from '@/utils';

import styles from './unclaimed.less';

const pageSize = 2777;
const initStartIndex = 777777;
const initAddress = '0x1dfe7Ca09e99d10835Bf73044a23B73Fc20623DF';
const initEndIndex = initStartIndex + pageSize;

export default function Unclaimed() {
  const { account, chainId } = useWeb3React();
  const [address, setAddress] = useState(initAddress);
  const [startIndex, setStartIndex] = useState(initStartIndex);
  const [endIndex, setEndIndex] = useState(initEndIndex);
  const [errorMessage, setErrorMessage] = useState('Data is empty');
  const [loading, setLoading] = useState(false);
  const [nftId, setNftId] = useState([]);
  // const contract = getContract(contractConf.flashNftABI, (networkIds as { [key: string]: any })[chainId?.toString() as string].contract);

  class ContractFactory {
    createdContracts = new Map<string, any>();

    constructor() {}

    public getOrCreateContract(abi: any, address: string) {
      if (this.createdContracts.has(address)) {
        return this.createdContracts.get(address);
      }
      const contract = getContract(abi, address);
      this.createdContracts.set(address, contract);
      return contract;
    }
  }

  const contractFactory = new ContractFactory();

  const findItem = async (start: number, end: number) => {
    try {
      const deployedContractAddress = (networkIds as { [key: string]: any })[
        chainId?.toString() as string
      ].contract;
      const res = await contractFactory
        .getOrCreateContract(contractConf.flashNftABI, deployedContractAddress)
        .methods.unclaimed(checkSum(address), String(start), String(end))
        .call({ gasLimit: 30000000 });
      return res.filter((i: string) => i !== '0');
    } catch (e: any) {
      setErrorMessage('Query timed out, Please try again');
    }
    return [];
  };

  const findAll = async () => {
    setNftId([]);
    setLoading(true);
    setErrorMessage('Data is empty');

    const id = chainId?.toString() as string;

    const networkConfig = (networkIds as { [key: string]: any })[id];

    if (!account || !networkConfig.contract) {
      setLoading(false);
      setErrorMessage('Please connect the ethereum wallet');
      return false;
    }
    try {
      const addressRes = checkSum(address);
      if (!addressRes) {
        setLoading(false);
        setErrorMessage('Contract address cannot be empty');
        return false;
      }
    } catch {
      setLoading(false);
      setErrorMessage('Invalid contract address');
      return false;
    }

    if (startIndex >= endIndex) {
      setLoading(false);
      setErrorMessage('The end ID must be greater than the start ID');
      return false;
    }

    const ids = await findItem(startIndex, endIndex);
    setNftId(ids);
    setLoading(false);
  };

  return (
    <div className={styles.unclaimedWrap}>
      <h2>Find Unclaimed NFT ID</h2>
      <div>
        <div className={styles.item}>
          <span>Contract Address: </span>
          <Input
            spellCheck={false}
            value={address}
            placeholder="eg. 0x1dfe7Ca09e99d10835Bf73044a23B73Fc20623DF"
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
        </div>
        <div className={styles.item}>
          <span>Start ID: </span>
          <InputNumber
            min={0}
            spellCheck={false}
            value={startIndex}
            placeholder="eg. 8001"
            onChange={(value) => {
              setStartIndex(value);
              setEndIndex(value + pageSize);
            }}
          />
        </div>
        <div className={styles.item}>
          <span>End ID: </span>
          <InputNumber
            disabled
            min={0}
            spellCheck={false}
            value={endIndex}
            placeholder=""
          />
        </div>
        <div className={styles.operate}>
          <Button onClick={findAll} disabled={loading}>
            Find
          </Button>
        </div>
        <span>Unclaimed Total: {nftId.length}</span>
        <div className={styles.nftId}>
          {nftId.length > 0 ? (
            nftId.map((i) => <div key={i}>{i}</div>)
          ) : loading ? (
            <span>
              <span>Loading</span>
              <span className="dotting" />
            </span>
          ) : (
            <span>{errorMessage}</span>
          )}
        </div>
      </div>
    </div>
  );
}
