import { Dropdown } from '../../components/Dropdown/Dropdown';
import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

const options = [
  {
    label: 'For fun',
    value: 'fun',
  },
  {
    label: 'For work',
    value: 'work',
  },
  {
    label: 'For drink',
    value: 'drink',
  },
];

const meta: Meta<typeof Dropdown> = {
  component: Dropdown,
  title: 'Components/Dropdown/Dropdown',
};

export default meta;

type StoryProps = ComponentProps<typeof Dropdown>;
type Story = StoryObj<StoryProps>;

const render = (args: StoryProps) => (
    <Dropdown {...args}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </Dropdown>
);

export const DropdownStory: Story = {
  name: 'Dropdown',
  render,
};
