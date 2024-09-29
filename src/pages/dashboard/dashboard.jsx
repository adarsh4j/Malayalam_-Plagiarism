import { useState, useEffect } from 'react';
import styles from './dashboard.module.css';
import { Link } from 'react-router-dom';
import { FaTachometerAlt, FaSearch } from 'react-icons/fa'; 
import logo from "../../assets/logo.png"; 
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import axios from 'axios'; 
import NewsTicker from '../../components/news/newsticker'; 

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Dashboard = () => {
    const [usageStats, setUsageStats] = useState([]);
    const [latestPlagiarismCheck, setLatestPlagiarismCheck] = useState(null);
    const [plagiarismData, setPlagiarismData] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                const token = localStorage.getItem('jwt'); 
                const response = await axios.get('http://127.0.0.1:8000/api/dashboard', {
                    headers: {
                        Authorization: 'Bearer ${token}',
                    },
                });

                setUsageStats(response.data.usage_statistics);
                setLatestPlagiarismCheck(response.data.latest_plagiarism_check);
                setPlagiarismData(response.data.plagiarism_data);
            } catch (error) {
                setErrorMessage('Failed to load data. Please try again.');
            }
        };

        fetchDashboardData();
    }, []);

    const data = {
        labels: usageStats.map(stat => new Date(stat.check_in).toLocaleDateString()), 
        datasets: [
            {
                label: 'Usage Statistics',
                data: usageStats.map(stat => stat.check_in), 
                fill: false,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(75,192,192,1)',
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',
            },
            title: {
                display: true,
                text: 'User Statistics Over Time',
            },
        },
    };

    return (
        <div className={styles.dashboardContainer}>
            <aside className={styles.sidebar}>
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
            <main className={styles.mainContent}>
                <header className={styles.header}> 
                    <img className={styles.icon} src={logo} alt="ICFOSS" />
                    <Link to="/signin"><button type="submit"> Logout</button></Link>
                </header>

                {errorMessage && <p>{errorMessage}</p>} 

                <section className={styles.dashboardCards} style={{ width: '70%', height: '50%' }}>
                    <div className={styles.card}>
                        <h3>Last Check</h3>
                        <p><b>Name</b>: {latestPlagiarismCheck ? latestPlagiarismCheck.user_name : 'N/A'}</p> <br /> <br />
                        <p><b>Date</b>: {latestPlagiarismCheck ? latestPlagiarismCheck.date_uploaded : 'N/A'}</p> <br /> <br />
                        <p><b>Plagiarism %</b>: {latestPlagiarismCheck ? latestPlagiarismCheck.plagiarism_percentage : 'N/A'}</p> <br /> <br />
                    </div>
                    <div className={styles.card}>
                        <h3>Usage Statistics</h3>
                        <Line data={data} options={options} />
                    </div>
                </section>

                <section className={styles.additionalCards} style={{ width: '885px', height: '20%' }} >
                    <div className={styles.card}>
                        <h3>Recent Activities</h3>
                        <div className={styles.activities}  style={{ width: '885px', height: '20%' }}>
                            <div className={styles.activityHeader}>
                                <div className={styles.activityColumn}>Activity</div>
                                <div className={styles.dateColumn}>Date</div>
                            </div>
                            <div className={styles.activityList}>
                                {plagiarismData.map((activity, index) => (
                                    <div className={styles.activityRow} key={index}>
                                        <div className={styles.activityColumn}>{activity.user_name}'s check</div>
                                        <div className={styles.dateColumn}>{new Date(activity.created_at).toLocaleDateString()}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <aside className={styles.newsSection}>
                    <h3>Latest ICFOSS News </h3>
                    <NewsTicker />
                    <a href="https://icfoss.in/icfoss-news" className={styles.buttonLink}>
                        Click here for more
                    </a>
                </aside>
            </main>
        </div>
    );
}

export default Dashboard;