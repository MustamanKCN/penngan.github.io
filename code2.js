// var folder_pic_ID = ('1AVV9dUsl1fQOHJOrXlRoFwCD1rTJZO5d')
var sss1 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('school')
var sss2 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('setting')
var sss3 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('aboutme')
var sheetName3 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Project')
var folder_pic_ID = sss2.getRange('D2').getValue();
var imageID = sss2.getRange('B2').getValue();

function loginform(user, pass) {
  var data = sss1.getDataRange().getDisplayValues().slice(1)
  // var data = sss1.getDataRange().getDisplayValues()
  let rowID = data.find(r => {
    return r[1] == user && r[2] == pass
  })
  return rowID
}


function saveData4(obj) {
  var folder = DriveApp.getFolderById(folder_pic_ID)
  // Logger.log(ss1)

  if (obj.fileadd_pic.length > 1) {
    var fileadd_pic = folder.createFile(obj.fileadd_pic).getId()
    var imgfileadd_pic = "https://lh3.googleusercontent.com/d/" + fileadd_pic
  } else {
    var imgfileadd_pic = ""
  }

  var sheet = sss2

  if (obj.set_pi.length > 0) {
    sheet.getRange('B2').setValue(obj.set_pi);
  }
  else {
    obj.set_pi = ""
  }
  if (obj.set_lo.length > 0) {
    sheet.getRange('C2').setValue(obj.set_lo);
  }
  else {
    obj.set_lo = ""
  }
  if (obj.set_sch.length > 0) {
    sheet.getRange('D2').setValue(obj.set_sch);
  }
  else {
    obj.set_sch = ""
  }
  if (obj.set_dev.length > 0) {
    sheet.getRange('E2').setValue(obj.set_dev);
  }
  else {
    obj.set_dev = ""
  }
  if (obj.set_pss1.length > 0) {
    sheet.getRange('F2').setValue(obj.set_pss1);
  }
  else {
    obj.set_pss1 = ""
  }
  if (obj.set_pss2.length > 0) {
    sheet.getRange('G2').setValue(obj.set_pss2);
  }
  else {
    obj.set_pss2 = ""
  }
  if (imgfileadd_pic.length > 0) {
    sheet.getRange('H2').setValue(imgfileadd_pic);
  }
  else {
    imgfileadd_pic = ""
  }
  if (obj.set_obec.length > 0) {
    sheet.getRange('I2').setValue(obj.set_obec);
  }
  else {
    obj.set_obec = ""
  }
  if (obj.re_2.length > 0) {
    sheet.getRange('J2').setValue(obj.re_2);
  }
  else {
  obj.re_2 = ""
  }

  // if (obj.set_pss6.length > 0) {
  //   sheet.getRange('K2').setValue(obj.set_pss6);
  // }
  // else {
  // obj.set_pss6 = ""
  // }
  // if (obj.set_pssall.length > 0) {
  //   sheet.getRange('L2').setValue(obj.set_pssall);
  // }
  // else {
  // obj.set_pssall = ""
  // }

};

function readDatasetting() {
  var data = sss2.getRange(sss2.getLastRow(), 1, 1, sss2.getLastColumn()).getValues()[0]
  // Logger.log(data)
  return JSON.stringify(data)
}

function readDatasetting2() {
  var data = sss2.getRange(sss2.getLastRow(), 1, 1, sss2.getLastColumn()).getValues()[0]
  // Logger.log(data)
  return JSON.stringify(data)
}

function saveData4_aboutMe(obj) {
  sss3.appendRow([
    obj.ab_1,
    obj.ab_2,
    obj.ab_3,
    obj.ab_4,
    obj.ab_5,
    obj.ab_6,
    "'" + obj.ab_7,
    "'" + obj.ab_8,
    "'" + obj.ab_9,
    obj.ab_10,
    obj.ab_11,
    obj.ab_12,
    obj.ab_13,
    obj.ab_14,
    obj.ab_15,
    obj.ab_16,
    obj.ab_17,
    obj.ab_18,
    obj.ab_19,
  ])
}


function getStudent() {
  return data = sheetName3.getDataRange().getDisplayValues().slice(1)
}
function getcounter() {
  var counter = sss3.getRange("B2").getValue();
  return counter;
}

function getData() {
  return data = sheetName3.getDataRange().getDisplayValues().slice(1)
  // Logger.log(data)
}

function getData2() {
  return data = sss1.getDataRange().getDisplayValues().slice(1)
  // Logger.log(data)
}

function getDatatable_Std1() {
  return ss = sheetName3.getDataRange().getDisplayValues().slice(1)
  // var ss = sheetName3.getDataRange().getDisplayValues().slice(1)
  // Logger.log(ss)

}


function save_adpro(obj) {
  var data = sheetName3.getDataRange().getDisplayValues()
  var folder = DriveApp.getFolderById(imageID)

  if (obj.profile_add.length > 0) {
    var fileUrl3 = folder.createFile(obj.profile_add).getId()
    var imageUrl3 = "https://lh3.googleusercontent.com/d/" + fileUrl3
  } else {
    imageUrl3 = ""
  }

  let rowID = data.findIndex(r => r[1] == obj.adpro_na) + 1
  if (rowID > 0) {
    sheetName3.getRange(rowID, 2).setValue(obj.adpro_na);
    sheetName3.getRange(rowID, 5).setValue(obj.adpro_na2);

    if (obj.profile_add.length > 1) {
      sheetName3.getRange(rowID, 3).setValue(imageUrl3);
    }
  } else {
    sheetName3.appendRow([
      ,
      "'" + obj.adpro_na,
      imageUrl3,
      ,
      "'" + obj.adpro_na2,
    ])
  }
}

function save_register(obj) {
  var data = sss1.getDataRange().getDisplayValues()
  //รูปภาพ
  var folder = DriveApp.getFolderById(imageID)

  if (obj.profile.length > 0) {
    var fileUrl = folder.createFile(obj.profile).getId()
    var imageUrl = "https://lh3.googleusercontent.com/d/" + fileUrl
  } else {
    imageUrl = ""
  }

  let rowID = data.findIndex(r => r[1] == obj.register_na) + 1
  if (rowID > 0) {
    sss1.getRange(rowID, 2).setValue("'" + obj.register_na);
    sss1.getRange(rowID, 3).setValue("'" + obj.register_pas);
    sss1.getRange(rowID, 4).setValue("'" + obj.register_na2);
    sss1.getRange(rowID, 5).setValue("'" + obj.register_mail);
    sss1.getRange(rowID, 7).setValue("'" + obj.register_agree);

    if (obj.profile.length > 1) {
      sss1.getRange(rowID, 6).setValue(imageUrl);
    }
  } else {
    sss1.appendRow([
      ,
      "'" + obj.register_na,
      "'" + obj.register_pas,
      "'" + obj.register_na2,
      "'" + obj.register_mail,
      imageUrl,
      "'" + obj.register_agree,
    ])
  }


  // sss1.appendRow([
  //   "'" + obj.register_na,
  //   "'" + obj.register_pas,
  //   "'" + obj.register_na2,
  //   "'" + obj.register_mail,
  //   imageUrl,
  //   "'" +obj.register_agree,


  // ])
  //   var data = ss4.getRange(ss4.getLastRow(), 1, 1, ss4.getLastColumn()).getValues()[0]
  // // Logger.log(data)
  // return JSON.stringify(data)
}


function readId_check2(id) {
  var data = sss1.getDataRange().getDisplayValues()
  let rowID = data.find(r => {
    return r[1] == id
  })
  // Logger.log(data)
  return rowID
}

function readId_check22(id2) {
  var data = sss1.getDataRange().getDisplayValues()
  let rowID = data.find(r => {
    return r[4] == id2
  })
  // Logger.log(data)
  return rowID
}

function readId_check3(id) {
  var data = sss1.getDataRange().getDisplayValues()
  let rowID = data.find(r => {
    return r[4] == id
  })
  // Logger.log(data)
  return rowID
}


function readId(id) {
  let datasheet = sheetName3.getDataRange().getDisplayValues()
  let idcheck = datasheet.map(r => r[0])
  var index = idcheck.indexOf(id)
  // Logger.log(idcheck)
  if (index != -1) {
    return data = sheetName3.getRange(index + 1, 1, 1, sheetName3.getLastColumn()).getDisplayValues()[0];
  }
}
function readId2(id) {
  let datasheet = sss1.getDataRange().getDisplayValues()
  let idcheck = datasheet.map(r => r[0])
  var index = idcheck.indexOf(id)
  // Logger.log(idcheck)
  if (index != -1) {
    return data = sss1.getRange(index + 1, 1, 1, sss1.getLastColumn()).getDisplayValues()[0];
  }
}

function deleteId(id) {
  var datasheet = sheetName3.getDataRange().getDisplayValues()
  var idcheck = datasheet.map(r => r[0])
  var index = idcheck.indexOf(id)
  Logger.log(index)
  if (index != -1) {
    sheetName3.deleteRow(index + 1);
    return true;
  }
}

function deleteId2(id) {
  var datasheet = sss1.getDataRange().getDisplayValues()
  var idcheck = datasheet.map(r => r[0])
  var index = idcheck.indexOf(id)
  Logger.log(index)
  if (index != -1) {
    sss1.deleteRow(index + 1);
    return true;
  }
}

function saveCounterToGoogleSheet(counter) {
  // var sheet = SpreadsheetApp.openById('YOUR_GOOGLE_SHEET_ID').getActiveSheet();
  sss3.appendRow([counter]);
}

function deleteData4() {
  var sheet = sss3.getRange('A2:A');
  sheet.clear()
}

function readId_pass(id) {
  var data = sss2.getDataRange().getDisplayValues()
  let rowID2 = data.find(r => {
    return r[0] == id
  })
  return rowID2
}
