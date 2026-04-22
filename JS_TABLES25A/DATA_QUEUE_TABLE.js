// DATA_QUEUE_TABLE.js

window.DATA_QUEUE_TABLE = {
  "tables": {
    "DATA_QUEUE_TABLE": {
      "columns": {
        "DATA_QUEUE_TABLE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "DATA_QUEUE_TABLE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "TABLE_NAME": {
          "type": "VARCHAR2(30)",
          "nullable": false,
          "info": "Oracle table name of the data queue table "
        },
        "EXCEPTION_TABLE_NAME": {
          "type": "VARCHAR2(30)",
          "nullable": false,
          "info": "Oracle table name of the data queue exception table "
        },
        "ORACLE_SEQUENCE": {
          "type": "VARCHAR2(30)",
          "nullable": false,
          "info": "The oracle sequence generator for the data queue sequence column "
        },
        "ORACLE_EXCEPTION_SEQUENCE": {
          "type": "VARCHAR2(30)",
          "nullable": false,
          "info": "The oracle sequence generator for the data queue exception table "
        },
        "PARTITION_DURATION": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "Duration of each partition"
        },
        "PARTITION_DURATION_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": false
        },
        "PARTITION_DURATION_BASE": {
          "type": "NUMBER()",
          "nullable": false
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
        "DATA_QUEUE_DEF"
      ]
    }
  }
};
