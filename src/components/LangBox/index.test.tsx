import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import LangBox from "."

test("renders <LangBox /> correctly", async () => {
  render(<LangBox />)
  expect(screen.getByTestId("lang-box")).toBeInTheDocument()
})