// LOG_PROFILE.js

window.LOG_PROFILE = {
  "tables": {
    "LOG_PROFILE": {
      "description": "The log profile for per-process logging.",
      "columns": {
        "LOG_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Log Profile ID"
},
        "LOG_PROFILE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "IS_RESERVED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "If Y, users cannot modify the log profile. These are staged for standard system diagnostics."
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
},
        "INCLUDE_METRICS": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "If Y, metrics are tracked for any process using this log profile. An associated CSV file is written out at the end of the process, holding all metric accumulations caused by the process."
}
      },
      "fk_tables": [
        "ACTION",
        "DATA_QUERY_TYPE",
        "LOGFILE_ACTION",
        "LOGFILE_PROFILE",
        "LOG_PROFILE_COMPONENT",
        "LOG_PROFILE_DETAIL",
        "PROCESS_CONTROL_REQUEST",
        "TOPIC_ALIAS"
]
    }
  }
};