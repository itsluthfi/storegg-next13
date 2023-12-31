import Head from 'next/head';
import TransactionDetailContent from '@/components/organisms/TransactionDetailContent';

export default function TransactionsDetail() {
  return (
    <>
      <Head>
        <title>StoreGG | Transactions Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="transactions-detail overflow-auto">
        <TransactionDetailContent />
      </section>
    </>
  );
}
