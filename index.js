import nodemailer from 'nodemailer'
import express from 'express';

import path from 'path';


const app = express();

app.use(express.static(path.join(path.resolve(), '/BrightLayers/dist')));
app.use(express.json());


app.post('/api/send-email', async (req, res) => {
try {
    const body = req.body;
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // use SSL
      auth: {
        user: 'anisoccer749@gmail.com',
        pass: 'npam gfqz onvr yyav',
      }
    });
  
    const mailOptions = {
      from: 'vishalmishra1252@gmail.com',
      to: 'utm79153@gmail.com',
      subject: 'New Service request form',
      html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
        <h2 style="color: #333; border-bottom: 2px solid #0066cc; padding-bottom: 10px;">New Service request form Submission</h2>
        <p style="font-size: 16px;"><strong>Name:</strong> ${body.name} </p>
        <p style="font-size: 16px;"><strong>Contact:</strong> ${body.contact} </p>
        <p style="font-size: 16px;"><strong>Message:</strong></p>
        <div style="background-color: #f9f9f9; border-left: 4px solid #0066cc; padding: 15px; margin-top: 10px;">
          ${body.service}
        </div>
      </div>`
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        res.status(500).json({ success: false, error: error.message });
        return false;
      } else {
        res.status(200).json({ success: true, message:"Email sent" });
         return true;
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.post('/api/send-email-enquiry', async (req, res) => {
  try {
      const body = req.body;
      
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // use SSL
        auth: {
          user: 'anisoccer749@gmail.com',
          pass: 'npam gfqz onvr yyav',
        }
      });
    
      const mailOptions = {
        from: 'vishalmishra1252@gmail.com',
        to: 'utm79153@gmail.com',
        subject: 'New Service request form',
        html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
          <h2 style="color: #333; border-bottom: 2px solid #0066cc; padding-bottom: 10px;">New Service request form Submission</h2>
          <p style="font-size: 16px;"><strong>Name:</strong> ${body.firstname},${body.lastname} </p>
          <p style="font-size: 16px;"><strong>Contact:</strong> ${body.phoneno} </p>
          <p style="font-size: 16px;"><strong>Message:</strong>${body.email}</p>
          <div style="background-color: #f9f9f9; border-left: 4px solid #0066cc; padding: 15px; margin-top: 10px;">
            ${body.brand}
            <h2>Services Required</h2>
            <ul>
            ${body.service.map(servicereq=>`<li>${servicereq.value}</li>`)}
            </ul>
            </div>
        </div>`
      };
    
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          res.status(500).json({ success: false, error: error.message });
          return false;
        } else {
          res.status(200).json({ success: true, message:"Email sent" });
           return true;
        }
      });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  });
app.get('*', (req, res) => {
    res.sendFile(path.join(path.resolve(), '/BrightLayers/dist/index.html'));
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
}); 