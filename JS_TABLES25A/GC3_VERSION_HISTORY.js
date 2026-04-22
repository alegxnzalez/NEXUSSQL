// GC3_VERSION_HISTORY.js

window.GC3_VERSION_HISTORY = {
  "tables": {
    "GC3_VERSION_HISTORY": {
      "columns": {
        "LOG_DATE": {
          "type": "DATE",
          "nullable": false,
          "key_value": true
        },
        "GC3_VERSION": {
          "type": "VARCHAR2(15)",
          "nullable": false
        },
        "PATCH_RELEASE": {
          "type": "VARCHAR2(30)",
          "nullable": true
        },
        "STATUS": {
          "type": "VARCHAR2(50)",
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
