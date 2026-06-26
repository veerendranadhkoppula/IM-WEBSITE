import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'

export async function POST(req: NextRequest) {
  try {
    const { sessionId, field, allFields } = await req.json()

    if (!sessionId) return NextResponse.json({ ok: false })

    const payload = await getPayload({ config })

    const existing = await payload.find({
      collection: 'form-partials',
      where: { sessionId: { equals: sessionId } },
      limit: 1,
    })

    if (existing.docs.length > 0) {
      const prev = existing.docs[0]
      await payload.update({
        collection: 'form-partials',
        id: prev.id,
        data: {
          fullName: allFields?.fullName || prev.fullName || '',
          company: allFields?.company || prev.company || '',
          email: allFields?.email || prev.email || '',
          phone: allFields?.phone || prev.phone || '',
          message: allFields?.message || prev.message || '',
          lastField: field,
        },
      })
    } else {
      await payload.create({
        collection: 'form-partials',
        data: {
          sessionId,
          fullName: allFields?.fullName || '',
          company: allFields?.company || '',
          email: allFields?.email || '',
          phone: allFields?.phone || '',
          message: allFields?.message || '',
          lastField: field,
        },
      })
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false })
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const sessionId = searchParams.get('sessionId')
    if (!sessionId) return NextResponse.json({ ok: false })

    const payload = await getPayload({ config })

    const existing = await payload.find({
      collection: 'form-partials',
      where: { sessionId: { equals: sessionId } },
      limit: 10,
    })

    for (const doc of existing.docs) {
      await payload.delete({ collection: 'form-partials', id: doc.id })
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false })
  }
}
