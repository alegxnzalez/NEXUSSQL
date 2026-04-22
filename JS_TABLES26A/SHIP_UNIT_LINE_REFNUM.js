// SHIP_UNIT_LINE_REFNUM.js

window.SHIP_UNIT_LINE_REFNUM = {
  "tables": {
    "SHIP_UNIT_LINE_REFNUM": {
      "columns": {
        "SHIP_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SHIP_UNIT_LINE",
          "info": "The GID for the ship unit associated with the order release."
},
        "SHIP_UNIT_LINE_NO": {
          "type": "NUMBER(4)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SHIP_UNIT_LINE",
          "info": "The ship unit line number inside the ship unit associated to the order release."
},
        "SHIP_UNIT_REFNUM_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SHIP_UNIT_LINE_REFNUM_QUAL",
          "info": "The reference number qualifier GID defining the reference code."
},
        "SHIP_UNIT_REFNUM_VALUE": {
          "type": "VARCHAR2(240)",
          "nullable": false,
          "key_value": true,
          "info": "The text associated to the reference code."
},
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Database domain where this data is stored."
},
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "The user ID of the data insert user."
},
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date and time of data insert."
},
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The user ID of the data update user."
},
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date and time of the most recent data update."
}
      },
      "fk_tables": []
    }
  }
};