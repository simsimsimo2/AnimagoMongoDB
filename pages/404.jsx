import React, { useState, useEffect } from 'react';
import { Inter } from '@next/font/google';
import styles from '../styles/NotFound.module.css';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

export default function NotFound() {
  const router = useRouter();
  const [NotFound, setNotFound] = useState(false);
  let noOrdersFound = false;

  useEffect(() => {
    if (!noOrdersFound) {
      noOrdersFound = true;
      setNotFound(true);
      toast.error(
        'Nous avons regardé partout pour cette page ! Erreur 404 Page non trouvée',
        {
          hideProgressBar: true,
          autoClose: 3000,
          type: 'error',
          position: 'top-left',
        }
      );
    } else {
      setNotFound(false);
    }
  });

  return (
    <main>
      <div className={styles.container}>
        <h1 className={styles.h1}>
          Nous avons regardé partout pour cette page !
        </h1>
        <h1 className={styles.h1}>(Erreur 404 Page non trouvée)</h1>
        <h1
          className={styles.emoji}
          role="img"
          aria-label="Face With Rolling Eyes Emoji"
        >
          🙄
        </h1>
      </div>
      <div className={styles.container}>
        <button
          className={`${styles.button} ${styles.h1}`}
          onClick={() => router.back()}
        >
          <h1>← Aller à Accueil</h1>
        </button>
      </div>
    </main>
  );
}
