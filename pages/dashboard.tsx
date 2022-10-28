import Head from "next/head"

import styles from "@/styles/dashboard.module.scss"
import Navbar from "src/sections/Navbar/index"
import DashboardCard from "src/components/DashboardCard/index"
import ToolBox from "src/components/Icons/ToolBox"
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import CustomTooltip from "src/components/CustomTooltip/index"
import PrimaryBarChart from "src/components/PrimaryBarChart/index"
import IncompleteIcon from "src/components/Icons/IncompleteIcon"
import EditedIcon from "src/components/Icons/EditedIcon"

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
]

export default function Dashbaord() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tool Edit Hunt</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main>
        <h1 className={styles.header}>Dashboard</h1>
        <p className={styles.smallHeader}>Welcome Jane</p>

        <div className={styles.cardWrapper}>
          <DashboardCard icon={<ToolBox />} title={"Total Tools"} value={"1200"} />
          <DashboardCard icon={<IncompleteIcon />} title={"Total Tools With Missing Fields"} value={"600"} />
          <DashboardCard icon={<ToolBox />} title={"Percentage of Missing Tools"} value={"50%"} />
          <DashboardCard icon={<EditedIcon />} title={"Number of Tools Edited"} value={"800"} />
        </div>

        <div className={styles.chartSection}>
          <PrimaryBarChart title={"Most missing tools"} data={data} />
          <PrimaryBarChart title={"Most used technology"} data={data} />
        </div>
      </main>
    </div>
  )
}

