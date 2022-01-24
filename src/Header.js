import {getCarInfo} from './VinNumberClient.js';

function Header () {
    return ( <div class="header">
            <div class="overlay-header form-box">
                <h1 class="form-title">Please enter your license plate number</h1>
                <form>
                    <input type="text" class="no-margin input-license" id="input-license"/>
                    <button type="button" class="no-margin send-button" onClick={getCarInfo}>Send</button>
                </form>
            </div>
        </div> );
}
            
export default Header