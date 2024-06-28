import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req) {
    try {
        const body = await req.json();
        const { name, email_phone, purpose, message } = body;
        console.log(name, email_phone, purpose, message)
        if (!name || !email_phone || !purpose || !message) {
            return NextResponse.json({ status: "missing" })
        }
        const resend = new Resend(process.env.MAIL_SECRET);
        const result = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: process.env.MAIL_ID,
            subject: 'Client Message from Portfolio',
            html:
                `<table border="1">
            <tr>
                <td>Client Name</td>
                <td>${body?.name}</td>
            </tr>
            <tr>
                <td>Contact</td>
                <td>${body?.email_phone}</td>
            </tr>
            <tr>
                <td>Purpose</td>
                <td>${body?.purpose}</td>
            </tr>
            <tr>
                <td>Message</td>
                <td>${body?.message}</td>
            </tr>
        </table>`
        });
        return NextResponse.json({ status: "success" })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ status: "error", error });
    }
}