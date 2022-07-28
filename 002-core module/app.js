const fs = require('fs'); // core module
const readline = require('readline'); // readline

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Masukkan nama anda : ', (nama) => {
    rl.question('Masukkan No.Hp : ', (noHP) => {
        const contact = {nama, noHP};
        const file = fs.readFileSync('data/contacts.json', 'utf-8');
        
        const contacts = JSON.parse(file);
        contacts.push(contact);
        fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));

        console.log(`\nTerimakasih kepada ${nama} sudah mengisi data...`);
        rl.close();
    });
});