const transactions = [
  { id: 'TX01', stationId: 'S01', kwh: 45.2, amount: 203400, status: 'SUCCESS' },
  { id: 'TX02', stationId: 'S02', kwh: 30.5, amount: 137250, status: 'FAILED' },
  { id: 'TX03', stationId: 'S01', kwh: 62.8, amount: 282600, status: 'SUCCESS' },
  { id: 'TX04', stationId: 'S03', kwh: 28.0, amount: 126000, status: 'SUCCESS' },
  { id: 'TX05', stationId: 'S02', kwh: 50.0, amount: 225000, status: 'SUCCESS' }
];

const successfulTransactions = transactions.filter(tx => tx.status === 'SUCCESS');
console.log('Giao dịch thành công:', successfulTransactions);

const totalSuccessfulRevenue = successfulTransactions.reduce((sum, tx) => sum + tx.amount, 0);
console.log('Tổng doanh thu thành công:', totalSuccessfulRevenue, 'VNĐ');

const stationS01Transactions = transactions.filter(tx => tx.stationId === 'S01');
console.log('Danh sách giao dịch tại trạm S01:', stationS01Transactions);