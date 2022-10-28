import Avater from "../Avater/index";
import ChangeUpArrow from "../Icons/ChangeDownArrow";
import styles from "./style.module.scss"
import avater from "public/avater.png"

export default function TableRow() {
    return (
      <tr>
        <td>1</td>
        <td className={styles.change}>
          <div>
            <ChangeUpArrow /> 2
          </div>
        </td>
        <td className={styles.userRow}>
          <div className={styles.avater}>
            <Avater image={avater} />
          </div>
          <div className="text">Busayor</div>
        </td>
        <td>23</td>
        <td>9 Month ago</td>
      </tr>
    )
  }
  