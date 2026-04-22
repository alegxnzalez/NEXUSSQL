// DRS_REQUEST.js

window.DRS_REQUEST = {
  "tables": {
    "DRS_REQUEST": {
      "columns": {
        "REQUEST_ID": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "A unique request ID from the data replication service sequence drs_request_sequence."
},
        "TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "info": "Values include 'A' for 'asynchronous' and 'S' for 'synchronous."
},
        "EXT_REF_ID": {
          "type": "VARCHAR2(100)",
          "nullable": true,
          "info": "An external reference for correlation purposes."
},
        "STATE": {
          "type": "VARCHAR2(20)",
          "nullable": false,
          "values": [
                    "NEW",
                    "PROCESSING",
                    "SUCCEEDED",
                    "FAILED",
                    "CANCEL_REQUESTED",
                    "CANCELLED",
                    "INTERRUPTED"
          ],
          "info": "The current status of the request."
},
        "MEDIA_TYPE": {
          "type": "VARCHAR2(100)",
          "nullable": false,
          "info": "text/plain is the media type corresponding to CSV data."
},
        "SUBMIT_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "The date/time the request was received."
},
        "START_TIME": {
          "type": "DATE",
          "nullable": true,
          "info": "The date/time the valid request items were scheduled."
},
        "END_TIME": {
          "type": "DATE",
          "nullable": true,
          "info": "The date/time all items completed."
},
        "APP_MACHINE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "APP_MACHINE",
          "info": "APP_MACHINE_GID is used to store the application server running the data replication service."
},
        "LRT_SEQ": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Long running task number"
},
        "PARTITION_KEY": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The partition key for the purge process."
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