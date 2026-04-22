// CLAIM_LINE_ITEM_REFNUM.js

window.CLAIM_LINE_ITEM_REFNUM = {
  "tables": {
    "CLAIM_LINE_ITEM_REFNUM": {
      "description": "Stores reference numbers for a claim line item",
      "columns": {
        "CLAIM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "CLAIM_LINE_ITEM",
          "info": "The GID for the claim."
},
        "LINE_ITEM_SEQ_NO": {
          "type": "NUMBER(9)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "CLAIM_LINE_ITEM",
          "info": "The sequence number of the claim line item to which this reference number is tied."
},
        "CLAIM_LI_REFNUM_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "CLAIM_LINE_ITEM_REFNUM_QUAL",
          "info": "The qualifier for the reference number."
},
        "REFNUM_VALUE": {
          "type": "VARCHAR2(240)",
          "nullable": false,
          "key_value": true,
          "info": "The value of reference number."
},
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Database domain where this data is stored."
},
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "The user ID of the data insert user."
},
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date and time of data insert."
},
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The user ID of the data update user."
},
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date and time of the most recent data update."
}
      },
      "fk_tables": []
    }
  }
};