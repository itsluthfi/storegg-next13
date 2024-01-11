import { useState } from 'react';
import { useRouter } from 'next/router';
import { setCheckout } from '@/services/player';
import { toast } from 'react-toastify';

export default function CheckoutConfirmation() {
  const [checked, setChecked] = useState(false);
  const router = useRouter();

  const onSubmit = async () => {
    const dataItemLocal = localStorage.getItem('data-item');
    const dataTopUpLocal = localStorage.getItem('topup-data');

    const dataItem = JSON.parse(dataItemLocal!);
    const dataTopUp = JSON.parse(dataTopUpLocal!);

    if (!checked) {
      toast.warning('Pastikan kamu telah melakukan pembayaran!');
    }

    const data = {
      voucher: dataItem._id,
      nominal: dataTopUp.nominalItem._id,
      payment: dataTopUp.paymentItem.payment._id,
      bank: dataTopUp.paymentItem.bank._id,
      name: dataTopUp.bankAccountName,
      accountUser: dataTopUp.verifyID,
    };

    const response = await setCheckout(data);
    if (response.error) {
      toast.error(response.message);
    } else {
      toast.success('Checkout berhasil!');
      router.push('/complete-checkout');
    }
  };

  return (
    <>
      <label className="checkbox-label text-lg color-palette-1">
        I have transferred the money
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        <span className="checkmark" />
      </label>
      <div className="d-md-block d-flex flex-column w-100 pt-50">
        <button
          className="btn btn-confirm-payment rounded-pill fw-medium text-white border-0 text-lg"
          type="button"
          onClick={onSubmit}
        >
          Confirm Payment
        </button>
      </div>
    </>
  );
}
