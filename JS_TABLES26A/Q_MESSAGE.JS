// Q_MESSAGE.js

window.Q_MESSAGE = {
  "tables": {
    "Q_MESSAGE": {
      "columns": {
        "Q_EVENT_SEQ": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true
},
        "Q_PREEMPTION_PRIORITY": {
          "type": "NUMBER(9)",
          "nullable": true
},
        "Q_START": {
          "type": "DATE",
          "nullable": false
},
        "Q_STATE": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "values": [
                    "QUEUED",
                    "ACTIVE",
                    "CANCELED",
                    "PROCESSED",
                    "FAILED"
          ]
},
        "Q_TIME": {
          "type": "NUMBER",
          "nullable": true
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
        "Q_APP_SERVER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "APP_SERVER"
},
        "Q_RELATED_QUEUE_SEQ": {
          "type": "NUMBER(10)",
          "nullable": true
},
        "P_QUEUE_START_KEY": {
          "type": "NUMBER(2)",
          "nullable": false
},
        "I_MESSAGE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "IS_INBOUND": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ]
},
        "OUTBOUND_TYPE": {
          "type": "VARCHAR2(10)",
          "nullable": true,
          "values": [
                    "BUILD",
                    "TRANSPORT"
          ]
},
        "CONTACT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "COM_METHOD_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "TOPIC_DESCRIPTION": {
          "type": "VARCHAR2(500)",
          "nullable": true
},
        "TOPIC_CLASS_NAME": {
          "type": "VARCHAR2(255)",
          "nullable": true
},
        "TOPIC_PARAMETERS": {
          "type": "VARCHAR2(1000)",
          "nullable": true
},
        "Q_RELATED_QUEUE_NAME": {
          "type": "VARCHAR2(30)",
          "nullable": true
},
        "Q_QUEUE_NAME": {
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