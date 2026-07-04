import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const port = Number(process.env.PORT || 8787)

const allowedOrigins = (process.env.FRONTEND_ORIGINS || '')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean)

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.length === 0 || allowedOrigins.includes(origin)) {
      callback(null, true)
      return
    }
    callback(new Error('Origin not allowed by CORS'))
  },
}))

app.use(express.json({ limit: '100kb' }))

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

const mailFrom = process.env.MAIL_FROM || 'Family Fair <no-reply@familyfair.store>'
const mailTo = process.env.MAIL_TO

function requireConfiguredEmail(req, res, next) {
  if (!mailTo) {
    res.status(500).json({ error: 'MAIL_TO is not configured on server' })
    return
  }
  next()
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

app.get('/health', (_req, res) => {
  res.json({ ok: true, service: 'family-fair-forms-api' })
})

app.post('/api/newsletter', requireConfiguredEmail, async (req, res) => {
  const email = String(req.body?.email || '').trim()
  const source = String(req.body?.source || 'unknown').trim()

  if (!isValidEmail(email)) {
    res.status(400).json({ error: 'Valid email is required' })
    return
  }

  try {
    await transporter.sendMail({
      from: mailFrom,
      to: mailTo,
      subject: `Newsletter subscription: ${email}`,
      text: `New newsletter subscription.\n\nEmail: ${email}\nSource: ${source}`,
      html: `<p>New newsletter subscription.</p><p><strong>Email:</strong> ${email}<br/><strong>Source:</strong> ${source}</p>`,
    })

    res.status(200).json({ ok: true })
  } catch (error) {
    res.status(500).json({ error: 'Failed to send newsletter email' })
  }
})

app.post('/api/contact', requireConfiguredEmail, async (req, res) => {
  const fullName = String(req.body?.fullName || '').trim()
  const email = String(req.body?.email || '').trim()
  const phone = String(req.body?.phone || '').trim()
  const city = String(req.body?.city || '').trim()
  const country = String(req.body?.country || '').trim()
  const source = String(req.body?.source || 'unknown').trim()

  if (!fullName || !isValidEmail(email) || !phone || !city || !country ) {
    res.status(400).json({ error: 'fullName, email, phone, city, country are required' })
    return
  }

  const text = [
    'New contact form submission',
    '',
    `Name: ${fullName}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `City: ${city}`,
    `Country: ${country}`,
    `Source: ${source}`,
  ].join('\n')

  const html = `
    <p><strong>New contact form submission</strong></p>
    <p>
      <strong>Name:</strong> ${fullName}<br/>
      <strong>Email:</strong> ${email}<br/>
      <strong>Phone:</strong> ${phone}<br/>
      <strong>City:</strong> ${city}<br/>
      
      <strong>Source:</strong> ${source}
    </p>
  `

  try {
    await transporter.sendMail({
      from: mailFrom,
      to: mailTo,
      replyTo: email,
      subject: `Contact request from ${fullName}`,
      text,
      html,
    })

    res.status(200).json({ ok: true })
  } catch (error) {
    res.status(500).json({ error: 'Failed to send contact email' })
  }
})

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Forms API running on http://localhost:${port}`)
})
