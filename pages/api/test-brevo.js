export default async function handler(req, res) {
  const r = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {'api-key': process.env.BREVO_API_KEY,'Content-Type': 'application/json'},
    body: JSON.stringify({
      sender: {email: 'wesleycassiano2020@brevo.com', name: 'COMPRA FACIL'}, // MUDEI AQUI
      to: [{email: process.env.ADMIN_EMAIL}], // Deixa o gmail aqui pra RECEBER
      subject: 'Teste Brevo Vercel',
      htmlContent: '<h1>Funcionou!</h1><p>Se chegou, seu site tá online.</p>'
    })
  });
  const data = await r.json();
  res.status(200).json(data);
}
