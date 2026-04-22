// Q_MESSAGE_EXCEPTION.js

window.Q_MESSAGE_EXCEPTION = {
  "tables": {
    "Q_MESSAGE_EXCEPTION": {
      "columns": {
        "Q_EXCEPTION_SEQ": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true
},
        "Q_EVENT_SEQ": {
          "type": "NUMBER",
          "nullable": false
},
        "Q_REASON": {
          "type": "VARCHAR2(500)",
          "nullable": false
},
        "Q_TIME": {
          "type": "DATE",
          "nullable": false
},
        "P_QUEUE_START_KEY": {
          "type": "NUMBER(2)",
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