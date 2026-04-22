// EXTERNAL_ENGINE_PARAM.js

window.EXTERNAL_ENGINE_PARAM = {
  "tables": {
    "EXTERNAL_ENGINE_PARAM": {
      "columns": {
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false
},
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false
},
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true
},
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true
},
        "PARAMETER_NAME": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "external engine parameter name"
},
        "EXTERNAL_ENGINE_TYPE": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "type of external engine."
},
        "OBJECT_TYPE": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "object type. example EDE"
},
        "DATA_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "S",
                    "B",
                    "I",
                    "N",
                    "D",
                    "G",
                    "U",
                    "C",
                    "P"
          ],
          "info": "S- String, B - Boolean, I - Integer, N - Number, D- Date, G - PickList, U - UOM, C - Currency, P - Percentage"
},
        "TRANSLATION_GID": {
          "type": "VARCHAR2(2000)",
          "nullable": false,
          "foreign_key": "TRANSLATION",
          "info": "Translation gid to represent the value to the user such as in a picklist."
},
        "DESCRIPTION": {
          "type": "VARCHAR2(256)",
          "nullable": true,
          "info": "description about the parameter"
},
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE"
}
      },
      "fk_tables": [
        "EXTERNAL_ENGINE_PARAM_VALUE"
]
    }
  }
};