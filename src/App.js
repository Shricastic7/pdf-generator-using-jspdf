import React, { useState } from 'react';
import './App.css';
import jsPDF from 'jspdf';
import CryptoJS from 'crypto-js'; 

function App() {
  const [name, setName] = useState('');
  const [prn, setPrn] = useState('');
  const [course, setCourse] = useState('');
  const [completionDate, setCompletionDate] = useState('');

  const generateNewHashCode = (name, prn, course, completionDate) => {
    const input = `${name}${prn}${course}${completionDate}`;
    const hashCode = CryptoJS.SHA256(input).toString(CryptoJS.enc.Hex);
    return hashCode;
  };

  const createCertificate = () => {
    const doc = new jsPDF({
      orientation: 'landscape',
      unit: 'mm',
      format: 'a4'
    });
  
    const hashCode = generateNewHashCode(name, prn, course, completionDate);
  
    doc.text(`Certificate of Completion`, 140, 10, { align: 'center' });
    doc.text(`This is to certify that`, 120, 20);
    doc.text(`${name}`, 120, 30);
    doc.text(`wiht prn ${prn}`, 120, 40);
    doc.text(`has successfully completed`, 120, 50);
    doc.text(`${course}`, 120, 60);
    doc.text('on', 120, 70)
    doc.text(`${completionDate}`, 120, 80);
    doc.text(`verification code: ${hashCode}`, 10, 150);
  
    doc.save("certificate.pdf");
  };
  

  return (
    <div className='container'>
      <h1>Certificate Generator</h1>

      <div>
        <input type="text" placeholder="Enter Student Name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>

      <div>
        <input type="text" placeholder="Enter PRN" value={prn} onChange={(e) => setPrn(e.target.value)} />
      </div>

      <div>
        <input type="text" placeholder="Enter Course Name" value={course} onChange={(e) => setCourse(e.target.value)} />
      </div>

      <div>
        <input type="text" placeholder="Enter Completion Date (DD-MM-YYYY)" value={completionDate} onChange={(e) => setCompletionDate(e.target.value)} />
      </div>

      <button onClick={createCertificate}>Create Certificate</button>
    </div>
  );
}

export default App;
