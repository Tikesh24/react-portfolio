import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export default function handler(req, res) {

    if(req.method === "POST"){
        const {to, from, subject, text} = req.body;
        const msg = {
            to:`${to}`,
            from:`${from}`,
            subject: `${subject}`,
            text: `Email =>${text}`,
            html: `<p>${text}</p></br></br><strong>BeingBachelore </br>${new Date()}</strong>`
        }

        try{
             sgMail.send(msg);
             res.status(200).json({success: true})
        }catch(err) {
            res.status(500).json({success: false})
        }
    }

}
