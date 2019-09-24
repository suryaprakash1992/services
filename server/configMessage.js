const nodemailer = require('nodemailer');

module.exports = (form) => {
  
  var transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: 'haircraftservice@gmail.com',
      pass: '$umm3r@10'
    }
  });

  const mailOptions = {
    from: `"${form.name}" <${form.email}>`,
    to: 'suryaprakash.kumar.sp@gmail.com,suryadreams7@gmail.com',
    bcc:'prasanthmech2@gmail.com',
    subject: `${form.contactNum}`,
    html: `
    <table style="width: 100%; border: none">
      <thead>
        <tr style="background-color: #000; color: #fff;">
          <th style="padding: 10px 0">Name</th>
          <th style="padding: 10px 0">E-mail</th>
          <th style="padding: 10px 0">Contact Number</th>
          <th style="padding: 10px 0">Message</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th style="text-align: center">${form.name}</th>
          <td style="text-align: center">${form.email}</td>
          <td style="text-align: center">${form.contactNum}</td>
          <td style="text-align: center">${form.message}</td>
        </tr>
      </tbody>
    </table>
    `
  };

  transporter.sendMail(mailOptions, function(err, info){
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });

}