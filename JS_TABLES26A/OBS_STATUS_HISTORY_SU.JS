// OBS_STATUS_HISTORY_SU.js

window.OBS_STATUS_HISTORY_SU = {
  "tables": {
    "OBS_STATUS_HISTORY_SU": {
      "description": "Ship unit related to an order base event.",
      "columns": {
        "ORDER_BASE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The order base identifier for the ship unit that is  associated with the tracking event."
},
        "I_TRANSACTION_NO": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "The transaction identifier linked to the order base ship unit."
},
        "OB_SHIP_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "OB_SHIP_UNIT",
          "info": "The order base ship unit that is associated with the tracking event."
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