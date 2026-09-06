import React, { useState } from 'react';

function App() {
  const [file, setFile] = useState(null);
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setError('');

    if (!selectedFile) return;

    const fileName = selectedFile.name;
    const extension = fileName.split('.').pop().toLowerCase();

    if (extension !== 'csv' && extension !== 'xlsx') {
      setError('Error: Solo se permiten archivos en formato .csv o .xlsx');
      setFile(null);
      setData([]);
      return;
    }

    setFile(selectedFile);

    // Datos simulados extraídos del archivo para demostración MDM
    setData([
      { id: 'DEV-001', dispositivo: 'Laptop Dell Latitude', so: 'Windows 11', parches: 'Al día', estado: 'Activo' },
      { id: 'DEV-002', dispositivo: 'MacBook Pro 14"', so: 'macOS Sonoma', parches: '1 Pendiente', estado: 'Activo' },
      { id: 'DEV-003', dispositivo: 'ThinkPad X1', so: 'Windows 10', parches: '3 Pendientes', estado: 'Revisión' },
    ]);
  };

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial, sans-serif', maxWidth: '1000px', margin: '0 auto' }}>
      <header style={{ borderBottom: '2px solid #0056b3', paddingBottom: '15px', marginBottom: '25px' }}>
        <h1 style={{ color: '#0056b3', margin: '0 0 10px 0' }}>Plataforma Web MSCM</h1>
        <p style={{ margin: 0, color: '#555' }}>
          <strong>Módulo de Ingesta y Procesamiento de Datos de Flota MDM (Requerimiento MSCM-1)</strong>
        </p>
      </header>

      <section style={{ background: '#f8f9fa', border: '1px solid #e9ecef', padding: '20px', borderRadius: '8px', marginBottom: '25px' }}>
        <h3 style={{ marginTop: 0 }}>Ingesta de Archivo MDM</h3>
        <p>Seleccione un archivo en formato <strong>.csv</strong> o <strong>.xlsx</strong> para cargar los metadatos de la flota:</p>
        
        <input 
          type="file" 
          accept=".csv, .xlsx" 
          onChange={handleFileChange} 
          style={{ padding: '8px', background: '#fff', border: '1px solid #ccc', borderRadius: '4px' }}
        />

        {error && (
          <p style={{ color: '#d9534f', fontWeight: 'bold', marginTop: '10px' }}>{error}</p>
        )}

        {file && !error && (
          <p style={{ color: '#5cb85c', fontWeight: 'bold', marginTop: '10px' }}>
            ✓ Archivo "{file.name}" cargado y procesado exitosamente.
          </p>
        )}
      </section>

      {data.length > 0 && (
        <section>
          <h3>Registros Ingestados - Flota MDM</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ background: '#0056b3', color: '#fff' }}>
                <th style={{ padding: '10px', border: '1px solid #ccc' }}>ID Dispositivo</th>
                <th style={{ padding: '10px', border: '1px solid #ccc' }}>Dispositivo</th>
                <th style={{ padding: '10px', border: '1px solid #ccc' }}>Sistema Operativo</th>
                <th style={{ padding: '10px', border: '1px solid #ccc' }}>Estado de Parches</th>
                <th style={{ padding: '10px', border: '1px solid #ccc' }}>Estatus</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index} style={{ background: index % 2 === 0 ? '#fff' : '#f2f2f2' }}>
                  <td style={{ padding: '10px', border: '1px solid #ccc' }}>{row.id}</td>
                  <td style={{ padding: '10px', border: '1px solid #ccc' }}>{row.dispositivo}</td>
                  <td style={{ padding: '10px', border: '1px solid #ccc' }}>{row.so}</td>
                  <td style={{ padding: '10px', border: '1px solid #ccc' }}>{row.parches}</td>
                  <td style={{ padding: '10px', border: '1px solid #ccc' }}>{row.estado}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}
    </div>
  );
}

export default App;