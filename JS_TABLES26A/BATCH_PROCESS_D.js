// BATCH_PROCESS_D.js

window.BATCH_PROCESS_D = {
  "tables": {
    "BATCH_PROCESS_D": {
      "description": "Specifies the processes that are to be run in a batch process group.",
      "columns": {
        "BATCH_PROCESS_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "BATCH_PROCESS",
          "info": "Specifies the unique identifier for the batch process."
},
        "SEQUENCE_NO": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "Sequence number associated with the batch process."
},
        "TOPIC_ALIAS_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "TOPIC_ALIAS",
          "info": "Specifies the unique identifier for the topic alias.  A topic alias is a reference name for a workflow that can be initiated via a process control request."
},
        "TOPIC_PARAMETERS": {
          "type": "VARCHAR2(1000)",
          "nullable": true,
          "info": "Specifies the parameters that wil be used for the process control request."
},
        "IS_ENABLED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Specifies if the topic is enabled for processing.  Those topics that are disabled will be skipped when running the batch process."
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