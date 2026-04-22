// NOTIFY_EXCEPTION.js

window.NOTIFY_EXCEPTION = {
  "tables": {
    "NOTIFY_EXCEPTION": {
      "columns": {
        "Q_EVENT_SEQ": {
          "type": "NUMBER",
          "nullable": false
},
        "Q_EXCEPTION_SEQ": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true
},
        "Q_REASON": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Exception reason such as error message"
},
        "Q_TIME": {
          "type": "DATE",
          "nullable": false,
          "info": "Time exception happened"
},
        "P_QUEUE_START_KEY": {
          "type": "NUMBER",
          "nullable": false
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