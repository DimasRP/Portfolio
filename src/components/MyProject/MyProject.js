import './MyProject.css'
import Binar from "../../assets/binar-rental-car.jpg"
const MyProject = () => {
  return (
    <section className='container-myproject'id='myproject'>
        <div className='title'>
            <h2>MY PROJECT</h2>
        </div>
        <div className='container-cards'>
            <card className='cards'>
                <img src={Binar} alt='card img'></img>
                <h4> Binar Car Rental</h4>
                <a href='https://challange-platinum-binar.vercel.app/'>View Demo</a>
            </card>
            <card className='cards'>
                <img src={Binar} alt='card img'></img>
                <h4> Binar Car Rental</h4>
                <a href='https://challange-platinum-binar.vercel.app/'>View Demo</a>
            </card>
        </div>
    </section>
  )
}

export default MyProject