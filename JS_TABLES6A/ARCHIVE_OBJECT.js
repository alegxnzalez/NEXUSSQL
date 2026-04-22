// ARCHIVE_OBJECT.js

window.ARCHIVE_OBJECT = {
  "tables": {
    "ARCHIVE_OBJECT": {
      "columns": {
        "P_TABLE_NAME": {
          "type": "VARCHAR2(30)",
          "nullable": true
        },
        "A_TABLE_NAME": {
          "type": "VARCHAR2(30)",
          "nullable": true
        },
        "A_SEQUENCE_NAME": {
          "type": "VARCHAR2(30)",
          "nullable": true
        },
        "A_TRIGGER_NAME": {
          "type": "VARCHAR2(30)",
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
