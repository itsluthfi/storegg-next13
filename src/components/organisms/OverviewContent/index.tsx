import { useEffect, useState } from 'react';
import Category from './Category';
import TableRow from './TableRow';
import { getMemberOverview } from '@/services/member';
import { toast } from 'react-toastify';

export default function OverviewContent() {
  const [count, setCount] = useState([
    {
      _id: '',
      valeu: 0,
      name: '',
    },
  ]);
  const [data, setData] = useState([
    {
      _id: '',
      status: '',
      value: 0,
      historyVoucherTopup: {
        thumbnail: '',
        gameName: '',
        category: '',
        coinQuantity: 0,
        coinName: '',
      },
    },
  ]);

  useEffect(() => {
    async function getMemberOverviewAPI() {
      const response = await getMemberOverview();
      if (response.error) {
        toast.error(response.message);
      } else {
        setCount(response.data.count);
        setData(response.data.data);
      }
    }

    getMemberOverviewAPI();
  }, []);

  const IMG = process.env.NEXT_PUBLIC_IMAGE;

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
                {data.map((item) => (
                  <TableRow
                    key={item._id}
                    image={`${IMG}/${item.historyVoucherTopup.thumbnail}`}
                    title={item.historyVoucherTopup.gameName}
                    category={item.historyVoucherTopup.category}
                    item={`${item.historyVoucherTopup.coinQuantity} ${item.historyVoucherTopup.coinName}`}
                    price={item.value}
                    status={item.status}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
