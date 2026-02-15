import { Skeleton } from '@shared/ui/Skeleton';

import styles from './HomePageSkeleton.module.css';

function HomePageSkeleton() {
  return (
    <div className={styles.skeleton}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <Skeleton width="80%" height={40} />
          <Skeleton width="100%" height={20} />
          <Skeleton width="100%" height={20} />
          <Skeleton width="60%" height={20} />
          <Skeleton width={200} height={48} />
        </div>
        <Skeleton width={280} height={270} />
      </section>

      {/* ProgramList */}
      <section className={styles.programs}>
        {Array.from({ length: 2 }, (_, i) => (
          <div key={i} className={styles.programCard}>
            <Skeleton width="60%" height={28} />
            <Skeleton width="100%" height={16} />
            <Skeleton width="100%" height={16} />
            <Skeleton width="80%" height={16} />
            <Skeleton width={160} height={40} />
          </div>
        ))}
      </section>

      {/* HowWork */}
      <section className={styles.howWork}>
        <Skeleton width={200} height={28} />
        <div className={styles.howWorkList}>
          {Array.from({ length: 4 }, (_, i) => (
            <div key={i} className={styles.howWorkItem}>
              <Skeleton width={60} height={60} />
              <Skeleton width="90%" height={16} />
              <Skeleton width="70%" height={16} />
            </div>
          ))}
        </div>
      </section>

      {/* LiveModel */}
      <section className={styles.liveModel}>
        <div className={styles.liveModelText}>
          <Skeleton width={250} height={32} />
          <Skeleton width="100%" height={16} />
          <Skeleton width="100%" height={16} />
          <Skeleton width="80%" height={16} />
          <Skeleton width={180} height={40} />
        </div>
        <div className={styles.statsGrid}>
          {Array.from({ length: 4 }, (_, i) => (
            <div key={i} className={styles.statItem}>
              <Skeleton width="100%" height={80} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export { HomePageSkeleton };
