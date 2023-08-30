import excel from "exceljs"


class ExcelUtility
{
     async readDataFromExcel(testID,columnHeader)
     {
      const  book =new excel.Workbook();
        await book.xlsx.readFile("C:/Users/Myself/Desktop/HRM project js/input.xlsx");
        const sheet = book.getWorksheet("Sheet1");
        let lastRow= sheet.rowCount
        let actTestID="";
        let actColHeader="";
        let testRowNum=1;
        for(let i=1;i<=lastRow;i++)
        {
            actTestID= sheet.getRow(i).getCell(1).toString();
            //console.log(actTestID)
            if(actTestID==testID)
            {
                console.log(actTestID)
                break;
            }
            testRowNum++;
        }
        let testColNum=1;
        let cellCount= sheet.getRow(testRowNum-1).cellCount;
        for(let j=1;j<cellCount;j++)
        {
            actColHeader= sheet.getRow(testRowNum-1).getCell(j).toString();
            if(actColHeader==columnHeader)
            {
                //console.log(actColHeader);
                break;
            }
            testColNum++;
        }
        let data = sheet.getRow(testRowNum).getCell(testColNum).toString();
        return data;
    }

     
}

export default new ExcelUtility();