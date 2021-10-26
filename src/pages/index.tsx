import { Link } from 'umi';
import ProCard from '@ant-design/pro-card';

import styles from '@/pages/index.less';

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.breathe}>
        <img src={require('@/pages/images/logo.png')} />
      </div>
      <div>
        <h2>Introduce to everyone FlashNFT</h2>
        <p>
          One-stop NFT tool platform, Provide efficient and easy-to-use NFT
          tools
        </p>
      </div>
      <div className={styles.tools}>
        <ProCard
          title="Find Unclaimed NFT ID"
          style={{ maxWidth: 300 }}
          actions={[<Link to="/unclaimed">Unclaimed</Link>]}
        >
          <div>supporting ID queries that have not been minted (Ethereum)</div>
        </ProCard>
      </div>
    </div>
  );
}
