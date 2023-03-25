import asyncHandler from 'express-async-handler';
import { SMTPClient } from 'emailjs';


export const sendEmail = asyncHandler(async (req, res) => {
    console.log(req.query.body , req.headers);

    const client = new SMTPClient({
        user: 'olanrewajuadekola59@gmail.com',
        password: 'Iyaibeji59',
        host: 'smtp.gmail.com',
        ssl: true,
      });
        // send the message and get a callback with an error or details of the message that was sent
        const sendProspectingNotofication = client.send(
          {
            text: 'test emaill',
            from: 'olanrewajuadekola59@gmail.com',
            to: 'afeez20@gmail.com',
            cc: 'afeez20@hotmail.com',
            subject: 'testing emailjs',
          },
          (err, message) => {
            console.log(err || message);
          }
        );
        // console.log(sendProspectingNotofication)
      res.status(200).send({message:'email sent'});
   

});