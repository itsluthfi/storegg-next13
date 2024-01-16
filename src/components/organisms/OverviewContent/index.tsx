import { useEffect, useState } from 'react';
import Category from './Category';
import TableRow from './TableRow';
import { getOverviewMember } from '@/services/player';
import { toast } from 'react-toastify';

export default function OverviewContent() {
  const [count, setCount] = useState([
    {
      _id: '',
      valeu: 0,
      name: '',
    },
  ]);

  useEffect(() => {
    async function getOverviewData() {
      const response = await getOverviewMember();
      if (response.error) {
        toast.error(response.message);
      } else {
        setCount(response.data.count);
      }
    }

    getOverviewData();
  }, []);

  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
        <div className="top-up-categories mb-30">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Top Up Categories
          </p>
          <div className="main-content">
            <div className="row">
              {count.map((item) => (
                <Category key={item._id} nominal={item.valeu} icon="ic-desktop">
                  {item.name}
                </Category>
              ))}
            </div>
          </div>
        </div>
        <div className="latest-transaction">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Latest Transactions
          </p>
          <div className="main-content main-content-table overflow-auto">
            <table className="table table-borderless">
              <thead>
                <tr className="color-palette-1">
                  <th className="text-start" scope="col">
                    Game
                  </th>
                  <th scope="col">Item</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <TableRow
                  image="overview-1"
                  title="Mobile Legends"
                  category="Desktop"
                  item={200}
                  price={290000}
                  status="Pending"
                />
                <TableRow
                  image="overview-2"
                  title="Call Of Duty: Modern"
                  category="Desktop"
                  item={550}
                  price={740000}
                  status="Success"
                />
                <TableRow
                  image="overview-3"
                  title="Clash of Clans"
                  category="Mobile"
                  item={100}
                  price={120000}
                  status="Failed"
                />
                <TableRow
                  image="overview-4"
                  title="The Royal Game"
                  category="Mobile"
                  item={225}
                  price={200000}
                  status="Pending"
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
