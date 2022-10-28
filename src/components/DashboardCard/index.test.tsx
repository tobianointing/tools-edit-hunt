import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import DashboardCard from "."

test("renders a <DashboardCard /> correctly", async () => {
  render(<DashboardCard icon={<svg data-testid="icon"></svg>} title={"Total Tools"} value={"20"} />)
  expect(screen.getByTestId("dashboard-card")).toBeInTheDocument()
})

test("renders a <DashboardCard /> correctly with icon props", async () => {
    render(<DashboardCard icon={<svg data-testid="icon"></svg>} title={"Total Tools"} value={"20"} />)
    expect(screen.getByTestId("icon")).toBeInTheDocument()
  })

  test("renders a <DashboardCard /> correctly with title props", async () => {
    render(<DashboardCard icon={<svg data-testid="icon"></svg>} title={"Total Tools"} value={"20"} />)
    expect(screen.getByTestId("dashboard-card")).toHaveTextContent("Total Tools")
  })

  test("renders a <DashboardCard /> correctly with value props", async () => {
    render(<DashboardCard icon={<svg data-testid="icon"></svg>} title={"Total Tools"} value={"20"} />)
    expect(screen.getByTestId("dashboard-card")).toHaveTextContent("20")
  })