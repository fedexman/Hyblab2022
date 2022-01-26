console.log('ejs', ejs);
const people = ['geddy', 'neil', 'alex'];
const html = ejs.render('<%= people.join(", "); %>', { people: people });
console.log(html);