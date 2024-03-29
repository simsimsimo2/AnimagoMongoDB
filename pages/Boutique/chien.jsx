import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProduitListe from '../../components/produit/ProduitListe';
import styles from '/styles/ProduitListe.module.css';
import PanierPanneau from '@/pages/AchatsPanier/PanierPanneau';
import { getPaniers } from '/server/config/mongo/paniers';
import { useCart } from '/components/AchatPanier/UseCart.jsx';

export default function Chien({ paniers }) {
  const [
    cart,
    initCart,
    addToCart,
    removeFromCart,
    setCart,
    getPurchaseQuantity,
    getRemainingStock,
  ] = useCart(paniers);

  useEffect(() => {
    initCart();
  }, [paniers, initCart]);

  const [visibleState, setVisible] = useState(false);
  const toggler = () => {
    setVisible(!visibleState);
  };
  return (
    <>
      <Header />
      {!visibleState && <PanierPanneau toggler={toggler} />}
      <main>
        <h1 className={styles.h1}>Chiens</h1>
        <ProduitListe
          showPanierPanneau={visibleState}
          toggler={toggler}
          categorie="chien"
          paniers={paniers}
        />
      </main>
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const { paniers } = await getPaniers();
  if (!paniers) throw new Error('Failed to fetch paniers');
  // Convert the _id property of each panier to a string

  return { props: { paniers } };
}
