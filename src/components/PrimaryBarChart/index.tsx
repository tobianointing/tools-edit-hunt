import { ResponsiveContainer, BarChart, Bar, Tooltip, XAxis } from "recharts"
import CustomTooltip from "../CustomTooltip/index"
import styles from "./style.module.scss"

type Props = {
  title: string
  data: any
}

export default function PrimaryBarChart(props: Props) {
  return (
    <div className={styles.chartWrapper}>
      <div className={styles.chartHeaderContainer}>
        <h1 className={styles.chartTitle}>{props.title}</h1>
      </div>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart width={150} height={40} barCategoryGap="1%" data={props.data}>
          <Bar dataKey="data" fill="#527af0" radius={[5, 5, 0, 0]} />
          <XAxis
            dataKey="name"
            tickLine={false}
            axisLine={false}
            tick={{ color: "#333333", strokeWidth: 0.1, fontWeight: 300, fontSize: ".6em" }}
          />
          <Tooltip content={<CustomTooltip />} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
