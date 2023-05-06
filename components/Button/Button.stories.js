import Button from './Button.vue';
import icons from "../Icon/icons";

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        color: {
            control: {type: "select"},
            options: ["primary", 'secondary', 'success', 'danger', 'warning', 'info']
        },
        variant: {
            control: {type: "select"},
            options: ["contained", 'text', 'outlined', "tonal"]
        },
        size: {
            control: {type: "select"},
            options: ["small", 'medium', 'large']
        },
        startIcon: {
            control: {type: "select"},
            options: icons
        },
        endIcon: {
            control: {type: "select"},
            options: icons
        },
        disabled: {
            control: {type: "boolean"},
        },
    },
};

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Primary = {
    args: {
        color: "primary",
        variant: "contained",
        size: "medium"
    },
};