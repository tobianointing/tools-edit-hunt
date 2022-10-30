import React from "react"
import MissingFieldCard from "../MissingFieldCard/index"
import styles from "./style.module.scss"
import { TasksType } from "src/types/index"
import Link from "next/link"

type Props = {
  task: TasksType
}

export default function ToolInfoCard(props: Props) {
  return (
    <div data-testid="tool-info-card" className={styles.toolInfoCard}>
      <Link href={""} target={"_blank"}>
        <h2 className={styles.title}>{props.task.name}</h2>
      </Link>
      <p className={styles.moreInfo}>
        This tool has {props.task.missingFields.length} missing fields. Please use the edit button
        to fill in the missing fields.
        <br />
        Please click "Skip tool" to see the next tool if you are unable to locate any of the missing
        fields.
      </p>

      <div className={styles.missingFieldWrapper}>
        {props.task.missingFields.map((elem, index) => (
          <MissingFieldCard key={index} name={elem} index={index + 1} />
        ))}
      </div>
    </div>
  )
}
