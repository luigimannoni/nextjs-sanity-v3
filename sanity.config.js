import { createConfig } from 'sanity'
import { schemaTypes } from './schemas'
import { dashboardTool } from '@sanity/dashboard'
import { deskTool } from 'sanity/desk'
import { Card, Stack, Text } from '@sanity/ui'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || ''
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || ''

export default createConfig({
  name: 'Sanity Dashboard',
  title: 'nextjs-sanity',
  basePath: '/admin',
  projectId,
  dataset,

  plugins: [
    dashboardTool(),
    deskTool(),
  ],

  schema: {
    types: schemaTypes,
  },

  form: {
    renderInput: (props, next) => {
      if (props.schemaType.type?.name == "title") {
        return (
					<Card>
						<Stack space={2}>
              <div>{next(props)}</div>
              <Text>Character count: {props.value?.length}</Text>
            </Stack>
          </Card>
        )
      }
      return next(props)
    },
  },
})
