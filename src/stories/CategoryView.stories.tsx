import { Meta, StoryFn } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";

import { MemoryRouter } from "react-router-dom";
import { Category } from "@/utils/types";
import CategoryView from "@/components/CategoryView";

export default {
  title: "Components/CategoryView",
  component: CategoryView,
  decorators: [(Story) => <MemoryRouter><Story /></MemoryRouter>],
} as Meta<typeof CategoryView>;

const categoryData: Category = {
  category_id: 1,
  category_color: "#FF5733",
  category_name: "food",
  budget: 5000,
  user_id: 123,
  description: "for food ",
  amount_spent: 1500,
  amount_left: 3500,
};

const Template: StoryFn<typeof CategoryView> = (args) => <CategoryView {...args} />;

export const Default = Template.bind({});
Default.args = { category: categoryData };

export const NoBudget = Template.bind({});
NoBudget.args = { category: { ...categoryData, budget: 0 } };

export const LongCategoryName = Template.bind({});
LongCategoryName.args = { category: { ...categoryData, category_name: "Entertainment & Recreational Activities" } };


export const ClickEdit = Template.bind({});
ClickEdit.args = { category: categoryData };
ClickEdit.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const editButton = await canvas.getByRole("link", { name: /edit/i });
  

  await userEvent.click(editButton);
  
//checks lang if the button is pressable
  if (!editButton) {
    throw new Error("Edit button was not found.");
  }
};
