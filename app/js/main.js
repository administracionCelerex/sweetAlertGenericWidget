ZOHO.CREATOR.init().then(function (data) {
  //Code goes here

  const queryParams = ZOHO.CREATOR.UTIL.getQueryParams();

  console.log(queryParams);
  showAlert(queryParams);
});

const replaceWeirdCharacterwithLetters = (text) => {
  replaceString = "ACC01";
  const SPACE = "SPA01";
  charatersToReplace = [
    { normal: "á", weird: "a" + replaceString },
    { normal: "é", weird: "e" + replaceString },
    { normal: "í", weird: "i" + replaceString },
    { normal: "ó", weird: "o" + replaceString },
    { normal: "ú", weird: "u" + replaceString },
    { normal: "ñ", weird: "n" + replaceString },
    //Mayus
    { normal: "Á", weird: "A" + replaceString },
    { normal: "É", weird: "E" + replaceString },
    { normal: "Í", weird: "I" + replaceString },
    { normal: "Ó", weird: "O" + replaceString },
    { normal: "Ú", weird: "U" + replaceString },
    { normal: "Ñ", weird: "N" + replaceString },
    //Others
    { normal: " ", weird: SPACE },
  ];

  for (let index = 0; index < charatersToReplace.length; index++) {
    const chareWeirdObj = charatersToReplace[index];
    const { weird, normal } = chareWeirdObj;
    text = text.replaceAll(weird, normal);
  }

  return text;
};

const showAlert = ({ title, text, icon, confirmButtonText }) => {
  newText = replaceWeirdCharacterwithLetters(text);
  Swal.fire({
    title,
    text: newText,
    icon,
    showConfirmButton: false
   /*  confirmButtonText: confirmButtonText ? confirmButtonText : "OK", */
  });
};
