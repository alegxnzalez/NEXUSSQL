// GTM_PERCENTAGE_VALUE_QUAL.js

window.GTM_PERCENTAGE_VALUE_QUAL = {
  "tables": {
    "GTM_PERCENTAGE_VALUE_QUAL": {
      "description": "Table to store the percentage value qualifiers. these qualifiers will be used to define percentage values for currency and Quantity accross GTM on various objects.",
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
        "GTM_PERCENTAGE_VALUE_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "contains the unique identifier for the percentage value qualifier"
},
        "GTM_PERCENTAGE_VALUE_QUAL_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "contains the XID unique identifier for the percentgae value qualifier"
},
        "DESCRIPTION": {
          "type": "VARCHAR2(256)",
          "nullable": true,
          "info": "column to add user description about the percentage value qualifier"
}
      },
      "fk_tables": [
        "GTM_STR_COM_PERCENTAGE_VALUE",
        "GTM_TR_LINE_PERCENTAGE_VALUE"
]
    }
  }
};