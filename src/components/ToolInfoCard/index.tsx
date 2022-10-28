import React from "react"
import MissingFieldCard from "../MissingFieldCard/index"
import styles from "./style.module.scss"
import { TasksType } from "src/types/index"

type Props = {
  task: TasksType
}

export default function ToolInfoCard(props: Props) {
  return (
    <div className={styles.toolInfoCard}>
      <h2 className={styles.title}>{props.task.name}</h2>
      <p className={styles.moreInfo}>
        This tool has {props.task.missingFields.length} missing fields. Please use the edit button
        to fill in the missing fields.
      </p>
      <p className={styles.moreInfo}>
        Please click "Skip tool" to see the next tool if you are unable to locate any of the missing
        fields.
      </p>

      <div className={styles.missingFieldWrapper}>
        {props.task.missingFields.map((elem, index) => (
          <MissingFieldCard name={elem} index={index + 1} />
        ))}
      </div>
    </div>
  )
}
