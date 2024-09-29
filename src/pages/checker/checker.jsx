// import { navigator,useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FaUpload, FaPaste, FaLink, FaBook, FaSave, FaTachometerAlt, FaSearch, FaCheck } from 'react-icons/fa';
// import styles from '../checker/checker.module.css';
// import axios from 'axios';
// import analysis from '/analysis.png'

// const Checker = () => {
//     const [file, setFile] = useState(null);
//     const [documentProperties, setDocumentProperties] = useState({
//         title: '',
//         author: '',
//         description: '',
//         visibility: 'private',
//     });
//     const [clipboardContent, setClipboardContent] = useState('');
//     const [websiteUrl, setWebsiteUrl] = useState('');
//     const [writtenContent, setWrittenContent] = useState('');
//     const [showClipboardTextarea, setShowClipboardTextarea] = useState(false);
//     const [showWebsiteUrlInput, setShowWebsiteUrlInput] = useState(false);
//     const navigate = useNavigate();
//     const handleFileChange = (e) => {
//         setFile(e.target.files[0]);
//     };

//     const handleClipboardPaste = async () => {
//         try {
//             const clipboardData = await navigator.clipboard.readText();
//             setClipboardContent(clipboardData);
//             setShowClipboardTextarea(true);
//             console.log('Clipboard data:', clipboardData);
//         } catch (err) {
//             console.error('Failed to read clipboard contents:', err);
//         }
//     };

//     const handleFromWebsite = () => {
//         setShowWebsiteUrlInput(true);
//     };

//     const handleFromLibrary = () => {
//         // Handle fetching content from a library
//     };

//     const handleDragOver = (e) => {
//         e.preventDefault();
//         e.stopPropagation();
//     };

//     const handleDrop = (e) => {
//         e.preventDefault();
//         e.stopPropagation();
//         const droppedFile = e.dataTransfer.files[0];
//         setFile(droppedFile);
//     };

//     const handleChangeProperty = (e) => {
//         const { name, value } = e.target;
//         setDocumentProperties((prev) => ({ ...prev, [name]: value }));
//     };

//     const handleSave = () => {
//         console.log('Document saved:', documentProperties, file, clipboardContent, websiteUrl, writtenContent);
//     };
//     const handleCheck = async () => {
//         navigate('/plagarism');
//     };

//     return (
//         <div className={styles.dashboardContainer}>
//             <aside className={styles.sidebar}>
//                 <h1 className={styles.sidebarTitle}>Adarsh</h1>
//                 <ul className={styles.sidebarMenu}>
//                     <Link to="/dashboard">
//                         <li>
//                             <FaTachometerAlt className={styles.icon1} />
//                             Dashboard
//                         </li>
//                     </Link>
//                     <Link to="/checker">
//                         <li>
//                             <FaSearch className={styles.icon1} />
//                             Plagiarism Check
//                         </li>
//                     </Link>
//                 </ul>
//             </aside>

//             <section className={styles.mainarea}>
//     <div className={styles.checkerContent}>
//         <h1 className={styles.title}>Plagiarism Checker</h1>

//         <div className={styles.horizontalContainer}>

//             <div className={styles.uploadCard}>
//                 <h3>Upload Your Document</h3>
//                 <div className={styles.uploadOptions}>
//                     <input type="file" id="file-upload" onChange={handleFileChange} className={styles.hiddenInput} />
//                     <label htmlFor="file-upload" className={styles.uploadButton}>
//                         <FaUpload /> Upload
//                     </label>
//                     <button onClick={handleClipboardPaste} className={styles.actionButton}>
//                         <FaPaste /> Paste 
//                     </button>
//                     <button onClick={handleFromWebsite} className={styles.actionButton}>
//                         <FaLink /> Website
//                     </button>
//                     <button onClick={handleFromLibrary} className={styles.actionButton}>
//                         <FaBook /> Library
//                     </button>
//                 </div>

//                 <div
//                     className={styles.dragArea}
//                     onDragOver={handleDragOver}
//                     onDrop={handleDrop}
//                 >
//                     <p>Drag and drop files here</p>
//                 </div>

//                 {file && (
//                     <div className={styles.fileInfo}>
//                         <p>Uploaded File: {file.name}</p>
//                     </div>
//                 )}

//                 <div className={styles.textAreaContainer}>
//                     <label>
//                         Write Text:
//                         <textarea 
//                             value={writtenContent}
//                             onChange={(e) => setWrittenContent(e.target.value)}
//                             className={styles.textArea} style={{ width: '540px', height: '230px' }}
//                             placeholder="Write your content here..."
//                         />
//                     </label>
//                 </div>

//                 {showClipboardTextarea && (
//                     <div className={styles.textAreaContainer}>
//                         <label>
//                             Clipboard Content:
//                             <textarea
//                                 value={clipboardContent}
//                                 onChange={(e) => setClipboardContent(e.target.value)}
//                                 className={styles.textArea}
//                                 placeholder="Pasted clipboard content will appear here..."
//                             />
//                         </label>
//                     </div>
//                 )}

//                 {showWebsiteUrlInput && (
//                     <div className={styles.urlInputContainer}>
//                         <label>
//                             Website URL:
//                             <input
//                                 type="text"
//                                 value={websiteUrl}
//                                 onChange={(e) => setWebsiteUrl(e.target.value)}
//                                 className={styles.inputField}
//                                 placeholder="Enter URL to fetch content"
//                             />
//                         </label>
//                     </div>
//                 )}
//             </div>

//             <div className={styles.propertiesCard}>
//     <h2>Document Details</h2>
//     <label>
//         Title:
//         <input
//             type="text"
//             name="title"
//             value={documentProperties.title}
//             onChange={handleChangeProperty}
//             className={styles.inputField}
//         />
//     </label>
//     <label>
//         Author:
//         <input
//             type="text"
//             name="author"
//             value={documentProperties.author}
//             onChange={handleChangeProperty}
//             className={styles.inputField}
//         />
//     </label>
//     <label>
//         Description:
//         <textarea
//             name="description"
//             value={documentProperties.description}
//             onChange={handleChangeProperty}
//             className={styles.textArea}
//         />
//     </label>
//     <label>
//         Visibility:
//         <select
//             name="visibility"
//             value={documentProperties.visibility}
//             onChange={handleChangeProperty}
//             className={styles.selectField}
//         >
//             <option value="private">Private</option>
//             <option value="public">Public</option>
//         </select>
//     </label>
//     <br />
//     <br />
//     <button className={styles.saveButton} onClick={handleSave}>
//         <FaSave /> Save 
//     </button>
// </div>
// </div>
   
//     <button className={styles.checkButton} onClick={handleCheck}>
//             <FaCheck /> Check
//         </button>
//     </div>
// </section>
// {/* <div className={styles.pic}><img src={analysis} alt="Error in loading" /></div>  */}
// </div>
        
//     );
//  };
 
//  export default Checker;



import { useState, useEffect, useReducer } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import { FaUpload, FaPaste, FaBook, FaSave, FaTachometerAlt, FaSearch, FaCheck } from 'react-icons/fa';
import Chart from "chart.js/auto";
import styles from '../checker/checker.module.css';

const Checker = () => {
  const [file, setFile] = useState(null);
  const [documentProperties, setDocumentProperties] = useState({
    title: '',
    author: '',
    description: '',
    visibility: 'private',
  });
  const [clipboardContent, setClipboardContent] = useState('');
  const [websiteUrl, setWebsiteUrl] = useState(''); 
  const [writtenContent, setWrittenContent] = useState('');
  const [showClipboardTextarea, setShowClipboardTextarea] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [plagiarismPercentage, setPlagiarismPercentage] = useState(0);
  const [domains, setDomains] = useState([]);
  const [domainsCount, setDomainsCount] = useState(0);
  const [chartInstance, setChartInstance] = useState(null);
  const [wordCount, setWordCount] = useState(0);
  const [showPlagiarismResult, setShowPlagiarismResult] = useState(false); 
  const [dragging, setDragging] = useState(false);

  const handleFileChange = async (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setWrittenContent(''); 
    setClipboardContent(''); 
  
   
  };

  const handleClipboardPaste = async () => {
    try {
      const clipboardData = await navigator.clipboard.readText();
      setClipboardContent(clipboardData);
      setShowClipboardTextarea(true);
      setFile('');
    } catch (err) {
      console.error('Failed to read clipboard contents:', err);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDrop = async (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    setFile(droppedFile);
    setDragging(false);
    setWrittenContent(''); 
    setClipboardContent(''); 
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  useEffect(() => {
    setWordCount(writtenContent.split(/\s+/).filter((word) => word.length > 0).length);
  }, [writtenContent]);

  const updateChart = (domains) => {
    const domainNames = domains.map((domain) => domain.domain);
    const generateColors = (count) => {
      return Array.from({ length: count }, () => {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        return `rgb(${r}, ${g}, ${b})` ; });
    };

    const chartData = {
      labels: domainNames,
      datasets: [
        {
          label: "Domain Distribution",
          data: new Array(domains.length).fill(1),
          backgroundColor: generateColors(domains.length),
          hoverOffset: 4,
        },
      ],
    };

    const ctx = document.getElementById("myChart");
    
    if (chartInstance) {
      chartInstance.destroy();
    }

    if (ctx) {
      const newChartInstance = new Chart(ctx, {
        type: "doughnut",
        data: chartData,
      });
      setChartInstance(newChartInstance);
    } else {
      console.error("Chart context not found!");
    }
  };

  const handlePlagiarismCheck = async () => {
    setIsLoading(true);
    try {
      let textToCheck = writtenContent;
  
      if (file) {
        const fileContent = await readFileAsText(file);
        textToCheck += "\n" + fileContent;
      }
  
      const formData = new FormData();
      formData.append("text", textToCheck);
      
      if (websiteUrl) {
        formData.append("website_url", websiteUrl);
      }
  
      const response = await axios.post('http://127.0.0.1:8000/api/PlagiarismCheck/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        withCredentials: true,
      });
  
      const responseData = response.data;
      console.log(responseData);
  
      if (responseData && responseData.domains) {
        setPlagiarismPercentage(responseData.plag_percent);
        setDomains(responseData.domains);
        setDomainsCount(responseData.domains.length);
        updateChart(responseData.domains);
        setShowPlagiarismResult(true);
      } else {
        console.error("Invalid response structure:", responseData);
        setShowPlagiarismResult(false);
      }
    } catch (error) {
      console.error("Error during plagiarism check:", error);
      setShowPlagiarismResult(false);
    } finally {
      setIsLoading(false);
    }
  };
  
 
  const readFileAsText = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => resolve(event.target.result);
      reader.onerror = (error) => reject(error);
      reader.readAsText(file);
    });
  };

  return (
    <div className={styles.dashboardContainer}>
      <aside className={styles.sidebar} >
        <h1 className={styles.sidebarTitle}>Welcome</h1>
        <ul className={styles.sidebarMenu}>
          <Link to="/dashboard">
            <li>
              <FaTachometerAlt className={styles.icon1} />
              Dashboard
            </li>
          </Link>
          <Link to="/checker">
            <li>
              <FaSearch className={styles.icon1} />
              Plagiarism Check
            </li>
          </Link>
        </ul>
      </aside>

      <section className={styles.mainarea}>
        <div className={styles.checkerContent}>
          <h1 className={styles.title}>Plagiarism Checker</h1>

          <div className={styles.horizontalContainer}>
            <div className={styles.uploadCard}>
            <h2 style={{ textAlign: 'center' }}>Upload Your Document</h2><br />
            <div className={styles.uploadOptions}>
                <input type="file" id="file-upload" onChange={handleFileChange} className={styles.hiddenInput} />
                <label htmlFor="file-upload" className={styles.uploadButton}>
                  <FaUpload /> Upload 
                </label>
                <button onClick={handleClipboardPaste} className={styles.actionButton}>
                  <FaPaste /> Paste Text
                </button>
                {/* <button className={styles.actionButton}>
                  <FaBook /> From Book
                </button> */}
              </div>
              
              <div
                className={styles.textAreaContainer}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <label>
                  <textarea
                    value={showClipboardTextarea ? clipboardContent : writtenContent}
                    onChange={(e) => {
                      if (showClipboardTextarea) {
                        setClipboardContent(e.target.value);
                      } else {
                        setWrittenContent(e.target.value);
                        setFile(''); 
                      }
                    }}className={styles.textArea}
                    style={{ width: '611px', height: '410px' }}
                    placeholder={dragging ? "Release to drop the file..." : "Write Text, Paste, or Drop files here..."}
                  />
                </label>

                {file && (
                  <div className={styles.fileInfo}>
                    <p> <strong>Uploaded File: {file.name}</strong></p>
                  </div>
                )}
              </div>
               
              <div className={styles.urlInputContainer}>
                {/* <label>
                  Website URL:
                  <input type="url" value={websiteUrl} onChange={(e) => setWebsiteUrl(e.target.value)}
                    className={styles.inputField} placeholder="Enter URL to fetch content" />
                </label> */}
                <div className={styles.buttonContainer}>
                  <button className={styles.checkButton} onClick={handlePlagiarismCheck}>
                    {isLoading ? "Checking..." : <><FaCheck /> Check</>}
                  </button>
                </div>
              </div>
            </div>

            {/* <div className={styles.propertiesCard}>
              <h2>Document Details</h2>
              <label>
                Title:
                <input type="text" name="title" value={documentProperties.title}
                  onChange={(e) => setDocumentProperties({ ...documentProperties, title: e.target.value })}
                  className={styles.inputField} />
              </label>
              <label>
                Author:
                <input type="text" name="author" value={documentProperties.author}
                  onChange={(e) => setDocumentProperties({ ...documentProperties, author: e.target.value })}
                  className={styles.inputField} />
              </label>
              <label>
                Description:
                <textarea name="description" value={documentProperties.description} style={{ width: '460px', height: '145px' }}
                  onChange={(e) => setDocumentProperties({ ...documentProperties, description: e.target.value })}
                  className={styles.textArea} />
              </label>
              <label>
                Visibility:
                <select name="visibility" value={documentProperties.visibility}
                  onChange={(e) => setDocumentProperties({ ...documentProperties, visibility: e.target.value })}
                  className={styles.selectField}>
                  <option value="private">Private</option>
                  <option value="public">Public</option>
                </select>
              </label>
              <div className={styles.saveContainer}>
                <button className={styles.saveButton} onClick={() => console.log('Document saved:', documentProperties)}>
                  <FaSave /> Save
                </button>
              </div>
            </div>
         */}
          {/* Plagiarism Result Section */}
              <div className={styles.resultContainer}>
                <div className={styles.resultCard}>
                  <h2 className={styles.resultTitle}>Plagiarism Result</h2>
                  <div className={styles.resultDetails}>
                    <p><strong>Word Count:</strong> {wordCount}</p>
                    <p><strong>Plagiarism Percentage:</strong> {plagiarismPercentage.toFixed(2)}%</p>
                    <p><strong>Number of Domains:</strong> {domainsCount}</p>
                    <p><strong>Domains:</strong> {domains.map((domain, index) => (
                      <span key={index}>{domain.domain}{index < domainsCount - 1 ? ', ' : ''}</span>
                    ))}</p>
                  </div>
                </div>

            
                <div className={styles.chartContainer}>
                  <h4>Domain Distribution</h4>
                  <br />
                  <canvas id="myChart" width="400" height="400"></canvas>
                </div>
              </div>
                
         </div>
      
        </div>
      </section>
    </div>
  );
};

export default Checker;