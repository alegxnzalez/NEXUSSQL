// DATA_MODIFICATION_HISTORY.js

window.DATA_MODIFICATION_HISTORY = {
  "tables": {
    "DATA_MODIFICATION_HISTORY": {
      "columns": {
        "TABLE_NAME": {
          "type": "VARCHAR2(30)",
          "nullable": false,
          "info": "Name of table whose data got modified or deleted "
        },
        "PRIMARY_KEY_COL_VALUE": {
          "type": "VARCHAR2(4000)",
          "nullable": false,
          "info": "Data of the first column of the primary key of the affected row "
        },
        "PRIMARY_KEY_COL_VALUE2": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Data of the second column of the primary key of the affected row. It can be NULL depending on number columns in the primary key "
        },
        "DML_TYPE": {
          "type": "VARCHAR2(10)",
          "nullable": false,
          "info": "Type of data modification, D for Delete "
        },
        "DML_TIMESTAMP": {
          "type": "TIMESTAMP(9)(7)",
          "nullable": false,
          "info": "Date and time of data delete "
        },
        "COMMIT_TIMESTAMP": {
          "type": "TIMESTAMP(9)(7)",
          "nullable": false,
          "info": "Date and time of data commited "
        },
        "COMMIT_ID": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "Date and time of data commited "
        },
        "USER_NAME": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "info": "Name of user who modified or deleted data "
        },
        "PARTITION_KEY": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "Populated through a trigger, this key is used to determine into which partition this record should be inserted.  The formula is based upon the insert_date column and the frequency in which this table is associated (weekly, monthly, quarterly).  Valid values are 1-4."
        },
        "PRIMARY_KEY_COL_VALUE3": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "PRIMARY_KEY_COL_VALUE4": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "PRIMARY_KEY_COL_VALUE5": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "PRIMARY_KEY_COL_VALUE6": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "PRIMARY_KEY_COL_VALUE7": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "PRIMARY_KEY_COL_VALUE8": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "PRIMARY_KEY_COL_VALUE9": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        }
      },
      "fk_tables": []
    }
  }
};
