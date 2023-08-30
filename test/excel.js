import excel from "exceljs"

class Excel
{
    async readDataFromExcel(testID, colHeader)
    {
       const book = new excel.Workbook();
       book.xlsx.readFile("C:/Users/Myself/Desktop/HRM project js/input.xlsx");
       const sheet =book.getWorksheet("Sheet1");
       let rowCount=sheet.rowCount;
       let actTestID="";
       let actColHeader="";
       let testRow=1;
       let testCol=1;
       for(let i=1;i<=rowCount;i++)
       {
        actTestID=sheet.getRow(i).getCell(1).toString();
        if(actTestID==testID)
        {
            break;
        }
        testRow++
       }

       let cellCount=sheet.getRow(testRow-1).cellCount;
       for(let j=1;j<cellCount;j++)
       {
        actColHeader=sheet.getRow(testRow-1);getCell(j).toString();
        if(actColHeader==colHeader)
        {
            break;
        }
        testCol++;
       }

       let data=sheet.getRow(testRow).getCell(testCol).toString();
       return data;
    }
}