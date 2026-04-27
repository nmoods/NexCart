import type { Meta, StoryObj } from "@storybook/react";
import { PromoCard } from "../../components/PromoCard/PromoCard";
import Rehman from "../../assets/rehman.jpg";
import Dhurandhar from "../../assets/dhurandhar.jpg";


const meta: Meta<typeof PromoCard> = {
  title: "Components/PromoCard/PromoCard",
  component: PromoCard,
};

export default meta;

type Story = StoryObj<typeof PromoCard>;

export const Default: Story = {
  args: {
    items: [
      {
        label: "Dhurandhar",
        brand: "The revenge",
        discount: "Tera baap",
        image: Rehman,
        logo: Rehman,
        background: Dhurandhar,
      },
    ],
  },
};