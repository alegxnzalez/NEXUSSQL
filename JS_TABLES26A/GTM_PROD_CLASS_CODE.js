// GTM_PROD_CLASS_CODE.js

window.GTM_PROD_CLASS_CODE = {
  "tables": {
    "GTM_PROD_CLASS_CODE": {
      "description": "Product classification code",
      "columns": {
        "GTM_PROD_CLASS_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "GTM_PROD_CLASS_CODE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "GTM_PROD_CLASS_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_PROD_CLASS_TYPE"
},
        "CLASSIFICATION_CODE": {
          "type": "VARCHAR2(30)",
          "nullable": false
},
        "GTM_DATA_VERSION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_DATA_VERSION"
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
},
        "EXPIRATION_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Expiration Date for the Classification Code."
},
        "EFFECTIVE_DATE": {
          "type": "DATE",
          "nullable": true
},
        "SECTION": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "CHAPTER": {
          "type": "VARCHAR2(101)",
          "nullable": true
}
      },
      "fk_tables": [
        "GTM_CLASS_CODE_ATTRIBUTE",
        "GTM_ITEM_CLASSIFICATION",
        "GTM_ITEM_CLASS_TEMPLATE_D",
        "GTM_PROD_CLASS_CODE_DESC",
        "GTM_PROD_CLASS_CODE_NOTES",
        "GTM_PROD_CLASS_CODE_PART",
        "GTM_PROD_CLASS_CODE_UOM",
        "GTM_REGISTRATION",
        "GTM_STRUCTURE",
        "GTM_STRUCTURE_COMPONENT",
        "GTM_TRANS_LINE_REPORT_QUANTITY",
        "GTM_TR_ITEM_STRUCTURE",
        "GTM_TR_PROD_CLASSIFICATION"
]
    }
  }
};