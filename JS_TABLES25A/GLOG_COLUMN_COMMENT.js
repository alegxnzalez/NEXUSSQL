// GLOG_COLUMN_COMMENT.js

window.GLOG_COLUMN_COMMENT = {
  "tables": {
    "GLOG_COLUMN_COMMENT": {
      "columns": {
        "TABLE_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": false,
          "key_value": true
        },
        "COLUMN_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": false,
          "key_value": true
        },
        "THE_COMMENT": {
          "type": "VARCHAR2(2000)",
          "nullable": true
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
