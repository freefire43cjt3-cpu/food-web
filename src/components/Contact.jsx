<form
  action="https://formspree.io/f/mgogrbye"
  method="POST"
>

  <label htmlFor="name">Your Name</label>
  <input
    id="name"
    type="text"
    name="name"
    placeholder="Enter your name"
    required
  />

  <label htmlFor="email">Email Address</label>
  <input
    id="email"
    type="email"
    name="email"
    placeholder="Enter your email"
    required
  />

  <label htmlFor="phone">Phone Number</label>
  <input
    id="phone"
    type="tel"
    name="phone"
    placeholder="Enter your phone number"
  />

  <label htmlFor="date">Reservation Date</label>
  <input
    id="date"
    type="date"
    name="date"
    required
  />

  <label htmlFor="time">Reservation Time</label>
  <input
    id="time"
    type="time"
    name="time"
    required
  />

  <label htmlFor="message">Special Requests</label>
  <textarea
    id="message"
    name="message"
    rows="5"
    placeholder="Any special requests?"
  ></textarea>

  <button type="submit">
    Reserve Now
  </button>

</form>