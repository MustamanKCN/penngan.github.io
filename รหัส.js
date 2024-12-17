let githubUser = 'MustamanKCN'
let repo = 'penngan.github.io'
var sss3 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('aboutme')
var ss1 = SpreadsheetApp.getActive().getSheetByName('setting');
var ss2 = SpreadsheetApp.getActive().getSheetByName('menu');
var ss3 = SpreadsheetApp.getActive().getSheetByName('data');
var id_folder = ss1.getRange('B2').getValue();
var id_pdf = ss1.getRange('C2').getValue();
var id_pic = ss1.getRange('D2').getValue();
var id_slide = ss1.getRange('E2').getValue();
var id_token = ss1.getRange('I2').getValue();

// var id_folder = "1Y5wI_fa_cCnTFEt_SFrbRP0p2rD9WrzJ"
// var icon = SpreadsheetApp.getActive().getSheetByName('setting').getRange('H2').getValue(); //icon Favicon
// Logger.log(icon)


function doGet() {
  var counter = getCounter();
  // var admin1 = getadmin1();
  return HtmlService.createTemplateFromFile('index')
    .evaluate()
    .setTitle('ระบบงานสารสนเทศโรงเรียน')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .setSandboxMode(HtmlService.SandboxMode.IFRAME)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

function getCounter() {
  var counter = sss3.getRange("B2").getValue();
  return counter;
}

function getadmin1() {
  var admin1 = ss1.getRange("J2").getValue();
  return admin1;
}


// function doGet() {
//   var template = HtmlService.createTemplateFromFile('index');
//   template.data = getSheetData();
//   var output = template.evaluate()
//     .addMetaTag('viewport', 'width=device-width, initial-scale=1')
//     .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
//     .setTitle('ระบบแฟ้มผลงานออนไลน์ครูผู้สอน')
//   // .setFaviconUrl(icon)
//   return output;
// }

function include(file) { return HtmlService.createHtmlOutputFromFile(file).getContent() }

function getSheetData() {
  return ss = ss2.getDataRange().getDisplayValues().slice(1);
}

/** @บันทึกข้อมูล */
function saveData(obj) {

  /**วันลาไทย1 เครดิตครูนิดเดียว*/
  var date = obj.datepicker.split("-")
  var dateThai = Number(date[0]); //วัน
  var mounthText = ["", "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"]; //อาเรย์ชุดเดือน 
  var mounthThai = mounthText[Number(date[1])]; // หาค่าเดือนเป็นไทย
  var yearThai = Number(date[2]) // ปี
  var dayThai = dateThai + ' ' + mounthThai + ' พ.ศ. ' + yearThai

  var folder = DriveApp.getFolderById(id_folder); //แก้เป็นไอดีโฟลเดอร์เก็บไฟล์ของเรา
  var file = ''
  var rowData = [
    "",
    "",
    dayThai,
    obj.input2,
    obj.input3,
    obj.input4,
    obj.input5,

  ];
  if (obj.imagedata) {
    Object.keys(obj.imagedata).sort().forEach(key => {
      Logger.log(key)
      let image = obj.imagedata[key]
      let datafile = Utilities.base64Decode(image.data)
      let blob = Utilities.newBlob(datafile, image.type, image.name);
      file = folder.createFile(blob).getUrl()
      rowData.push(file)
    })
  }
  ss3.appendRow(rowData);
  setFormula()
}

function setFormula() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('data')
  var lastRow = sheet.getLastRow();
  //col 1
  var rangeToCopy = sheet.getRange(lastRow - 1, 2);
  rangeToCopy.copyTo(sheet.getRange(lastRow, 2));

}

/** ***************** Get URL *********************** **/
function getURL() {
  return ScriptApp.getService().getUrl();
}

