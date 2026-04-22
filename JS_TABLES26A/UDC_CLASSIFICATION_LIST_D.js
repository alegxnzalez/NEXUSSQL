// UDC_CLASSIFICATION_LIST_D.js

window.UDC_CLASSIFICATION_LIST_D = {
  "tables": {
    "UDC_CLASSIFICATION_LIST_D": {
      "description": "The User Defined Commodities contained in the UDC Classification List.",
      "columns": {
        "UDC_CLASSIFICATION_LIST_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "UDC_CLASSIFICATION_LIST",
          "info": "Unique ID for name of list."
},
        "SEQ_NO": {
          "type": "NUMBER(8)",
          "nullable": false,
          "key_value": true,
          "info": "Unique sequence number"
},
        "USER_DEFINED_COMMODITY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "USER_DEFINED_COMMODITY",
          "info": "User Defined Commodity that is part of list."
},
        "SERVPROV_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SERVPROV",
          "info": "Only classify item this way when rating for this service provider."
},
        "RATE_OFFERING_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "RATE_OFFERING"
},
        "PERSPECTIVE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "B",
                    "S"
          ]
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