// FTI_LOAD_REJECTS.js

window.FTI_LOAD_REJECTS = {
  "tables": {
    "FTI_LOAD_REJECTS": {
      "columns": {
        "LOAD_REJECTS_SEQ_NO": {
          "type": "NUMBER",
          "nullable": false
},
        "APPLICATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false
},
        "TABLE_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "OBJECT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false
},
        "ERROR_MESSAGE": {
          "type": "VARCHAR2(400)",
          "nullable": true
},
        "REJECT_DATE": {
          "type": "DATE",
          "nullable": false
}
      },
      "fk_tables": []
    }
  }
};