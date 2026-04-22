// SS_S_SHIP_UNIT_LINE.js

window.SS_S_SHIP_UNIT_LINE = {
  "tables": {
    "SS_S_SHIP_UNIT_LINE": {
      "columns": {
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
},
        "I_TRANSACTION_NO": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "The transaction identifier for the shipment ship unit line data of the tracking event."
},
        "S_SHIP_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "S_SHIP_UNIT_LINE",
          "info": "The shipment ship unit GID for the tracking event."
},
        "S_SHIP_UNIT_LINE_NO": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "foreign_key": "S_SHIP_UNIT_LINE",
          "info": "The shipment ship unit line number for the tracking event."
},
        "PARTITION_KEY": {
          "type": "NUMBER",
          "nullable": false,
          "info": "The monthly range partition to manage purging status messages."
}
      },
      "fk_tables": []
    }
  }
};