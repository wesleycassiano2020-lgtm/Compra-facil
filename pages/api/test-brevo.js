export default async function handler(req, res) {
  const r = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {'api-key': process.env.BREVO_API_KEY,'Content-Type': 'application/json'},
    body: JSON.stringify({
      sender: {email: process.env.ADMIN_EMAIL, name: 'Teste'},
      to: [{email: process.env.ADMIN_EMAIL}],
      subject: 'Teste Brevo Vercel',
      htmlContent: '<h1>Funcionou!</h1>'
    })
  });
  res.status(200).json(await r.json());
}
