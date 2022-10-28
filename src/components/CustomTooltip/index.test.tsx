import React from "react"
import { render, screen } from "@testing-library/react"
import CustomTooltip from "."

test("renders <CustomTooltip /> correctly with active props is false", async () => {
  render(<CustomTooltip/>)
  expect(screen.queryByTestId("tooltip")).not.toBeInTheDocument()
})

test("renders <CustomTooltip /> correctly with props and active props set to true", async () => {
  render(<CustomTooltip label={"youtube"} payload={10} active={true} />)
  expect(screen.getByTestId("tooltip")).toHaveTextContent("youtube")
})