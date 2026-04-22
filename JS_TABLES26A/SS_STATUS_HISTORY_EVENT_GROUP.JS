// SS_STATUS_HISTORY_EVENT_GROUP.js

window.SS_STATUS_HISTORY_EVENT_GROUP = {
  "tables": {
    "SS_STATUS_HISTORY_EVENT_GROUP": {
      "columns": {
        "SHIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SS_STATUS_HISTORY"
},
        "I_TRANSACTION_NO": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SS_STATUS_HISTORY"
},
        "EVENT_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "BS_EVENT_GROUP"
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