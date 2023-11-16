function getCurrentDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // 月份从 0 开始，需要加 1
  const day = date.getDate();

  const currentDate = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
  
  return currentDate;
}

module.exports = {
  getCurrentDate,
};