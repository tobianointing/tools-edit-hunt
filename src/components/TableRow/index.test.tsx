import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import TableRow from "./index"

test("renders <TableRow/> correctly", async () => {
  render(<TableRow />)
  expect(screen.getByText(/Busayor/i)).toBeInTheDocument()
})

