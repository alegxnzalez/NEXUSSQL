// GTM_TRANS_LINE_VALUE_D.js

window.GTM_TRANS_LINE_VALUE_D = {
  "tables": {
    "GTM_TRANS_LINE_VALUE_D": {
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
        "GTM_TRANSACTION_LINE_GID": {
          "type": "VARCHAR2(201)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_TRANS_LINE_VALUE",
          "info": "The GID for the GTM Trade Transaction Line."
},
        "GTM_VALUE_QUALIFIER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_TRANS_LINE_VALUE",
          "info": "Value Qualifier Gid"
},
        "SEQUENCE_NO": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "Sequence Number"
},
        "VALUE_ATTRIBUTE": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "Value attribute shows the attribute type of the value qualifier."
},
        "VALUE": {
          "type": "NUMBER",
          "nullable": false,
          "info": "The currency value of the value attribute."
},
        "VALUE_BASE": {
          "type": "NUMBER",
          "nullable": false,
          "info": "The currency value in base units."
},
        "VALUE_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CURRENCY",
          "info": "The GID for the value currency."
},
        "VALUE_NOTE": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "A note that shows how the value attribute is calculated."
},
        "REFERENCE_VALUE_ATTRIBUTE": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "Reference value attribute column shows which other value attribute this belongs to."
}
      },
      "fk_tables": []
    }
  }
};