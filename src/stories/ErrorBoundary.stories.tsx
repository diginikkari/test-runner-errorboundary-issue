import { ComponentMeta, ComponentStory } from '@storybook/react';
import ErrorBoundary from './ErrorBoundary';

export default {
    component: ErrorBoundary,
    title: 'Error/ErrorBoundary',
    argTypes: {
        onReset: { action: 'onReset executed!' },
    },
} as ComponentMeta<typeof ErrorBoundary>;

const Template: ComponentStory<typeof ErrorBoundary> = (args) => (
    <ErrorBoundary {...args} key={new Date().toDateString()} />
);

const ErrorComponent = () => {
    throw new Error('Something went wrong');
};

export const Primary = Template.bind({});
Primary.args = {
    children: <ErrorComponent />,
};
