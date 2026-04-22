// ESG_ACTIVITY_REMARK.js

window.ESG_ACTIVITY_REMARK = {
  "tables": {
    "ESG_ACTIVITY_REMARK": {
      "description": "Qualified remarks about the ESG (Environment, Social and Governance) Activity (qualifiers in table REMARK_QUAL).",
      "columns": {
        "ESG_ACTIVITY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ESG_ACTIVITY",
          "info": "The GID of the ESG Activity."
},
        "REMARK_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "REMARK_QUAL",
          "info": "A pointer to the remark type."
},
        "REMARK_TEXT": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "A user-entered remark on the ESG Activity."
},
        "REMARK_SEQUENCE": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "The remark sequence (key) associated with the ESG Activity."
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