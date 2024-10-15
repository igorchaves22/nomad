import { Meta, StoryObj } from "@storybook/react";
import { InfoBox } from ".";

const meta = {
    title: "Components/Shared/InfoBox",
    component: InfoBox,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component:
                    "The `InfoBox` component is designed to present information in a structured and flexible format. It supports multiple sizes sm, md, lg and can organize its content with an optional left layout on large screens. The component includes a subtitle, an optional title, an optional description, and a slot for custom content. This makes it highly customizable for different use cases, be it for alerts, information panels, or other content presentations."
            }
        }
    },
    argTypes: {
        size: {
            description: "The size of the InfoBox. Options are 'sm', 'md', and 'lg'.",
            control: {
                type: "select",
                options: ["sm", "md", "lg"]
            }
        },
        leftLayoutOnLargeScreen: {
            description: "If true, applies a left layout for the content on large screens.",
            control: {
                type: "boolean"
            }
        },
        subtitle: {
            description: "The subtitle text displayed in the InfoBox.",
            control: {
                type: "text"
            }
        },
        title: {
            description: "An optional title displayed prominently in the InfoBox.",
            control: {
                type: "text"
            }
        },
        description: {
            description: "An optional description providing additional context.",
            control: {
                type: "text"
            }
        },
        content: {
            description: "Optional custom content to be rendered inside the InfoBox.",
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
        size: "md",
        leftLayoutOnLargeScreen: false,
        subtitle: "Subtitle Here",
        title: "Main Title Here",
        description: "This is a description providing additional context.",
        content: undefined
    }
};

export const SmallSize: Story = {
    args: {
        size: "sm",
        subtitle: "Small Size Subtitle",
        title: "Small Size Title",
        description: "This is a description for a small size InfoBox.",
        content: <p>Small size content.</p>
    }
};

export const LargeSize: Story = {
    args: {
        size: "lg",
        leftLayoutOnLargeScreen: true,
        subtitle: "Large Size Subtitle",
        title: "Large Size Title",
        description: "This is a description for a large size InfoBox.",
        content: <p>Large size content with left layout.</p>
    }
};
