import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { importExportPlugin } from '@payloadcms/plugin-import-export'
import path from 'path'
import { buildConfig } from 'payload'
import sharp from 'sharp'

import { Users } from './app/collections/Users'
import { FormResponses } from './app/collections/FormResponses'
import { FormPartials } from './app/collections/FormPartials'

const dirname = process.cwd()

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    suppressHydrationWarning: true,
  },
  collections: [Users, FormResponses, FormPartials],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.PAYLOAD_DATABASE_URL || '',
    },
    push: true,
  }),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sharp: sharp as any,
  plugins: [
    importExportPlugin({
      collections: [
        { slug: 'form-responses' },
        { slug: 'form-partials' },
      ],
    }),
  ],
})
