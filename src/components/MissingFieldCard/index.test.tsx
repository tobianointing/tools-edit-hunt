import React from "react"
import { render, screen } from "@testing-library/react"
import MissingFieldCard from "."

test("renders <MissingFieldCard /> correctly", async () => {
  render(<MissingFieldCard name={"for_wiki"} index={0}  />)
  expect(screen.getByText("for_wiki")).toBeInTheDocument()
})