// Q_LIFETIME_EVENT_EXCEPTION.js

window.Q_LIFETIME_EVENT_EXCEPTION = {
  "tables": {
    "Q_LIFETIME_EVENT_EXCEPTION": {
      "columns": {
        "Q_EXCEPTION_SEQ": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": ".Sequence for the exception. The sequence name is Q_LIFETIME_EXCEPTION_SEQUENCE. "
        },
        "Q_EVENT_SEQ": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "Sequence key for the event "
        },
        "Q_REASON": {
          "type": "VARCHAR2(500)",
          "nullable": true,
          "info": "Reason for the exception "
        },
        "Q_TIME": {
          "type": "DATE",
          "nullable": false,
          "info": "Time of the exception "
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
