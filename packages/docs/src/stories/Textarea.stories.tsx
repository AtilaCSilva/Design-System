import type { Meta, StoryObj } from '@storybook/react';
import { Box, Text, TextArea, TextInputProps } from '@ignite-ui/react';

export default {
  title: 'Form/TextArea',
  component: TextArea,

  args: {
  },
  decorators: [
    (Story) => {
      return (
        <Box as="label" css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
          <Text size={'sm'}>Observations</Text>
          {<Story />}
        </Box>
      )
    }
  ],

} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Add any observations',
  }
};

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true
  }
}
