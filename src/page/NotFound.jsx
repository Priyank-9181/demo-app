import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../style/notFound.module.css";

function NotFound() {
  const navigate = useNavigate();
  const [count, setCount] = useState(4);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((count) => {
        if (count === 0) {
          clearInterval(id);
          navigate(`/${0}`);
        }
        return count - 1;
      });
    }, 1000);
  }, [navigate]);

  return (
    <div className={styles.container}>
      <div>
        <h1>
          404 <sub>Not Found</sub>
        </h1>
        <p>Page Not Found!</p>
        <p>Go to Home page in {count}s</p>
      </div>
    </div>
  );
}

export default NotFound;
