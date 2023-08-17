/* eslint-disable no-console */
window.onload = () => {
  let pronoun = ["the", "our"];
  let adj = ["great", "big", "lastof"];
  let noun = ["jogger", "racoon"];
  let extensions = [".com", ".net", ".pt", ".us"];

  function domainGenerator(arr1, arr2, arr3, arr4) {
    let domains = "";
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        for (let k = 0; k < arr3.length; k++) {
          for (let l = 0; l < arr4.length; l++) {
            if (
              arr1[i] == arr1[0] &&
              arr2[j] == arr2[2] &&
              arr3[k] == (arr3[0] || arr3[1]) &&
              arr4[l] == arr4[3]
            ) {
              domains = domains + "\n" + arr1[0] + arr2[2] + arr4[3];
            } else
              domains = domains + "\n" + arr1[i] + arr2[j] + arr3[k] + arr4[l];
          }
        }
      }
    }
    return domains;
  }

  console.log(domainGenerator(pronoun, adj, noun, extensions));
  document.querySelector("#domain").innerHTML = domainGenerator(
    pronoun,
    adj,
    noun,
    extensions
  );
};
