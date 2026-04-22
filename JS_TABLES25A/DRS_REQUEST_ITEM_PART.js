// DRS_REQUEST_ITEM_PART.js

window.DRS_REQUEST_ITEM_PART = {
  "tables": {
    "DRS_REQUEST_ITEM_PART": {
      "columns": {
        "ITEM_NO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "The parent item number. "
        },
        "ITEM_PART_NO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true
        },
        "PART_NAME": {
          "type": "VARCHAR2(200)",
          "nullable": true
        },
        "CHECKSUM": {
          "type": "VARCHAR2(32)",
          "nullable": true,
          "info": "The MD5 checksum of the part. "
        },
        "RECORD_COUNT": {
          "type": "NUMBER()",
          "nullable": true
        },
        "STATE": {
          "type": "VARCHAR2(20)",
          "nullable": true,
          "values": [
            "NEW",
            "PROCESSING",
            "SUCCEEDED",
            "FAILED",
            "CANCEL_REQUESTED",
            "CANCELLED",
            "INTERRUPTED"
          ],
          "info": "The current status of request item. "
        },
        "START_TIME": {
          "type": "DATE",
          "nullable": true,
          "info": "The date/time the request item was started. "
        },
        "END_TIME": {
          "type": "DATE",
          "nullable": true,
          "info": "The date/time once all parts are transported. "
        },
        "PARTITION_KEY": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The partition key for the purge process. "
        },
        "REQUEST_ID": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "The parent item request ID. "
        },
        "RESPONSE_STATUS": {
          "type": "VARCHAR2(10)",
          "nullable": true,
          "info": "If there is an error transporting a part, this will be the reported status. "
        },
        "RESPONSE": {
          "type": "CLOB",
          "nullable": true,
          "info": "Captures the response from the external system when content is sent. "
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
        "ERROR_ID": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Contains the error details if the data export fails."
        }
      },
      "fk_tables": []
    }
  }
};
