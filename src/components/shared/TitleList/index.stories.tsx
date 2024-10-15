import { Meta, StoryObj } from "@storybook/react";
import { TitleList } from ".";

const meta = {
    title: "Components/Shared/TitleList",
    component: TitleList,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component:
                    "The `TitleList` component provides a simple way to display a title alongside a list of items. It accepts a title prop for the main title and an `items` prop that can contain any valid React child elements, allowing flexibility in what is rendered inside the list. This component is useful for organizing related content in a visually appealing way."
            }
        }
    },
    argTypes: {
        title: {
            description: "The title displayed at the top of the list.",
            control: {
                type: "text"
            }
        },
        items: {
            description: "The items to be displayed in the list. Can be any valid React children.",
            control: {
                type: "text"
            }
        }
    }
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: "My List Title",
        items: (
            <>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </>
        )
    }
};
