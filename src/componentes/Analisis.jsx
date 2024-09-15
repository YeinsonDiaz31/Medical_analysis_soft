import React from 'react';
import logo from '../medicina.jpg';
import Login from './Login';

const FileUploader = ({ onFileSelect }) => {
  const [selectedFile, setSelectedFile] = React.useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    onFileSelect(file);
  };

  return (
    <div className="file-uploader">
      <input
        type="file"
        id="fileInput"
        className="file-input"
        onChange={handleFileChange}
      />
      <label htmlFor="fileInput" className="file-label">
        <div className="file-upload-box">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1828/1828911.png"
            alt="Upload Icon"
            className="upload-icon"
          />
          <p className="upload-text">
            {selectedFile ? selectedFile.name : "Drag & Drop or Click to Upload"}
          </p>
        </div>
      </label>
    </div>
  );
};

const Analisis = () => {
  const [estado, setEstado] = React.useState(true);
  const [fileSelected, setFileSelected] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [selectedResults, setSelectedResults] = React.useState(null);
  const [history, setHistory] = React.useState([]);

  const mockData = [
    {
      examType: "Análisis de Sangre",
      glucose: "90 mg/dL",
      cholesterol: "180 mg/dL",
      hemoglobin: "14 g/dL",
      observations: "Todos los valores están dentro de los rangos normales."
    },
    {
      examType: "Análisis de Orina",
      glucose: "Negativo",
      proteins: "Traza",
      leukocytes: "Elevado",
      observations: "Posible infección urinaria. Recomendado realizar más pruebas."
    },
    {
      examType: "Análisis de Hígado",
      bilirubin: "1.2 mg/dL",
      alkalinePhosphatase: "75 U/L",
      ALT: "45 U/L",
      observations: "Posibles signos de inflamación. Controlar con un seguimiento médico."
    },
    {
      examType: "Prueba de Colesterol",
      HDL: "60 mg/dL",
      LDL: "120 mg/dL",
      totalCholesterol: "200 mg/dL",
      observations: "Colesterol dentro de los límites normales. No se requieren medidas inmediatas."
    },
    {
      examType: "Análisis Renal",
      creatinine: "1.0 mg/dL",
      urea: "35 mg/dL",
      uricAcid: "5 mg/dL",
      observations: "Función renal en niveles normales."
    },
    {
      examType: "Hemograma Completo",
      whiteBloodCells: "6,000 /µL",
      redBloodCells: "4.5 millones/µL",
      platelets: "200,000 /µL",
      hemoglobin: "13.5 g/dL",
      observations: "Conteo sanguíneo dentro de los parámetros normales."
    },
    {
      examType: "Prueba de Función Tiroidea",
      TSH: "2.5 µIU/mL",
      T3: "100 ng/dL",
      T4: "6.5 µg/dL",
      observations: "Función tiroidea en el rango normal."
    },
    {
      examType: "Electrolitos en Suero",
      sodium: "140 mEq/L",
      potassium: "4.0 mEq/L",
      chloride: "100 mEq/L",
      observations: "Equilibrio electrolítico adecuado."
    },
    {
      examType: "Prueba de Función Pulmonar",
      FEV1: "80% del valor predicho",
      FVC: "85% del valor predicho",
      PEF: "90% del valor predicho",
      observations: "Capacidad pulmonar dentro de los límites normales."
    },
    {
      examType: "Prueba de Glicemia en Ayunas",
      glucose: "85 mg/dL",
      observations: "Glucemia en ayunas dentro del rango normal."
    },
    {
      examType: "Análisis de Sangre para Anticuerpos",
      antibodies: "Positivo para anticuerpos tipo IgG",
      observations: "Infección previa detectada, sin actividad actual."
    },
    {
      examType: "Análisis de Coagulación",
      PT: "12 segundos",
      INR: "1.1",
      aPTT: "30 segundos",
      observations: "Tiempo de coagulación dentro de los límites normales."
    }
  ];

  const atras = () => {
    setEstado(false);
  };

  const handleFileSelect = (file) => {
    if (file) {
      setLoading(true);
      setTimeout(() => {
        const randomResults = mockData[Math.floor(Math.random() * mockData.length)];
        setSelectedResults(randomResults);
        setHistory((prevHistory) => [
          ...prevHistory,
          { fileName: file.name, date: new Date().toLocaleString() }
        ]);
        setFileSelected(true);
        setLoading(false);
      }, Math.random() * (5000 - 2000) + 2000);
    }
  };

  return (
    <div>
      {estado ? (
        <div className="container mt-3">
          <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
            <div className="container-fluid">
              <img src={logo} alt="logo" style={{ width: '40px' }} className="rounded-pill" />
              <div className="container-fluid text-center">
                <h5 style={{ color: "white" }}>Medical Analysis</h5>
              </div>
              <button type="button" className="btn btn-dark btn-rounded" onClick={atras}>
                <i className="fas fa-hand-point-left"></i>
              </button>
            </div>
          </nav>
          <h1 className="text-center mt-3">Lectura de los análisis: adjunta tu examen médico</h1>

          <div className="d-flex justify-content-center mt-4">
            <FileUploader onFileSelect={handleFileSelect} />
          </div>

          {loading && (
            <div className="loader text-center mt-3">
              <p>Cargando resultados del examen médico...</p>
            </div>
          )}

          {fileSelected && !loading && selectedResults && (
            <div className="medical-results mt-5">
              <h3>Resultados del Examen Médico</h3>
              <div className="results-grid">
                <p><strong>Tipo de Examen:</strong> {selectedResults.examType}</p>
                {selectedResults.glucose && <p><strong>Glucosa:</strong> {selectedResults.glucose}</p>}
                {selectedResults.cholesterol && <p><strong>Colesterol:</strong> {selectedResults.cholesterol}</p>}
                {selectedResults.hemoglobin && <p><strong>Hemoglobina:</strong> {selectedResults.hemoglobin}</p>}
                <p><strong>Observaciones:</strong> {selectedResults.observations}</p>
              </div>
            </div>
          )}

          {history.length > 0 && (
            <div className="history mt-5 mb-5">
              <h3>Historial de Archivos Procesados</h3>
              <ul className="list-group">
                {history.map((item, index) => (
                  <li key={index} className="list-group-item">
                    {item.fileName} - {item.date}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default Analisis;