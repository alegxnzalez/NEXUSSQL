// FTI_LOAD_LOG.js

window.FTI_LOAD_LOG = {
  "tables": {
    "FTI_LOAD_LOG": {
      "columns": {
        "LOAD_SEQ_NO": {
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
        "LOAD_TIME": {
          "type": "DATE",
          "nullable": false
},
        "LOAD_STATUS": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "values": [
                    "SUCCESS",
                    "ERROR"
          ]
},
        "ERROR_MESSAGE": {
          "type": "VARCHAR2(512)",
          "nullable": true
},
        "NUM_OF_RECORDS": {
          "type": "NUMBER",
          "nullable": false
},
        "PREV_SUCCESS_LOAD_TIME": {
          "type": "DATE",
          "nullable": true
},
        "LOAD_START_TIME": {
          "type": "DATE",
          "nullable": true
},
        "LOAD_END_TIME": {
          "type": "DATE",
          "nullable": true
}
      },
      "fk_tables": []
    }
  }
};