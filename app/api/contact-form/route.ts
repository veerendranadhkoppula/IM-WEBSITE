import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'

export async function POST(req: NextRequest) {
  try {
    const { fullName, email, company, phone, projectType, message } = await req.json()

    if (!fullName || !email) {
      return NextResponse.json(
        { success: false, message: 'Name and email are required' },
        { status: 400 },
      )
    }

    const payload = await getPayload({ config })

    await payload.create({
      collection: 'form-responses',
      data: {
        fullName,
        company: company || '',
        email,
        phone: phone || '',
        projectType: projectType || '',
        message: message || '',
      },
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('contact-form error:', err)
    return NextResponse.json(
      { success: false, message: 'Something went wrong. Please try again.' },
      { status: 500 },
    )
  }
}
