import React, { useEffect, useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { db } from '../../../firebase';
import { getAll } from "../../../firebase/api";
import { collection, query, where, getDocs } from "firebase/firestore";

// Import utilities
import { tailwindConfig, hexToRGB } from '../../utils/Utils';

function ViaList({category, categoryId}) {

  const [viaList, setViaList] = useState([]);
  const viaRef = collection(db, "via");
  const viaQuery = query(viaRef, where("category_id", "==", categoryId));
  
  useEffect(() => {
    const getVia = async () => {
      const via = await getAll(viaQuery);
      setViaList(
        via.docs.map((doc) => (
          {
            id: doc.id,
            ...doc.data()
          }
        ))
      )
    }

    const getViaDetail = async (id) => {
      const viaDetailRef = collection(db, "via_detail");
      const viaDetailQuery = query(viaDetailRef, where("via_id", "==", id));
      const data = await getAll(viaDetailQuery);
      console.log(data.docs.length);
    }

    getViaDetail('TGW6v29PR8cnfUNBGMMg');

    getVia();
  }, [])
  

  const chartData = {
    datasets: [
      // Indigo line
      {
        data: [
          732, 610, 610, 504, 504, 504, 349,
          349, 504, 342, 504, 610, 391, 192,
          154, 273, 191, 191, 126, 263, 349,
          252, 423, 622, 470, 532,
        ],
        fill: true,
        backgroundColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.blue[500])}, 0.08)`,
        borderColor: tailwindConfig().theme.colors.indigo[500],
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.indigo[500],
        clip: 20,
      },
      // Gray line
      {
        data: [
          532, 532, 532, 404, 404, 314, 314,
          314, 314, 314, 234, 314, 234, 234,
          314, 314, 314, 388, 314, 202, 202,
          202, 202, 314, 720, 642,
        ],
        borderColor: tailwindConfig().theme.colors.slate[300],
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.slate[300],
        clip: 20,
      },
    ],
  };

  return (
    <div className="col-span-full shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100 bg-white"><h2 className="font-semibold text-slate-800">{category.name}</h2></header>
      <div className="flex col-span-full flex-col p-2 flex-wrap sm:flex-row sm:col-span-6 xl:col-span-full">
        {viaList.map((via, index) => {
          let price = new Intl.NumberFormat('vn-VN', { style: 'currency', currency: 'VND' }).format(via.price);
          return (
            <div className="basis-[25%] bg-transparent p-2" key={index}>
              <div className="bg-white p-5">
                <h2 className="text-lg font-semibold text-slate-800 mb-2">{via.name}</h2>
                <div className="text-xs font-semibold text-slate-400 uppercase mb-2">
                  {via.desc.map((content, index) => {
                    return (
                      <span className="flex items-baseline mb-1" key={index}>
                        <FaCheck className="text-green-400 mr-1"/>{content}
                      </span>
                    )
                  })}
                </div>
                <div className="flex items-start">
                  <div className="text-3xl font-bold text-slate-800 mr-2">{price}</div>
                  <div className="text-sm font-semibold text-white px-1.5 bg-green-500 rounded-full text-center">20</div>
                </div>
                <div className="box-button text-center mt-4">
                  <button className="px-4 py-2 text-sm bg-neutral-600 text-white font-semibold rounded-md border border-purple-200 hover:text-white hover:bg-neutral-700 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Mua ngay</button>
                </div>
              </div>
            </div>
          );
        })}
        {/* Chart built with Chart.js 3 */}
      </div>
    </div>
  );
}

export default ViaList;
