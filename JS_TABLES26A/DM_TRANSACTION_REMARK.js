// DM_TRANSACTION_REMARK.js

window.DM_TRANSACTION_REMARK = {
  "tables": {
    "DM_TRANSACTION_REMARK": {
      "description": "Qualified remarks about the demurrage transaction (qualifiers in table REMARK_QUAL). This may have similar information to the DM_TRANSACTION_NOTE table, except that the remarks are qualified, while notes are freeform. Example: Qual: Order Out reason Remark: Equipment Demaged..",
      "columns": {
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
        "DM_TRANSACTION_SEQ_NO": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "foreign_key": "DM_TRANSACTION",
          "info": "DM_TRANSACTION_SEQ_NO contains the unique identifier for the demurrage transaction."
},
        "REMARK_SEQUENCE": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "REMARK_SEQ_NO contains a sequence number for a remark on an demurrage transaction."
},
        "REMARK_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "REMARK_QUAL",
          "info": "Remark Qualifier"
},
        "REMARK_TEXT": {
          "type": "VARCHAR2(4000)",
          "nullable": false,
          "info": "REMARK_TEXT contains the text for the remark on an demurrage transaction."
}
      },
      "fk_tables": []
    }
  }
};