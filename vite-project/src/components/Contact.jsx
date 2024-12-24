import React from 'react'

function Contact() {
  return (
    <div>
      <section id="contact" class="py-5">
    <div class="container">
        <h2 class="text-center mb-4">Contact Us</h2>
        <form>
            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" placeholder='Enter your name' class='form-control' />
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="Email" placeholder='Enter your email' class='form-control' />
            </div>
            <div class="form-group">
                <label for="message">Message:</label>
                <textarea class="form-control" id="message" rows="3" placeholder="Enter your message"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</section>
    </div>
  )
}

export default Contact
