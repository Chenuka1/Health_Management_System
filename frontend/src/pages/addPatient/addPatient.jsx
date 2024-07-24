
import Navbar from '../../component/navbar/navbar'
import './addPatient.css'
export default function Patients(){
   
    return(
        <div>
            <Navbar/>
            <br></br>
         <div className="Patients">

           <h1>Register patients</h1>
            <form>


                <label>Full name</label>
                <input type="text" placeholder="enter fullname"/>

                <br></br>

                <label>password</label>
                <input type="text" placeholder="enter password"/>

                <br></br>

                <label>Contact number</label>
                <input type="text" placeholder="Enter contact number"/>

                <br></br>


                <label>Birthcertificate Id</label>
                <input type="text" placeholder="Enter birthcertificae id"/>

                <label>Address</label>
                <input type="text" placeholder="59/1, Colombo"/>



                <input type="submit" value="register patient"/>
                <input type="reset" value="cancel"/>


            </form>

            


        </div>
        </div>
    )





}