// GTM_PROD_CLASS_PURPOSE.js

window.GTM_PROD_CLASS_PURPOSE = {
  "tables": {
    "GTM_PROD_CLASS_PURPOSE": {
      "columns": {
        "GTM_PROD_CLASS_PURPOSE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Product Classification Purpose GID"
},
        "GTM_PROD_CLASS_PURPOSE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Product Classification Purpose XID"
},
        "PURPOSE_NAME": {
          "type": "VARCHAR2(256)",
          "nullable": false,
          "info": "The descriptive name given to the product classification purpose"
},
        "DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Description text"
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
        "GTM_ITEM_CLASSIFICATION",
        "GTM_ITEM_CLASS_TEMPLATE_D",
        "GTM_TR_PROD_CLASSIFICATION"
]
    }
  }
};