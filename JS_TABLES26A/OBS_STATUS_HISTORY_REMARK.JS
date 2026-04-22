// OBS_STATUS_HISTORY_REMARK.js

window.OBS_STATUS_HISTORY_REMARK = {
  "tables": {
    "OBS_STATUS_HISTORY_REMARK": {
      "description": "This table stores the remarks for the order base status events.",
      "columns": {
        "ORDER_BASE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The order for which this remark is associated."
},
        "I_TRANSACTION_NO": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "The transaction number (along with ORDER_BASE_GID, creates relationship to parent table OBS_STATUS_HISTORY)"
},
        "REMARK_SEQUENCE": {
          "type": "NUMBER(2)",
          "nullable": false,
          "key_value": true,
          "info": "A one-up number to make the key unique."
},
        "REMARK_TEXT": {
          "type": "VARCHAR2(4000)",
          "nullable": false,
          "info": "The remark text itself."
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
      "fk_tables": []
    }
  }
};