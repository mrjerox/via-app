import React, { useEffect, useState } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import { db } from '../firebase';
import { getAll } from "../firebase/api";
import { collection, doc, getDocs } from "firebase/firestore";

import './css/style.css';

import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';
import Login from './login/Login';

function App() {

  const location = useLocation();
  const [viaCategories, setViaCategories] = useState([]);
  const viaCategoriesCollectionRef = collection(db, "via_categories"); 
  
  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto';
    window.scroll({ top: 0 });
    document.querySelector('html').style.scrollBehavior = '';

  }, [location.pathname]); // triggered on route change

  useEffect(() => {
    const getCategories = async () => {
      const data = await getAll(viaCategoriesCollectionRef);
      setViaCategories(
        data.docs
        .map((doc) => (
          {
            id: doc.id,
            ...doc.data()
          }
        ))
      );
    }
    getCategories();
  }, []);

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/admin" element={<Dashboard viaCategories={viaCategories} />} />
      </Routes>
    </>
  );
}

export default App;