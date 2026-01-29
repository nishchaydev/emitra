'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(prevState: any, formData: FormData) {
    const name = formData.get('fullName') as string;
    const email = formData.get('email') as string;
    const institution = formData.get('institution') as string;
    const helpType = formData.get('helpType') as string;
    const message = formData.get('message') as string;

    if (!name || !email || !institution || !helpType) {
        return { success: false, error: 'Missing required fields' };
    }

    // Debug logging
    console.log('Attempting to send email with Resend...');

    if (!process.env.RESEND_API_KEY) {
        console.error('RESEND_API_KEY is missing');
        return { success: false, error: 'Server configuration error: Missing API Key' };
    }

    const contactEmail = process.env.CONTACT_EMAIL;
    if (!contactEmail) {
        console.error('CONTACT_EMAIL is missing');
        return { success: false, error: 'Server configuration error: Missing Contact Email' };
    }

    // Basic sanitization function
    const sanitize = (str: string) => str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
    // Preserve newlines for message specifically
    const sanitizeMessage = (str: string) => sanitize(str).replace(/\n/g, '<br>');

    const safeName = sanitize(name);
    const safeEmail = sanitize(email);
    const safeInstitution = sanitize(institution);
    const safeHelpType = sanitize(helpType);
    const safeMessage = sanitizeMessage(message);

    try {
        const { data, error } = await resend.emails.send({
            from: 'eMitra Web <onboarding@resend.dev>', // Update this if user verifies their domain
            to: [contactEmail],
            replyTo: email,
            subject: `New Lead: ${name} from ${institution}`,
            text: `
        Name: ${name}
        Email: ${email}
        Institution: ${institution}
        Interest: ${helpType}
        Message: ${message}
      `,
            html: `
        <h1>New Contact Request</h1>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Institution:</strong> ${safeInstitution}</p>
        <p><strong>Interest:</strong> ${safeHelpType}</p>
        <p><strong>Message:</strong></p>
        <blockquote style="background: #f9fafb; padding: 1rem; border-left: 4px solid #3b82f6;">${safeMessage}</blockquote>
      `,
        });

        if (error) {
            console.error('Resend API Returned Error:', error);
            // Resend specific error codes
            if (error.name === 'missing_api_key') return { success: false, error: 'Internal Error: Missing API Key' };
            if (error.name === 'invalid_api_key') return { success: false, error: 'Internal Error: Invalid API Key' };
            return { success: false, error: `Email service error: ${error.message}` };
        }

        console.log('Email sent successfully:', data);
        return { success: true };
    } catch (err: any) {
        console.error('Unexpected Server Error sending email:', err);
        return { success: false, error: 'Failed to send email. Please try again later.' };
    }
}
