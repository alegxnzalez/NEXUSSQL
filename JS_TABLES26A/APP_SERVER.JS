// APP_SERVER.js

window.APP_SERVER = {
  "tables": {
    "APP_SERVER": {
      "columns": {
        "APP_SERVER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "APP_SERVER_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "IS_FAILOVER": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ]
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
      "fk_tables": [
        "APP_MACHINE_FAILOVER",
        "APP_SERVER_DATA_QUEUE_DEF",
        "APP_SERVER_DOMAIN",
        "APP_SERVER_FUNCTION",
        "APP_SERVER_MACHINE",
        "APP_SERVER_QUEUE",
        "I_TRANSMISSION",
        "NOTIFY_REQUEST",
        "PROCESS_CONTROL_HISTORY",
        "PROCESS_CONTROL_REQUEST",
        "Q_INTEGRATION_IN",
        "Q_INTEGRATION_OUT",
        "Q_LIFETIME_EVENT",
        "Q_MESSAGE",
        "VISIBILITY_EVENT"
]
    }
  }
};