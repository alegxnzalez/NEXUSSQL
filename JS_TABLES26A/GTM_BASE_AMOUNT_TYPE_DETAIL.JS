// GTM_BASE_AMOUNT_TYPE_DETAIL.js

window.GTM_BASE_AMOUNT_TYPE_DETAIL = {
  "tables": {
    "GTM_BASE_AMOUNT_TYPE_DETAIL": {
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
        "GTM_BASE_AMOUNT_TYPE_SEQ": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true
},
        "GTM_BASE_AMOUNT_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_BASE_AMOUNT_TYPE"
},
        "GTM_VALUE_QUALIFIER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_VALUE_QUALIFIER"
},
        "OPERATOR": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "+",
                    "-"
          ]
}
      },
      "fk_tables": []
    }
  }
};