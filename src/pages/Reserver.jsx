
import "./Reserver.css";

function Reserver() {
  return (
    <div class="blanco">
        <div class="amarillo"></div>
        <div class="naranja"></div>
        <h1>Search for a rental car</h1>
        <form action="">
            <label>Pick up location</label>
            <input type="text" placeholder="City, airport, region, district..." />
            <div class="deliver">
            {/* <input type="checkbox" /> */}
            {/* <label>Deliver the car somewhere else</label> */}
            </div>
            <div class="fechas">
                <div class="fecha">
                    <label>Date of pickup</label>
                    <input type="date" />
                    <input type="time" />
            </div>
            <div class="fecha">
                <label>Date of delivery</label>
                <input type="date" />
                <input type="time" />
            </div>
        </div>
        <div class="conductor">
            <input type="checkbox" checked />
            <label>The driver's age between 30 and 65?  <i class="fa-solid fa-circle-info"></i></label>
        </div>
        <input type="submit" value="Search" />

        
    </form>
    </div>
  )
}

export default Reserver;