const generatePagesToDisplay = (current_page, last_page) => {
  const maxPagesToShow = 5;
  let pagesToDisplay = [current_page];

  if (last_page <= maxPagesToShow) {
    pagesToDisplay = Array.from({ length: last_page }, (_, i) => i + 1);
  } else if (current_page <= 3) {
    pagesToDisplay = [1, 2, 3, 4, "...", last_page];
  } else if (current_page >= last_page - 2) {
    pagesToDisplay = [
      1,
      "...",
      last_page - 3,
      last_page - 2,
      last_page - 1,
      last_page,
    ];
  } else {
    pagesToDisplay = [
      1,
      "...",
      current_page - 1,
      current_page,
      current_page + 1,
      "...",
      last_page,
    ];
  }

  return pagesToDisplay;
};

export default generatePagesToDisplay;
