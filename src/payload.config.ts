import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { pt } from '@payloadcms/translations/languages/pt'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Companies } from './collections/Companies'
import { Contacts } from './collections/Contacts'
import { SalesPipelines } from './collections/SalesPipelines'
import { Opportunities } from './collections/Opportunities'
import { Projects } from './collections/Projects'
import { Tasks } from './collections/Tasks'
import { Activities } from './collections/Activities'
import { Notes } from './collections/Notes'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    components: {
      graphics: {
        Logo: './components/CustomLogo#CustomLogo',
        Icon: './components/CustomIcon#CustomIcon',
      },
    },
    meta: {
      titleSuffix: '- Flow CRM',
    },
  },
  i18n: {
    supportedLanguages: { pt },
  },
  collections: [
    Companies,
    Contacts,
    SalesPipelines,
    Opportunities,
    Projects,
    Tasks,
    Activities,
    Notes,
    Users,
    Media,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
  }),
  sharp,
  plugins: [],
})
