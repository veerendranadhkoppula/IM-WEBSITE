import type { CollectionConfig } from 'payload'

export const FormPartials: CollectionConfig = {
  slug: 'form-partials',
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['fullName', 'email', 'phone', 'lastField', 'createdAt'],
    group: 'Forms',
    description: 'Users who started filling the form but did not submit.',
  },
  access: {
    read: ({ req }) => !!req.user,
    create: () => true,
    update: () => true,
    delete: ({ req }) => !!req.user,
  },
  fields: [
    {
      name: 'sessionId',
      type: 'text',
      admin: { readOnly: true },
    },
    {
      type: 'row',
      fields: [
        { name: 'fullName', label: 'Full Name', type: 'text' },
        { name: 'company', label: 'Company', type: 'text' },
      ],
    },
    {
      type: 'row',
      fields: [
        { name: 'email', label: 'Email', type: 'email' },
        { name: 'phone', label: 'Phone', type: 'text' },
      ],
    },
    { name: 'message', label: 'Message', type: 'textarea' },
    {
      name: 'lastField',
      label: 'Last Field Touched',
      type: 'text',
      admin: {
        readOnly: true,
        description: 'Which field they filled last before leaving',
      },
    },
  ],
  timestamps: true,
}
