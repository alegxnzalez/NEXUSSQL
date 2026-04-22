// ORS_STATUS_HISTORY_SUL.js

window.ORS_STATUS_HISTORY_SUL = {
  "tables": {
    "ORS_STATUS_HISTORY_SUL": {
      "columns": {
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Database domain where this data is stored. "
        },
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "The user ID of the data insert user. "
        },
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date and time of data insert. "
        },
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The user ID of the data update user. "
        },
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date and time of the most recent data update. "
        },
        "SHIP_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The order release ship unit identifier for the ship unit line associated with the tracking event. "
        },
        "SHIP_UNIT_LINE_NO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "The order release ship unit line identifier associated with the tracking event. "
        },
        "I_TRANSACTION_NO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "The transaction identifier linked to the order ship unit line."
        }
      },
      "fk_tables": []
    }
  }
};
