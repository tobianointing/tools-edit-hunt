
import styles from "@/styles/dashboard.module.scss"
import Navbar from "src/sections/Navbar/index"
import DashboardCard from "src/components/DashboardCard/index"
import ToolBox from "src/components/Icons/ToolBox"
import PrimaryBarChart from "src/components/PrimaryBarChart/index"
import IncompleteIcon from "src/components/Icons/IncompleteIcon"
import EditedIcon from "src/components/Icons/EditedIcon"
import {topMissingTools, topTechnologiesUsed} from "src/data"
import MainLayout from "src/components/MainLayout/index"

export default function Dashbaord() {
  return (
    <div className={styles.container}>
      <Navbar />
      <MainLayout>
        <h1 className={styles.header}>Dashboard</h1>
        <p className={styles.smallHeader}>Welcome Jane</p>

        <div className={styles.cardWrapper}>
          <DashboardCard icon={<ToolBox />} title={"Total Tools"} value={"1200"} />
          <DashboardCard
            icon={<IncompleteIcon />}
            title={"Total Tools With Missing Fields"}
            value={"600"}
          />
          <DashboardCard icon={<ToolBox />} title={"Percentage of Missing Tools"} value={"50%"} />
          <DashboardCard icon={<EditedIcon />} title={"Number of Tools Edited"} value={"800"} />
        </div>

        <div className={styles.chartSection}>
          <PrimaryBarChart title={"Most missing tools"} data={topMissingTools} />
          <PrimaryBarChart title={"Most used technology"} data={topTechnologiesUsed} />
        </div>
      </MainLayout>
    </div>
  )
}
