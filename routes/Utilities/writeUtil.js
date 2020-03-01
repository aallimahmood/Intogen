const createCsvWriter = require('csv-writer').createObjectCsvWriter;

/*
* Fucntion to create jsons for data writing
* pram: list of data
* para2: callback functions ( not sure)
*/
function writeData(dataList,callback)
{
    /*
* Writing csv file back so we can read it in a json format according to us
*/
    const csvWriter = createCsvWriter({
    path: './routes/results/out.csv',
    header: [
    {id: 'Activist', title: 'Activist'},
    {id: 'Reflector', title: 'Reflector'},
    {id: 'Theorist', title: 'Theorist'},
    {id: 'Pragmatist', title: 'Pragmatist'},
    {id: 'Major', title: 'Major'},
    {id: 'Study_program', title: 'Study_program'},
    {id: 'Subject1', title: 'Subject1'},
    {id: 'Gpa1', title: 'Gpa1'},
    {id: 'Subject2', title: 'Subject2'},
    {id: 'Gpa2', title: 'Gpa2'},
    {id: 'Gender', title: 'Gender'},
    {id: 'Nationality', title: 'Nationality'},
    {id: 'E_mail', title: 'E_mail'}
      ]
});
	csvWriter.writeRecords(dataList).then(()=> callback() );
}

/*
* Exporting modules
*/
module.exports.writeData = writeData;
