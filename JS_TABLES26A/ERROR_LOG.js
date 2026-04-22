// ERROR_LOG.js

window.ERROR_LOG = {
  "tables": {
    "ERROR_LOG": {
      "description": "This table is used in conjunction with the X_ series tables. It stores any errors during the staging of the data in the X_ series tables.",
      "columns": {
        "TEXT": {
          "type": "VARCHAR2(2000)",
          "nullable": true,
          "info": "TEXT contains the textual description of the logged error."
},
        "SEQ_NO": {
          "type": "NUMBER",
          "nullable": false
},
        "TIME_STAMP": {
          "type": "DATE",
          "nullable": false,
          "info": "TIME_STAMP contains the day, month and eyar of the logged error."
},
        "CALLER": {
          "type": "VARCHAR2(100)",
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
      "fk_tables": []
    }
  }
};