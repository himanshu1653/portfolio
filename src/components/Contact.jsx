import './Contact.css'
import emailjs from '@emailjs/browser'

function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      'service_j8iainh',
      'template_m8uzbbs',
      e.target,
      'Ss0GqyNLY-bZhKoC6'
    )
    .then(() => {
      alert('Message sent successfully!')
      e.target.reset()
    })
   .catch((error) => {
  console.log('EmailJS Error:', error)
  alert(error.text || 'Failed to send message.')
})
  }

  return (
    <div id="contact">
      <div className="contact-container">

        <h1>Contact Me</h1>

        <div className="contcat-info">
          <p>
            Have a project or opportunity in mind?
          </p>

          <p>
            Feel free to reach out to me.
          </p>

          <p>Email: himanshujha1126@gmail.com</p>
        </div>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <textarea
            placeholder="Your Message"
            name="message"
            required
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>
    </div>
  )
}

export default Contact