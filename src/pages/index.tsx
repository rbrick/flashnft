import { Link } from 'umi';
import ProCard from '@ant-design/pro-card';
import { Badge } from 'antd';

import styles from '@/pages/index.less';

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.breathe}>
        <img src={require('@/pages/images/logo.png')} />
      </div>
      <div>
        <h2>Introduce to everyone FlashNFT</h2>
        <p>Establish a fair, open and simple universal NFT tool platform</p>
      </div>
      <div className={styles.tools}>
        <Badge.Ribbon text="ENS⚡️" color="red">
          <ProCard
            title="Find the forgotten ENS domain"
            style={{ maxWidth: 300 }}
            actions={[<Link to="/ens">Claim</Link>]}
          >
            <div>
              The ENS domain names that will be allowed to be registered soon
            </div>
          </ProCard>
        </Badge.Ribbon>
        <Badge.Ribbon text="Loot" className={styles.loot}>
          <ProCard
            title="Find unclaimed NFT ID"
            style={{ maxWidth: 300 }}
            actions={[<Link to="/unclaimed">Claim</Link>]}
          >
            <div>
              Supporting ID queries that have not been minted (Ethereum)
            </div>
          </ProCard>
        </Badge.Ribbon>
      </div>
    </div>
  );
}
