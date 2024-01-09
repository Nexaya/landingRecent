var smtp_password = "0400AFBF267FDB8C94F92F184AD94A5A46D0"
var smtp_username = "hello@nexaya.com"
var smtp_host = "smtp.elasticemail.com"
var smtp_from_mail_address = "hello@nexaya.com"

function SendMail(to, name, subject, body){
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "hello@nexaya.com",
    Password : "0400AFBF267FDB8C94F92F184AD94A5A46D0",
    To : 'hello@nexaya.com',
    From : 'hello@nexaya.com',
    Subject : `Inquiry from ${name}`,
    Body : `${body}`,
}).then(
message =>{
   Email.send({
    Host : "smtp.elasticemail.com",
    Username : "hello@nexaya.com",
    Password : "0400AFBF267FDB8C94F92F184AD94A5A46D0",
    To : `${to}`,
    From : 'hello@nexaya.com',
    Subject : `We Recieved Your Mail ${name} `,
    Body : `${body}`,
   }).then(message =>   alert("Message Sent Succesfully"))
}
);
  }

  export default SendMail