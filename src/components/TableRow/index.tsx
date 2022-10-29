import Avater from "../Avater/index"
import ChangeUpArrow from "../Icons/ChangeDownArrow"
import styles from "./style.module.scss"

interface leaderboardType {
  rank: number
  avater: string
  username: string
  lasttimeedit: string
  noofedits: number
}

type Props = {
  data: leaderboardType
  index: number
}

export default function TableRow(props: Props) {
  const { avater, lasttimeedit, noofedits, rank, username } = props.data

  return (
    <tr itemID={`${props.index}`}>
      <td>{rank}</td>
      <td className={styles.change}>
        <span>
          <ChangeUpArrow /> 2
        </span>
      </td>
      <td className={styles.userRow}>
        <span className={styles.avater}>
          <Avater image={avater} />
        </span>
        <span className="text">{username}</span>
      </td>
      <td>{noofedits}</td>
      <td>{lasttimeedit}</td>
    </tr>
  )
}
