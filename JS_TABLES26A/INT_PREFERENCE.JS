// INT_PREFERENCE.js

window.INT_PREFERENCE = {
  "tables": {
    "INT_PREFERENCE": {
      "columns": {
        "INT_PREFERENCE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "INT_PREFERENCE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "USE_GLOBAL_PROPERTIES": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ]
},
        "DESCRIPTION": {
          "type": "VARCHAR2(500)",
          "nullable": true
},
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
}
      },
      "fk_tables": [
        "EXTERNAL_SYSTEM",
        "INT_PREFERENCE_D",
        "INT_PREFERENCE_PRECISION",
        "OUT_XML_PROFILE"
]
    }
  }
};