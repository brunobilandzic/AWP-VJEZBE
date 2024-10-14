function split_strings(strarr, splitc) {
    return strarr.map((str) => str.split(splitc));
}

console.log(split_strings(['cvassaovdsv saovsdavovasd vsadv', 'vdsva ovdsavodsvavasvosadvsadvosadvs avdsaodvsa','cvdsavdsabvdsadvo vdsavsadvasdodvsavdsavod savdsavds avodsavdsavoasdvsadov vdsav sadovasd vdaso'], 'o')) 