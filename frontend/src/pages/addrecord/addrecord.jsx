import { useState } from 'react';
import Navbar from '../../component/navbar/navbar';
import './addrecord.css';

export default function Addrecord() {
  const [medicines, setMedicines] = useState([{ name: '', dose: '', times: 1, timing: '' }]);

  const addMedicine = () => {
    setMedicines([...medicines, { name: '', dose: '', times: 1, timing: '' }]);
  };

  const handleMedicineChange = (index, field, value) => {
    const newMedicines = [...medicines];
    newMedicines[index][field] = value;
    setMedicines(newMedicines);
  };

  return (
    <div>
      <Navbar />
      <div className="Addrecord">
        <h1>Enter health record for the patient</h1>
        <form>
          <table>
            <tr>
              <td>Patient id</td>
              <td><input type="text" placeholder="" /></td>
            </tr>
            <tr>
              <td>Patient diagnoses</td>
              <td><input type="textarea" placeholder="Enter patient diagnoses" /></td>
              
            </tr>
            <tr>
                <td>Patient  </td>
            </tr>

          </table>

          <h3>Allocate medicines for patient</h3>
          <button type="button" onClick={addMedicine}>+ Add new medicine</button>

          {medicines.map((medicine, index) => (
            <table key={index}>
              <tr>
                <td>Medicine name</td>
                <td><input type="text" placeholder="Ex: Panadol" value={medicine.name} onChange={(e) => handleMedicineChange(index, 'name', e.target.value)} /></td>
              </tr>
              <tr>
                <td>Dose of medicines</td>
                <td><input type="text" placeholder="Ex: 10 tablets" value={medicine.dose} onChange={(e) => handleMedicineChange(index, 'dose', e.target.value)} /></td>
              </tr>
              <tr>
                <td>Select time</td>
                <td>
                  <input type="radio" name={`timing${index}`} value="Morning" checked={medicine.timing === 'Morning'} onChange={(e) => handleMedicineChange(index, 'timing', e.target.value)} /><label>Morning</label>
                  <input type="radio" name={`timing${index}`} value="Afternoon" checked={medicine.timing === 'Afternoon'} onChange={(e) => handleMedicineChange(index, 'timing', e.target.value)} /><label>Afternoon</label>
                  <input type="radio" name={`timing${index}`} value="Evening" checked={medicine.timing === 'Evening'} onChange={(e) => handleMedicineChange(index, 'timing', e.target.value)} /><label>Evening</label>
                  <input type="radio" name={`timing${index}`} value="Night" checked={medicine.timing === 'Night'} onChange={(e) => handleMedicineChange(index, 'timing', e.target.value)} /><label>Night</label>
                </td>
              </tr>
              <tr>
                <td>Enter number of times</td>
                <td><input type="number" value={medicine.times} onChange={(e) => handleMedicineChange(index, 'times', e.target.value)} /></td>
              </tr>
            </table>
          ))}
        </form>

        <button> section to enter the health records</button>

        <div className="labreports">
            <form>

                <label>Test name</label>
                <input type="text" name="test name"/>

                
            </form>








        </div>
      </div>
    </div>
  );
}
