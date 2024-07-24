import Navbar from "../../component/navbar/navbar";
import './patientrecord.css';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
export default function Patientrecord(){

    const navigate = useNavigate();

    return(

        <div>
            <Navbar/>
            <br></br>

            <div className="patientrecord">
            <div class="search-container">
               <input type="search" placeholder="Search the patient by entering the patient id"/>
        </div>

         <table className="patienttable">
          <tr>
        <th>Patient id</th>
        <th>Patient Name</th>
        <th>Patient contact number</th>
        <th>Medical history</th>
    </tr>
    <tr>
        <td>1</td>
        <td>Chenuka Sanvidu</td>
        <td>+94 0766706951</td>
        <td>
           <button>View Medical records</button>
           <button  onClick={() => navigate('/addrecord')}>Add medical history</button>

        </td>
         </tr>
        </table>


      </div>
      <br></br>

      <div className="healthrecords">
    <p><strong>Healthrecord 1</strong></p>
    <p><strong>Created date:</strong> 23/04/2024</p>
    
    <Link to="/healthrecord">view full record</Link>

</div>
<div className="healthrecords">
    <p><strong>Healthrecord 2</strong></p>
    <p><strong>Created date:</strong> 23/04/2024</p>
    
    <Link to="/healthrecord">view full record</Link>

</div>



      

      

        </div>
    )
    




}