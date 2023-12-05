import React from 'react';
import { action } from '@storybook/addon-actions';
import SelectLimit from './SelectLimit';

export default {
    title: 'Dispute_Resolution/ui-kit/SelectLimit',
    component: SelectLimit,
};

const Template = (args) => <SelectLimit {...args} />;

export const Default = Template.bind({});
Default.args = {
    onLimitChange: action('limit changed'),
    limit: 5,
};
