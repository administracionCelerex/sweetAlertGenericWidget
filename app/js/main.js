ZOHO.CREATOR.init().then(function (data) {
  //Code goes here

  const queryParams = ZOHO.CREATOR.UTIL.getQueryParams();

  console.log(queryParams);
  showAlert(queryParams);
});

const showAlert = ({ title, text, icon, confirmButtonText }) => {
  Swal.fire({
    title,
    text,
    icon,
    confirmButtonText: confirmButtonText ? confirmButtonText : "OK",
  });
};
