// BATCH_PROCESS.js

window.BATCH_PROCESS = {
  "tables": {
    "BATCH_PROCESS": {
      "columns": {
        "BATCH_PROCESS_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Global identifier for a batch process. "
        },
        "BATCH_PROCESS_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "External identifier for a batch process. "
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(255)",
          "nullable": true,
          "info": "Description of the batch process. "
        },
        "IS_ENABLED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Specifies if the batch process group is enabled for processing.  If disabled, processing of actions will not occur."
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
        "BATCH_PROCESS_D"
      ]
    }
  }
};
