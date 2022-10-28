import ToolBox from "../Icons/ToolBox";
import styles from "./style.module.scss"

type Props = {
    icon: JSX.Element
    title: string
    value: string
}

export default function DashboardCard(props: Props) {
    return (
      <div className={styles.card}>
       
          <div className={styles.iconWrapper}>
            {props.icon}
          </div>
  
          <div className="right">
            <div className={styles.title}>{props.title}</div>
            <div className={styles.count}>{props.value}</div>
          </div>
        </div>
      
    )
  }
  