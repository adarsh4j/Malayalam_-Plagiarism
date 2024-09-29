import { useState, useEffect } from 'react';
import axios from 'axios'; 
import styles from '../../components/news/newsticker.module.css';

const NewsTicker = () => {
    const [news, setNews] = useState([]);
    const [currentNewsIndex, setCurrentNewsIndex] = useState(0);

 
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/news')
            .then((response) => {
                console.log('Fetched news data:', response.data);
                setNews(response.data);
            })
            .catch((error) => {
                console.error('Error fetching news:', error);
            });
    }, []);

    // Cycle through news items every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentNewsIndex((prevIndex) =>
                prevIndex === news.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, [news]);

    return (
        <div className={styles.newsTicker}>
            {news.length > 0 ? (
                <div className={styles.newsItem}>
                    <h3>{news[currentNewsIndex].headline}</h3>
                    <p>{news[currentNewsIndex].description.split('. ').slice(0, 4).join('. ') + '.'}</p>
                    <a href={news[currentNewsIndex].link} target="_blank" rel="noopener noreferrer">
                        Read more
                    </a>
                </div>
            ) : (
                <p>Loading news...</p>
            )}
        </div>
    );
};

export default NewsTicker;