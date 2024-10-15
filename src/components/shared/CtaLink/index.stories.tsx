import { Meta, StoryObj } from "@storybook/react";
import { CtaLink } from ".";

const meta = {
    title: "Components/Shared/CtaLink",
    component: CtaLink,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component:
                    "The `CtaLink` component is a customizable call-to-action link. It accepts a text prop to display the link text and an optional `alternative` prop to apply an alternative styling variant. The component dynamically applies a CSS class based on the alternative prop, allowing for easy customization of the link's appearance."
            }
        }
    },
    argTypes: {
        alternative: {
            description: "If true, applies an alternative styling variant to the link.",
            control: {
                type: "boolean"
            }
        },
        text: {
            description: "The text to display for the link.",
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
        text: "Click Here",
        alternative: false
    }
};

export const Alternative: Story = {
    args: {
        text: "Click Here",
        alternative: true
    }
};
