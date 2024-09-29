import styles from './dashboardadmin.module.css';
import { Link } from 'react-router-dom';
import { FaTachometerAlt, FaSearch, FaUser, FaFileAlt } from 'react-icons/fa'; 
import logo from "../../assets/logo.png"; 
import { BarChart } from '@mui/x-charts/BarChart';  // Import BarChart from mui/x-charts
import { axisClasses } from '@mui/x-charts/ChartsAxis';

const AdminDashboard = () => {
    // Mock data for all months
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
            {
                label: 'User Statistics',
                data: [15, 19, 25, 30, 20, 28, 35, 32, 38, 40, 45, 50], // Mock data for users in each month
            },
        ],
    };

    // Bar chart settings (adjusting to work with @mui/x-charts)
    const chartSetting = {
        yAxis: [
            {
                label: 'Users',
            },
        ],
        series: [{ dataKey: 'users', label: 'User Statistics' }],
        height: 300,
        sx: {
            [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
                transform: 'translateX(-10px)',
            },
        },
    };

    const dataset = data.labels.map((month, index) => ({
        month,
        users: data.datasets[0].data[index], // Mapping month and user data to the dataset
    }));

   

    // Mock data for admin details
    const totalUsers = 1200;
    const totalDocuments = 350;
    const lastCheckedPercentage = 23; // Last checked document's plagiarism percentage

    return (
        <div className={styles.dashboardContainer}>
            <aside className={styles.sidebar}>
                <h1 className={styles.sidebarTitle}>Admin Dashboard</h1>  
                <ul className={styles.sidebarMenu}>
                    <Link to="/Admindashboard">
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
                <br />
                <section className={styles.dashboardCards}>
                    {/* Number of Users Card */}
                    <div className={styles.card}>
                        <div className={styles.cardContent}>
                            <FaUser className={styles.cardIcon} />
                            <h3>Total Registered Users</h3>
                            <p>{totalUsers}</p>
                        </div>
                    </div>

                    {/* Number of Documents Checked */}
                    <div className={styles.card}>
                        <div className={styles.cardContent}>
                            <FaFileAlt className={styles.cardIcon} />
                            <h3>Total Documents Checked</h3>
                            <p>{totalDocuments}</p>
                        </div>
                    </div>

                    {/* Last Checked Document Plagiarism Percentage */}
                    <div className={styles.card}>
                        <h3>Last Checked Document - Plagiarism Percentage</h3>
                        <p>{lastCheckedPercentage}%</p>
                    </div>
                </section>
                <br />
                <br />
                <section className={styles.additionalCards}>
                    {/* Usage Statistics Bar Chart */}
                    <div className={styles.card1}>
                        <h3>Usage Statistics (Monthly)</h3>
                        <BarChart
                            dataset={dataset}
                            xAxis={[
                                { scaleType: 'band', dataKey: 'month'},
                            ]}
                            {...chartSetting}
                        />
                    </div>
                </section>
                
            </main>
        </div>
    );
};

export default AdminDashboard;
