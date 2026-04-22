// GTM_VALUE_ATTRIBUTE_QUAL.js

window.GTM_VALUE_ATTRIBUTE_QUAL = {
  "tables": {
    "GTM_VALUE_ATTRIBUTE_QUAL": {
      "description": "To give the values to the attributes of the value qualifier",
      "columns": {
        "GTM_VALUE_ATTRIBUTE_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "A Qualifier to add any attribute to the value qualifier ID"
},
        "GTM_VALUE_ATTRIBUTE_QUAL_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "A Qualifier to add any attribute to the value qualifier ID"
},
        "DESCRIPTION": {
          "type": "VARCHAR2(240)",
          "nullable": true,
          "info": "Gives the description of the qualifier purpose"
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
      "fk_tables": [
        "GTM_TRANS_LINE_VALUE_DETAIL",
        "GTM_TRANS_VALUE_DETAIL"
]
    }
  }
};