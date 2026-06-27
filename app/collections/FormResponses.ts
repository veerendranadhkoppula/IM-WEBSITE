import type { CollectionConfig } from 'payload'
import nodemailer from 'nodemailer'

const notifyByEmail = async (doc: Record<string, unknown>) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.elasticemail.com',
      port: Number(process.env.SMTP_PORT) || 2525,
      auth: {
        user: process.env.SMTP_USER || '',
        pass: process.env.SMTP_PASS || '',
      },
    })

    await transporter.sendMail({
      from: process.env.SMTP_USER || 'hi@integramagna.com',
      to: 'hi@integramagna.com',
      subject: `New Inquiry — ${doc.fullName}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
          <h2 style="color:#101820;border-bottom:2px solid #FFB600;padding-bottom:12px">New Form Submission</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr>
              <td style="padding:10px 12px;background:#f9f9f9;border:1px solid #e5e5e5;font-weight:600;width:140px">Name</td>
              <td style="padding:10px 12px;border:1px solid #e5e5e5">${doc.fullName}</td>
            </tr>
            <tr>
              <td style="padding:10px 12px;background:#f9f9f9;border:1px solid #e5e5e5;font-weight:600">Email</td>
              <td style="padding:10px 12px;border:1px solid #e5e5e5"><a href="mailto:${doc.email}">${doc.email}</a></td>
            </tr>
            ${doc.company ? `<tr>
              <td style="padding:10px 12px;background:#f9f9f9;border:1px solid #e5e5e5;font-weight:600">Company</td>
              <td style="padding:10px 12px;border:1px solid #e5e5e5">${doc.company}</td>
            </tr>` : ''}
            ${doc.phone ? `<tr>
              <td style="padding:10px 12px;background:#f9f9f9;border:1px solid #e5e5e5;font-weight:600">Phone</td>
              <td style="padding:10px 12px;border:1px solid #e5e5e5">${doc.phone}</td>
            </tr>` : ''}
            ${doc.projectType ? `<tr>
              <td style="padding:10px 12px;background:#f9f9f9;border:1px solid #e5e5e5;font-weight:600">Project Type</td>
              <td style="padding:10px 12px;border:1px solid #e5e5e5">${doc.projectType}</td>
            </tr>` : ''}
            <tr>
              <td style="padding:10px 12px;background:#f9f9f9;border:1px solid #e5e5e5;font-weight:600">Message</td>
              <td style="padding:10px 12px;border:1px solid #e5e5e5;white-space:pre-wrap">${doc.message || '—'}</td>
            </tr>
          </table>
          <p style="color:#848484;font-size:12px;margin-top:24px">Submitted via integramagna.com</p>
        </div>
      `,
    })
  } catch (err) {
    console.error('FormResponses email error:', err)
  }
}

export const FormResponses: CollectionConfig = {
  slug: 'form-responses',
  admin: {
    useAsTitle: 'fullName',
    defaultColumns: ['fullName', 'email', 'company', 'projectType', 'createdAt'],
    group: 'Forms',
  },
  access: {
    read: ({ req }) => !!req.user,
    create: () => true,
    update: ({ req }) => !!req.user,
    delete: ({ req }) => !!req.user,
  },
  fields: [
    {
      type: 'row',
      fields: [
        { name: 'fullName', label: 'Full Name', type: 'text', required: true },
        { name: 'company', label: 'Company / Organization', type: 'text' },
      ],
    },
    {
      type: 'row',
      fields: [
        { name: 'email', label: 'Work Email', type: 'email', required: true },
        { name: 'phone', label: 'Contact Number', type: 'text' },
      ],
    },
    { name: 'projectType', label: 'Project Type', type: 'text' },
    { name: 'message', label: 'Message', type: 'textarea' },
  ],
  timestamps: true,
  hooks: {
    afterChange: [
      async ({ doc, operation }) => {
        if (operation !== 'create') return
        notifyByEmail(doc)
      },
    ],
  },
}
