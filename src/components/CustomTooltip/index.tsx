import styles from "./style.module.scss"

export interface CustomTooltipType {
  payload?: any
  label?: any
  active?: boolean
}

export default function CustomTooltip({ payload, label, active }: CustomTooltipType) {
  if (active) {
    return (
      <div data-testid="tooltip" className={styles.customTooltip}>
        <p className={styles.label}>{label}</p>
        <p className={styles.intro}>{payload && payload.length ? payload[0].value : ""}</p>
      </div>
    )
  }

  return null
}
