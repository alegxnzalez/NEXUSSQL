// OMR_D.js

window.OMR_D = {
  "tables": {
    "OMR_D": {
      "columns": {
        "OMR_D_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "OMR_D_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "OMR_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "OMR"
},
        "SHIP_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SHIP_UNIT"
},
        "OB_LINE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OB_LINE"
},
        "OB_SHIP_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OB_SHIP_UNIT"
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
        "OMR_D_LINE"
]
    }
  }
};