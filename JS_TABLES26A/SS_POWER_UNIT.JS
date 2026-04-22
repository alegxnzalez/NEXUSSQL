// SS_POWER_UNIT.js

window.SS_POWER_UNIT = {
  "tables": {
    "SS_POWER_UNIT": {
      "columns": {
        "POWER_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "POWER_UNIT",
          "info": "The power unit GID for the tracking event."
},
        "I_TRANSACTION_NO": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "Transaction identifier linked to the power unit."
},
        "PARTITION_KEY": {
          "type": "NUMBER",
          "nullable": false,
          "info": "The monthly range partition to manage purging status messages."
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