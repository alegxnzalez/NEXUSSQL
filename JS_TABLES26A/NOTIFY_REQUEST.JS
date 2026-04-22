// NOTIFY_REQUEST.js

window.NOTIFY_REQUEST = {
  "tables": {
    "NOTIFY_REQUEST": {
      "description": "GC3 notification requests and history.",
      "columns": {
        "Q_EVENT_SEQ": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "Notify request id; the column name follows naming convention of GC3 Data Queue."
},
        "NOTIFY_SUBJECT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "NOTIFY_SUBJECT",
          "info": "GC3 notify subject"
},
        "DATA_QUERY_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "DATA_QUERY_TYPE",
          "info": "GC3 Data Query Typq"
},
        "OBJECT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "info": "GC3 business object"
},
        "NOTIFY_CONTEXT": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Contains information to send a message"
},
        "COM_METHOD_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "COM_METHOD",
          "info": "Communication method"
},
        "COM_ADDRESS": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "Communication address"
},
        "STYLESHEET_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "STYLESHEET_PROFILE"
},
        "CONTACT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CONTACT"
},
        "RETRY_COUNT": {
          "type": "NUMBER(2)",
          "nullable": true,
          "info": "Number of retry attempt"
},
        "DELIVERY_WINDOW_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "DELIVERY_WINDOW_PROFILE"
},
        "CONSOLIDATION_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "CONSOLIDATION_PROFILE"
},
        "ADHOC_BATCH_ID": {
          "type": "NUMBER",
          "nullable": true
},
        "Q_STATE": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "values": [
                    "QUEUED",
                    "ACTIVE",
                    "CANCELED",
                    "PROCESSED",
                    "FAILED",
                    "PENDING"
          ]
},
        "Q_START": {
          "type": "DATE",
          "nullable": false
},
        "Q_TIME": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Date the request become part of the queue"
},
        "Q_TIME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "Q_TIME_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "Q_PROCESS_START": {
          "type": "DATE",
          "nullable": true
},
        "Q_PROCESS_TIME": {
          "type": "NUMBER",
          "nullable": true
},
        "Q_PROCESS_TIME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "Q_PROCESS_TIME_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "Q_LOG_PROCESS_ID": {
          "type": "NUMBER",
          "nullable": true
},
        "Q_PROCESS_MACHINE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "APP_MACHINE"
},
        "Q_RELATED_QUEUE_SEQ": {
          "type": "NUMBER",
          "nullable": true
},
        "P_QUEUE_START_KEY": {
          "type": "NUMBER",
          "nullable": false
},
        "Q_PREEMPTION_PRIORITY": {
          "type": "NUMBER",
          "nullable": true
},
        "Q_APP_SERVER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "APP_SERVER"
},
        "Q_RELATED_QUEUE_NAME": {
          "type": "VARCHAR2(30)",
          "nullable": true
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