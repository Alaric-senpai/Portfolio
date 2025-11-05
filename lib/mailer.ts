'use server'
import * as Resend from 'resend';

export const sendEmail = async (sender: string, name: string, subject: string, body: string) => {

    const resend = new Resend.Resend(process.env.NEXT_RESEND_API_KEY!);

    // Create enhanced email body with sender details
    const enhancedEmailBody = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; border-radius: 8px 8px 0 0; color: white;">
                <h2 style="margin: 0; font-size: 24px;">New Contact Form Submission</h2>
            </div>
            
            <div style="background: #f8f9fa; padding: 20px; border: 1px solid #e9ecef; border-top: none;">
                <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                    <h3 style="color: #333; margin-top: 0; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Sender Information</h3>
                    
                    <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                        <tr>
                            <td style="padding: 8px 0; font-weight: bold; color: #555; width: 100px;">Name:</td>
                            <td style="padding: 8px 0; color: #333;">${name}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; font-weight: bold; color: #555;">Email:</td>
                            <td style="padding: 8px 0; color: #333;">${sender}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; font-weight: bold; color: #555;">Subject:</td>
                            <td style="padding: 8px 0; color: #333;">${subject}</td>
                        </tr>
                    </table>
                    
                    <h3 style="color: #333; margin-bottom: 15px; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Message</h3>
                    <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #667eea;">
                        ${body.replace(/\n/g, '<br>')}
                    </div>
                </div>
                
                <div style="margin-top: 20px; padding: 15px; background: #e3f2fd; border-radius: 8px; border-left: 4px solid #2196f3;">
                    <p style="margin: 0; color: #1976d2; font-size: 14px;">
                        <strong>📧 Reply Instructions:</strong> This email is set up with reply-to functionality. 
                        Simply hit reply to respond directly to ${name} at ${sender}.
                    </p>
                </div>
            </div>
            
            <div style="background: #333; color: #ccc; padding: 15px; border-radius: 0 0 8px 8px; text-align: center; font-size: 12px;">
                <p style="margin: 0;">This message was sent from your portfolio contact form at devcharles.me</p>
                <p style="margin: 5px 0 0 0;">Received on ${new Date().toLocaleString()}</p>
            </div>
        </div>
    `;

    try {
        // Validate that we have the required API key
        if (!process.env.NEXT_RESEND_API_KEY) {
            throw new Error('RESEND_API_KEY is not configured');
        }

        // Validate email addresses
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(sender)) {
            throw new Error('Invalid sender email format');
        }
        
        const email = await resend.emails.send({
            from: "support@devcharles.me", // Use Resend's default domain for testing
            replyTo: sender,
            to: 'charleskahuho78@gmail.com',
            subject: `Portfolio Contact: ${subject}`,
            html: enhancedEmailBody,
        });

        

        // Check if there's an error in the response
        if (email.error) {
            console.error('Resend API error:', email.error);
            return false;
        }

        return true;
    } catch (error) {
        console.error('Error sending email:', error);
        return false;
    }

}
