// GTM_TRANS_LINE_VALUE_DETAIL.js

window.GTM_TRANS_LINE_VALUE_DETAIL = {
  "tables": {
    "GTM_TRANS_LINE_VALUE_DETAIL": {
      "description": "To give the values to the attributes of the value qualifier on a transaction line",
      "columns": {
        "GTM_TRANSACTION_LINE_GID": {
          "type": "VARCHAR2(201)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_TRANS_LINE_VALUE",
          "info": "Transaction Line ID"
},
        "GTM_VALUE_QUALIFIER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_TRANS_LINE_VALUE",
          "info": "value qualifier ID"
},
        "GTM_VALUE_ATTRIBUTE_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_VALUE_ATTRIBUTE_QUAL",
          "info": "An attribute related to the value qualifier ID"
},
        "ATTRIBUTE_VALUE": {
          "type": "VARCHAR2(240)",
          "nullable": false,
          "info": "Value given to the value qualifier attribute"
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