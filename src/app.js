/* eslint-disable no-console */
window.onload = () => {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let extensions = [".com", ".net", ".pt"];

  function domainGenerator(arr1, arr2, arr3, arr4) {
    let domains = "";
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        for (let k = 0; k < arr3.length; k++) {
          for (let l = 0; l < arr4.length; l++) {
            domains = domains + "\n" + arr1[i] + arr2[j] + arr3[k] + arr4[l];
          }
        }
      }
    }
    return domains;
  }

  console.log(domainGenerator(pronoun, adj, noun, extensions));
};
