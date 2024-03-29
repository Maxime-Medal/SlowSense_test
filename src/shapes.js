const shapes = [
  {
    "Id": "2A3DCA88-9311-4D1B-B0D3-032F7862BD58",
    "FormType": "Circle",
    "PositionX": 190,
    "PositionY": 210,
    "Width": 80,
    "Text": "Mon œil oui !",
    "Order": 5
  },
  {
    "Id": "637DDE95-3EB7-42CF-9641-13E44DDFB2A7",
    "FormType": "Text",
    "PositionX": 600,
    "PositionY": 670,
    "Text": "TROP FORT !",
    "Order": 19
  },
  {
    "Id": "A6C4D5C7-0DCB-4729-B592-15AEF12DD714",
    "FormType": "Circle",
    "PositionX": 220,
    "PositionY": 240,
    "Width": 40,
    "Text": "",
    "Order": 6
  },
  {
    "Id": "A234D5C7-0DCB-4729-B592-15AEF12DDD65",
    "FormType": "Ellipse",
    "PositionX": 180,
    "PositionY": 400,
    "Width": 70,
    "Text": "&@*!",
    "Order": 51
  },
  {
    "Id": "D40B80B0-3DF3-48C5-A73D-33DF1BC42698",
    "FormType": "Rectangle",
    "PositionX": 550,
    "PositionY": 50,
    "Width": 50,
    "Height": 700,
    "Text": "",
    "Order": 17
  },
  {
    "Id": "26BF8057-9084-418D-890C-36F680971931",
    "FormType": "Rectangle",
    "PositionX": 550,
    "PositionY": 0,
    "Width": 50,
    "Height": 50,
    "Text": "",
    "Order": 11
  },
  {
    "Id": "DB33DD57-F383-4E53-ADD0-37F4C7EB310F",
    "FormType": "Rectangle",
    "PositionX": 550,
    "PositionY": 750,
    "Width": 50,
    "Height": 50,
    "Text": "",
    "Order": 13
  },
  {
    "Id": "58502C24-A889-479A-9673-43CC61A16762",
    "FormType": "Rectangle",
    "PositionX": 0,
    "PositionY": 750,
    "Width": 50,
    "Height": 50,
    "Text": "",
    "Order": 12
  },
  {
    "Id": "7C471314-4F70-4916-9564-4C3597D5CFD5",
    "FormType": "Circle",
    "PositionX": 100,
    "PositionY": 100,
    "Width": 400,
    "Text": "",
    "Order": 3
  },
  {
    "Id": "B9C78EDE-3390-4E17-8A7A-4CEAF5DC0CFE",
    "FormType": "Circle",
    "PositionX": 330,
    "PositionY": 210,
    "Width": 80,
    "Text": "Mon œil oui !",
    "Order": 4
  },
  {
    "Id": "E4F3A96A-45DD-4152-A493-5E19E54BF82E",
    "FormType": "Rectangle",
    "PositionX": 0,
    "PositionY": 50,
    "Width": 50,
    "Height": 700,
    "Text": "",
    "Order": 16
  },
  {
    "Id": "6BCB33F5-9390-4AEB-BE92-602698F4A05E",
    "FormType": "Circle",
    "PositionX": 340,
    "PositionY": 240,
    "Width": 40,
    "Text": "",
    "Order": 7
  },
  {
    "Id": "C3D73904-2FA0-4CD1-9A31-6CE6D863E1BD",
    "FormType": "Rectangle",
    "PositionX": 50,
    "PositionY": 750,
    "Width": 500,
    "Height": 50,
    "Text": "",
    "Order": 15
  },
  {
    "Id": "9ADC2566-0662-4026-B10F-76F8A726ED52",
    "FormType": "Rectangle",
    "PositionX": 0,
    "PositionY": 0,
    "Width": 600,
    "Height": 800,
    "Text": "Tu touches le fonds…",
    "Order": 1
  },
  {
    "Id": "CF3B7075-EBE3-424C-BB0D-BDBCAF196551",
    "FormType": "Cube",
    "PositionX": 200,
    "PositionY": 40,
    "Width": 85,
    "Text": "",
    "Order": 100
  },
  {
    "Id": "C5D7672E-BAE6-499C-B677-B03F160070A7",
    "FormType": "Rectangle",
    "PositionX": 175,
    "PositionY": 380,
    "Width": 250,
    "Height": 20,
    "Text": ";-)",
    "Order": 9
  },
  {
    "Id": "80F9E38B-C7F8-4D22-9BE5-B939380B0B94",
    "FormType": "Circle",
    "PositionX": -500,
    "PositionY": 400,
    "Width": 1600,
    "Text": "",
    "Order": 2
  },
  {
    "Id": "BACFE436-56F3-4E56-834F-BACFDC00D17F",
    "FormType": "Rectangle",
    "PositionX": 50,
    "PositionY": 0,
    "Width": 500,
    "Height": 50,
    "Text": "Un rectangle",
    "Order": 14
  },
  {
    "Id": "D64B7075-EBE3-424C-BB0D-BDBCAF196EDD",
    "FormType": "Circle",
    "PositionX": 270,
    "PositionY": 270,
    "Width": 60,
    "Text": "Je le sens bien.",
    "Order": 8
  },
  {
    "Id": "B42B7075-EBE3-424C-BB0D-BDBCAF196E45",
    "FormType": "Sphere",
    "PositionX": 270,
    "PositionY": 270,
    "Width": 60,
    "Text": "",
    "Order": 1258
  },
  {
    "Id": "2C76DE8A-6E65-48FA-BB48-CEC7FD45DD4F",
    "FormType": "Rectangle",
    "PositionX": 0,
    "PositionY": 0,
    "Width": 50,
    "Height": 50,
    "Text": "Un carré",
    "Order": 10
  },
  {
    "Id": "E87F093A-622F-4C14-9CA0-E13D54C6C3FC",
    "FormType": "Text",
    "PositionX": 300,
    "PositionY": 600,
    "Text": "Je suis",
    "Order": 18
  },
]

export default shapes;