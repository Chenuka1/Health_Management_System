// Healthrecord.js
import Navbar from "../../component/navbar/navbar";
import './healthrecord.css'

export default function Healthrecord () {
    return ( 
        <div className="">
            <Navbar/>
            <div className="main">
            <div className="healthrecord">
                <h1>Medical history of the patient</h1>
                <p><strong>Healthrecord type</strong></p>
                <p>disease</p>
                <p><strong>Patient diagnoses</strong></p>
                <p>Lorem ipsum Lorem ipsum Lorem ipsum
                Lorem ipsum Lorem ipsum Lorem ipsum
                Lorem ipsum
                </p>
                <p><strong>Patient complain</strong></p>
                <p>Lorem ipsum Lorem ipsum Lorem ipsum
                Lorem ipsum Lorem ipsum Lorem ipsum
                Lorem ipsum
                </p>

                <p><strong>Prescribed medicines</strong></p>
                <table>
                    <tbody>
                        <tr>
                            <th>Medicine name</th>
                            <th>Dose of medicine</th>
                            <th>number of takes per day</th>
                            
                        </tr>
                        <tr>
                            <td>Panadol</td>
                            <td>10 tablets</td>
                            <td>2- Morning 2- Night</td>
                        </tr>
                        <tr>
                            <td>Piriton</td>
                            <td>10 tablets</td>
                            <td>2- Morning 2- Night</td>
                        </tr>
                    </tbody>


                </table>

                <p><strong>Examined physician name</strong></p>
                <p>Dr.Chenuka Sanvidu</p>

                <p><strong>created date</strong></p>
                <p>25/04/2023</p>
            </div>
            </div>
        </div>
    )
}
