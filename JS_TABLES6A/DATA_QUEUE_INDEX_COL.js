// DATA_QUEUE_INDEX_COL.js

window.DATA_QUEUE_INDEX_COL = {
  "tables": {
    "DATA_QUEUE_INDEX_COL": {
      "columns": {
        "DATA_QUEUE_INDEX_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "DATA_QUEUE_INDEX",
          "info": "Index ID "
        },
        "COLUMN_NAME": {
          "type": "VARCHAR2(30)",
          "nullable": false,
          "key_value": true,
          "info": "Oracle column name "
        },
        "SEQUENCE": {
          "type": "NUMBER(2)",
          "nullable": false,
          "info": "Order of column within the index "
        },
        "IS_HISTOGRAM": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "If Y, the column requires collection of histogram statistics"
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
