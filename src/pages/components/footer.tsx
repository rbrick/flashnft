import Network from '@/pages/components/network';

import styles from './footer.less';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <a href="https://twitter.com/0xatem" target="_blank" rel="noreferrer">
        <span>Twitter</span>
      </a>
      <a
        href="https://github.com/0xatem/flashnft"
        target="_blank"
        rel="noreferrer"
      >
        <span>Github</span>
      </a>
      <a
        href="https://gitcoin.co/grants/3525/flashnftloot-tools"
        target="_blank"
        rel="noreferrer"
      >
        <span>Donate</span>
      </a>
      <div>
        <Network />
      </div>
    </div>
  );
}
