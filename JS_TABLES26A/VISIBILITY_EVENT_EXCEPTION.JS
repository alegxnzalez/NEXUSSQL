// VISIBILITY_EVENT_EXCEPTION.js

window.VISIBILITY_EVENT_EXCEPTION = {
  "tables": {
    "VISIBILITY_EVENT_EXCEPTION": {
      "description": "Exception history for the shipment event data queue",
      "columns": {
        "Q_EXCEPTION_SEQ": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "Sequence for the exception. Sequence name is VISIBILITY_EXCEPTION_SEQUENCE."
},
        "Q_EVENT_SEQ": {
          "type": "NUMBER",
          "nullable": false,
          "info": "Sequence key for the shipment event"
},
        "Q_REASON": {
          "type": "VARCHAR2(500)",
          "nullable": true,
          "info": "Reason for the exception"
},
        "Q_TIME": {
          "type": "DATE",
          "nullable": true,
          "info": "Time of the exception"
},
        "P_QUEUE_START_KEY": {
          "type": "NUMBER(2)",
          "nullable": false,
          "info": "Index for date-based partitioning"
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