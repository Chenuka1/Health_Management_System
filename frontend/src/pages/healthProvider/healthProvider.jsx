import React from 'react';
import Navbar from '../../component/navbar/navbar';
import './healthProvider.css'

export default function Provider() {
    return (
        <div className='Provider'>
            <Navbar/>
            <br></br>
            <h1>Register healthcare providers</h1>
            <table row="1">
                <tbody>
                    <tr>
                        <td>Full name</td>
                        <td><input type="text" placeholder="Enter full name" /></td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td><input type="text" placeholder="Enter email" /></td>
                    </tr>
                    <tr>
                      <td>Provider category</td>
                     <td>
                      <select>
                       <option>Select a category</option>
                       <option>doctor</option>
                       <option>Midwife</option>
                       <option>surgeon</option>
                       <option>Admin</option>
                       <option>Pharmacy user</option>

            
                     </select>
                     </td>
                    </tr>
                    <tr>
                        <td>Username</td>
                        <td><input type="text" placeholder="Enter username" /></td>
                    </tr>
                    <tr>
                        <td>password</td>
                        <td><input type="password" placeholder="Enter password"/></td>
                    </tr>
                    <tr>
                        <td>Enter patient allergies</td>
                        <td><input type="textarea" placeholder="enter allergies"/></td>
                    </tr>
                    <tr>
                        <td>Select the hospital</td>
                        <td>
                            <select>
                                <option>Medihelp hospital , Bandargama</option>
                                <option>Asiri hospital, Horana</option>
                            </select>
                        </td>
                    </tr>
                    <tr>

                        
                    </tr>

                    <input type="submit" value="register user"/>
                    <input type="reset"value="cancel"/>
                    
                </tbody>
            </table>             
                    
        </div>
    );
}
