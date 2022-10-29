import React from "react"
import styles from "./style.module.scss"

type Props = {
  children: JSX.Element | JSX.Element[]
}

export default function LeaderboardTable(props: Props) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Rank</th>
          <th>Change</th>
          <th>User</th>
          <th>No. of Edited</th>
          <th>Last time Edited</th>
        </tr>
      </thead>
      <tbody>
        {props.children}
      </tbody>
    </table>
  )
}
