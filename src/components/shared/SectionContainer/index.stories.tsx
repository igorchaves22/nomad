import { Meta, StoryObj } from "@storybook/react";
import { SectionContainer } from ".";

const meta = {
    title: "Components/Shared/SectionContainer",
    component: SectionContainer,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component:
                    "O componente `SectionContainer` foi projetado para criar seções versáteis em seu layout. Ele aceita vários props para modificar sua aparência, incluindo heroSectionLayout para um estilo de seção hero, horizontalContentOnLargeScreen para organizar o conteúdo horizontalmente em telas maiores e toggleContentPositionOnLargeScreen para alternar a posição do conteúdo com base no tamanho da tela. Este componente permite um design organizado e responsivo, mantendo a estrutura HTML semântica."
            }
        }
    },
    argTypes: {
        id: {
            description: "The ID of the section element.",
            control: {
                type: "text"
            }
        },
        heroSectionLayout: {
            description: "Set this prop to apply hero section styling.",
            control: {
                type: "boolean"
            }
        },
        horizontalContentOnLargeScreen: {
            description: "Arrange content horizontally on large screens.",
            control: {
                type: "boolean"
            }
        },
        toggleContentPositionOnLargeScreen: {
            description: "Toggle the content's position on large screens.",
            control: {
                type: "boolean"
            }
        },
        children: {
            description: "The content to be rendered inside the section.",
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
        id: "section1",
        children: <p>This is a section container with flexible layout options.</p>
    }
};
