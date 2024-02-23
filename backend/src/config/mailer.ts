import nodemailer from 'nodemailer';
import fs from 'fs';

const transport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_SENDER,
    pass: process.env.MAIL_PASSWORD,
  },
});

function readRenderHtml(path: string, callback: any) {
  fs.readFile(path, 'utf-8', (err: any, data: any) => {
    if (err) throw err;
    else callback(null, data);
  });
}

export default { transport, readRenderHtml };
