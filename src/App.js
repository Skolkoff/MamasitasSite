import Card from './Card'
function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center">
        <div className='d-flex align-center'>
        <img height={40} width={80} src='/img/logo.png' alt='Logo'/>
        <div className="header_logo_text">
        <h3 className="text-uppercase">Массаж</h3>
        <p>Beuty & Massage</p>
        </div>
        </div>
        <nav className='header_navigation'>
          <li className="lincn mr-20">
            <a path='/'>Главная</a>
          </li>
          <li className="lincn mr-20">
            <a path='/Services'>Услуги</a>
          </li>
          <li className="lincn mr-20">
            <a path='/about'>Обо мне</a>
          </li>
          <li className="lincn">
            <a path='/contacts'>Контакты</a>
          </li>
        </nav>
      </header>
      <div className="hero">
      <h1 className="text-center m-5">Добро пожаловать в массажную студию</h1>
      <p className="relaxation text-center m-5">Релакc для твоего тела и сознания от профессионального</p>
      </div>

      <div className="Services">
        <h1 className="services_inter d-flex justify-center align-center">
          Услуги
        </h1>
        <div className="card_conteiner">
        <Card />
        <Card />
        <Card />
      <section className="pricing">
        <h2>Pricing</h2>
        <table>
          <thead>
            <tr>
              <th>Service</th>
              <th>Duration</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Swedish Massage</td>
              <td>60 minutes</td>
              <td>$80</td>
            </tr>
            <tr>
              <td>Deep Tissue Massage</td>
              <td>60 minutes</td>
              <td>$90</td>
            </tr>
            <tr>
              <td>Sports Massage</td>
              <td>60 minutes</td>
              <td>$100</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className="contact">
      <div className="contact__inner">
        <div className="contact__form">
          <h2>Contact Us</h2>
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>

            <button type="submit">Send</button>
          </form>
        </div>
        <div className="contact__details">
          <h3>Contact Details</h3>
          <p><strong>Address:</strong> 123 Main St, Anytown, USA 12345</p>
          <p><strong>Phone:</strong> (123) 456-7890</p>
          <p><strong>Email:</strong> info@example.com</p>
        </div>
        </div>
      </section>
        </div>
        </div>
    </div>
  );
}

export default App;
