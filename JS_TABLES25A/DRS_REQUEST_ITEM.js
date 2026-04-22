// DRS_REQUEST_ITEM.js

window.DRS_REQUEST_ITEM = {
  "tables": {
    "DRS_REQUEST_ITEM": {
      "columns": {
        "REQUEST_ID": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "A unique request ID from the data replication service sequence. "
        },
        "ITEM_NO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "A unique item number within a particular request. "
        },
        "PARENT_ITEM_NO": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The parent item number within the request where nested tables are used. "
        },
        "EXT_REF_ID": {
          "type": "VARCHAR2(100)",
          "nullable": true,
          "info": "An external reference for correlation purposes. "
        },
        "SCHEMA": {
          "type": "VARCHAR2(20)",
          "nullable": false,
          "info": "Schema owning table for item. "
        },
        "ITEM_TYPE": {
          "type": "VARCHAR2(20)",
          "nullable": false,
          "info": "Item relates to a single table name. "
        },
        "ITEM_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Table name if the item_type = TABLE. "
        },
        "SELECT_LIST": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "A comma-separated list of column names to limit selected data. "
        },
        "TARGET_NO": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "A reference to the\ncorresponding external destination details in the drs_request_item_target table "
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
        "PART_LIMIT": {
          "type": "NUMBER()",
          "nullable": true
        },
        "ACTUAL_PART_COUNT": {
          "type": "NUMBER()",
          "nullable": true
        },
        "OFFSET": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Used when paging through matching records. "
        },
        "TOTAL_RESULTS": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The total number of records matching the given criteria. May be larger than actual returned count. "
        },
        "TOTAL_RECORD_COUNT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Total count of records in all parts for this item "
        },
        "PARTITION_KEY": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The partition key for the purge process. "
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
