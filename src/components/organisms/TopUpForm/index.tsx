import { useState } from 'react';
import { useRouter } from 'next/router';
import NominalItem from './NominalItem';
import PaymentItem from './PaymentItem';
import { NominalTypes } from '@/services/data-types';
import { toast } from 'react-toastify';

interface TopUpFormProps {
  nominals: NominalTypes[];
}

interface PaymentDummyTypes {
  _id: string;
  type: string;
  name: string;
}

export default function TopUpForm(props: TopUpFormProps) {
  const { nominals } = props;
  const router = useRouter();

  const [verifyID, setVerifyID] = useState('');
  const [bankAccountName, setBankAccountName] = useState('');
  const [nominalItem, setNominalItem] = useState({});
  const [paymentItem, setPaymentItem] = useState({});

  const payments = [
    {
      _id: '1',
      type: 'Transfer',
      name: 'BCA',
    },
    {
      _id: '2',
      type: 'Transfer',
      name: 'Mandiri',
    },
    {
      _id: '3',
      type: 'QRIS',
      name: 'GoPay',
    },
  ];

  const onNominalItemClick = (data: NominalTypes) => {
    setNominalItem(data);
  };

  const onPaymentItemClick = (data: PaymentDummyTypes) => {
    setPaymentItem(data);
  };

  const onSubmit = () => {
    if (
      verifyID === '' ||
      nominalItem === {} ||
      paymentItem === {} ||
      bankAccountName === ''
    ) {
      toast.warning('Silakan isi form dan pilih item yang tersedia!');
    } else {
      const data = {
        verifyID,
        nominalItem,
        paymentItem,
        bankAccountName,
      };
      localStorage.setItem('topup-data', JSON.stringify(data));
      router.push('/checkout');
    }
  };

  return (
    <form action="./checkout.html" method="POST">
      <div className="pt-md-50 pt-30">
        <div className="">
          <label
            htmlFor="ID"
            className="form-label text-lg fw-medium color-palette-1 mb-10"
          >
            Verify ID
          </label>
          <input
            type="text"
            className="form-control rounded-pill text-lg"
            id="ID"
            name="ID"
            aria-describedby="verifyID"
            placeholder="Enter your ID"
            value={verifyID}
            onChange={(event) => setVerifyID(event.target.value)}
          />
        </div>
      </div>
      <div className="pt-md-50 pb-md-50 pt-30 pb-20">
        <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">
          Nominal Top Up
        </p>
        <div className="row justify-content-between">
          {nominals.map((nominal) => (
            <NominalItem
              key={nominal._id}
              _id={nominal._id}
              coinQuantity={nominal.coinQuantity}
              coinName={nominal.coinName}
              price={nominal.price}
              onChange={() => onNominalItemClick(nominal)}
            />
          ))}
          <div className="col-lg-4 col-sm-6" />
        </div>
      </div>
      <div className="pb-md-50 pb-20">
        <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">
          Payment Method
        </p>
        <fieldset id="paymentMethod">
          <div className="row justify-content-between">
            {payments.map((payment) => (
              <PaymentItem
                key={payment._id}
                bankID={payment._id}
                type={payment.type}
                name={payment.name}
                onChange={() => onPaymentItemClick(payment)}
              />
            ))}
            <div className="col-lg-4 col-sm-6" />
          </div>
        </fieldset>
      </div>
      <div className="pb-50">
        <label
          htmlFor="bankAccount"
          className="form-label text-lg fw-medium color-palette-1 mb-10"
        >
          Bank Account Name
        </label>
        <input
          type="text"
          className="form-control rounded-pill text-lg"
          id="bankAccount"
          name="bankAccount"
          aria-describedby="bankAccount"
          placeholder="Enter your Bank Account Name"
          value={bankAccountName}
          onChange={(event) => setBankAccountName(event.target.value)}
        />
      </div>
      <div className="d-sm-block d-flex flex-column w-100">
        <button
          type="button"
          className="btn btn-submit rounded-pill fw-medium text-white border-0 text-lg"
          onClick={onSubmit}
        >
          Continue
        </button>
      </div>
    </form>
  );
}
