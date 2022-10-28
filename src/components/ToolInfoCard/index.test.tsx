import React from "react"
import { render, screen } from "@testing-library/react"
import ToolInfoCard from "./index"

const task = {
  name: "youtube",
  missingFields: ["depracated", "replaced_by", "user_doc_url", "api_url_doc"],
}

test("renders a <ToolInfoCard/ > correctly", async () => {
  render(<ToolInfoCard task={task} />)
  expect(screen.getByTestId("tool-info-card")).toBeInTheDocument()
})

test("render <ToolInfoCard/ > with tasks present correctly", async () => {
  render(<ToolInfoCard task={task} />)
  expect(screen.getByTestId("tool-info-card")).toHaveTextContent("youtube")
  expect(screen.getByTestId("tool-info-card")).toHaveTextContent("depracated")
  expect(screen.getByTestId("tool-info-card")).toHaveTextContent("replaced_by")
  expect(screen.getByTestId("tool-info-card")).toHaveTextContent("user_doc_url")
  expect(screen.getByTestId("tool-info-card")).toHaveTextContent("api_url_doc")
})
