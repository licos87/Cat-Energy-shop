import { Skeleton } from '@shared/ui/Skeleton';

import styles from './CatalogPageSkeleton.module.css';

function CatalogPageSkeleton() {
  return (
    <div className={styles.skeleton}>

      <section className={styles.productSection}>
        <div className={styles.productTitle}>
          <Skeleton width={260} height={32} />
        </div>

        <div className={styles.productCards}>
          {Array.from({ length: 4 }, (_, i) => (
            <div key={i} className={styles.productCard}>
              <div className={styles.productCardText}>
                <Skeleton width="70%" height={20} />
                <Skeleton width="100%" height={14} />
                <Skeleton width="60%" height={14} />
              </div>
              <div className={styles.productCardImg}>
                <Skeleton width={140} height={107} />
              </div>
              <div className={styles.productCardBtn}>
                <Skeleton width={200} height={40} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.extraSection}>
        <div className={styles.extraTitle}>
          <Skeleton width={240} height={28} />
        </div>

        <div className={styles.extraList}>
          {Array.from({ length: 3 }, (_, i) => (
            <div key={i} className={styles.extraItem}>
              <Skeleton width="50%" height={18} />
              <Skeleton width="80%" height={14} />
              <div className={styles.extraItemRow}>
                <Skeleton width={80} height={16} />
                <Skeleton width={120} height={36} />
              </div>
            </div>
          ))}
        </div>

        <div className={styles.promo}>
          <Skeleton width="100%" height={200} />
        </div>
      </section>
    </div>
  );
}

export { CatalogPageSkeleton };
