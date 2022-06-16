import {createCliConfig} from 'sanity/cli'
import { projectId, dataset } from './sanity.config'

export default createCliConfig({
  api: {
    projectId,
    dataset
  }
})
