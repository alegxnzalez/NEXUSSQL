// SHIP_UNIT_SEAL.js

window.SHIP_UNIT_SEAL = {
  "tables": {
    "SHIP_UNIT_SEAL": {
      "columns": {
        "SHIP_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SHIP_UNIT",
          "info": "The GID for the ship unit associated with the order release."
},
        "SHIP_UNIT_SEAL_NUM": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "key_value": true,
          "info": "The ship unit seal number for the order release ship unit."
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