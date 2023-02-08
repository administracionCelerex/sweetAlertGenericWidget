declare const ZOHO: any;
declare const Swal: any;
//
interface SweetAlertElements {
  title: string;
  text: string;
  icon: string;
  confirmButtonText: string;
}

interface replaceChain {
  normal: string;
  weird: string;
}

const showAlert = ({
  title,
  text,
  icon,
  confirmButtonText,
}: SweetAlertElements) => {
  const newText = replaceWeirdCharacterwithLetters(text);
  Swal.fire({
    title,
    text: newText,
    icon,
    showConfirmButton: false,
    padding: "0",
    /*  confirmButtonText: confirmButtonText ? confirmButtonText : "OK", */
  });
};

ZOHO.CREATOR.init().then(function (data: any) {
  //Code goes here

  const queryParams: SweetAlertElements = ZOHO.CREATOR.UTIL.getQueryParams();

  console.log(queryParams);
  showAlert(queryParams);
});

const replaceWeirdCharacterwithLetters = (text: string): string => {
  const replaceString = "ACC01";
  const SPACE = "SPA01";
  const charatersToReplace: replaceChain[] = [
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
