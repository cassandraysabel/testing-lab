import { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";
import { within, userEvent } from "@storybook/testing-library";
import WeeklyFilterDropdown from "@/components/WeeklyFilterDropdown";

export default {
  title: "Components/WeeklyFilterDropdown",
  component: WeeklyFilterDropdown,
} as Meta<typeof WeeklyFilterDropdown>;

const Template: StoryFn<typeof WeeklyFilterDropdown> = (args) => {
  const [selectedDay, setSelectedDay] = useState("None");
  return <WeeklyFilterDropdown {...args} selectedDay={selectedDay} setSelectedDay={setSelectedDay} />;
};

// Default state with "None" selected
export const Default = Template.bind({});
Default.args = {
  selectedDay: "None",
};

// Pre-selected Monday
export const PreSelectedMonday = Template.bind({});
PreSelectedMonday.args = {
  selectedDay: "Monday",
};

// Change selection to Friday
export const ChangeToFriday = Template.bind({});
ChangeToFriday.args = {
  selectedDay: "None",
};
ChangeToFriday.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const trigger = await canvas.getByRole("button", { name: /Select Day/i });
  await userEvent.click(trigger);

  const fridayOption = await canvas.getByText("Friday");
  await userEvent.click(fridayOption);
};
