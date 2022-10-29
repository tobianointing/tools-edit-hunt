import React from "react"
import { render, screen } from "@testing-library/react"
import TableRow from "./index"
import LeaderboardTable from "../../sections/LeaderBoardTable"

const data = {
  rank: 1,
  username: "buzi",
  lasttimeedit: "4 hours ago",
  noofedits: 900,
  avater: "/../public/ava1.png",
}

test("renders <TableRow/> correctly", async () => {
  render(
    <LeaderboardTable>
      <TableRow data={data} index={0} />
    </LeaderboardTable>
  )
  expect(screen.getByText(/buzi/i)).toBeInTheDocument()
  expect(screen.getByText(/4 hours ago/i)).toBeInTheDocument()
})
