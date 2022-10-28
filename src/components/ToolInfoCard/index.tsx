import React from "react"
import MissingFieldCard from "../MissingFieldCard/index"
import styles from "./style.module.scss"

type Props = {
    missingFields: string[]
}

export default function ToolInfoCard(props: Props) {
  return (
    <div className={styles.toolInfoCard}>
      <h2 className={styles.title}>Pywikibot</h2>
      <p className={styles.moreInfo}>
        This tool has 10 missing fields. Please use the edit button to fill in the missing fields.
        Please click "Skip tool" to see the next tool if you are unable to locate any of the missing
        fields.
      </p>

      <div className={styles.missingFieldWrapper}>
        {props.missingFields.map((elem, index) => (
          <MissingFieldCard name={elem} index={index + 1}/>
        ))}
      </div>
    </div>
  )
}
