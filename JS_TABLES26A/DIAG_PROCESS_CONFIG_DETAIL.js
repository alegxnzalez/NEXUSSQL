// DIAG_PROCESS_CONFIG_DETAIL.js

window.DIAG_PROCESS_CONFIG_DETAIL = {
  "tables": {
    "DIAG_PROCESS_CONFIG_DETAIL": {
      "description": "Each Domain will have their own Diagnostic Process Details. this table reprasents that data. We will ship default values for public domain. User will over rides that",
      "columns": {
        "DIAG_PROCESS_CONFIG_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "DIAG_PROCESS_CONFIG",
          "info": "Daignostic Process Configuration GID refrences to Diag_process_config table"
},
        "DIAG_PROCESS_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "DIAG_PROCESS",
          "info": "Daignostic Process GID refrences to Diag_process table"
},
        "IS_ENABLE_DIAGNOSTICS": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Disable the current node diagnostics"
},
        "IS_ENABLE_CHILD_DIAGNOSTICS": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Disable the childern/grand children diagnostics"
},
        "IS_ENABLE_ENTITY_DIAGNOSTICS": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Disable the current nodes entity diagnostics"
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