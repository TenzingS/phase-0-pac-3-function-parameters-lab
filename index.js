const name = "Josh";
function introduction(name) {
    return(`Hi, my name is ${name}.`);
}
introduction;

const language = "Ember.js";
function introductionWithLanguage(name, language) {
    return(`Hi, my name is ${name} and I am learning to program in ${language}.`);
}
introductionWithLanguage;


function introductionWithLanguageOptional(name, language = 'JavaScript') {
    return(`Hi, my name is ${name} and I am learning to program in ${language}.`);
}
console.log(introductionWithLanguageOptional('Gracie'));
