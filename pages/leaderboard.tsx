import styles from "@/styles/leaderboard.module.scss"
import Navbar from "src/sections/Navbar/index"
import TableRow from "src/components/TableRow/index"
import LeaderboardTable from "src/sections/LeaderBoardTable/index"
import { leaderboard } from "src/data/index"
import MainLayout from "src/components/MainLayout/index"

export default function Dashbaord() {
  return (
    <div className={styles.container}>
      <Navbar />
      <MainLayout>
        <div className={styles.header}>
          <h1>Leaderboard</h1>

          <div className={styles.badgeWrapper}>
            <div className={`${styles.badge} ${styles.active}`}>All</div>
            <div className={styles.badge}>Top 5</div>
            <div className={styles.badge}>Top 10</div>
          </div>
        </div>

        <div>
          <LeaderboardTable>
            {leaderboard.map((elem, index) => (
              <TableRow key={index} index={index} data={elem} />
            ))}
          </LeaderboardTable>
        </div>
      </MainLayout>
    </div>
  )
}
