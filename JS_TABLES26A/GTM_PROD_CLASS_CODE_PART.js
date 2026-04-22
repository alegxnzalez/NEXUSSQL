// GTM_PROD_CLASS_CODE_PART.js

window.GTM_PROD_CLASS_CODE_PART = {
  "tables": {
    "GTM_PROD_CLASS_CODE_PART": {
      "columns": {
        "GTM_PROD_CLASS_CODE_PART_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "GTM_PROD_CLASS_CODE_PART_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "CLASSIFICATION_CODE_PART": {
          "type": "VARCHAR2(30)",
          "nullable": true
},
        "PARENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_PROD_CLASS_CODE_PART"
},
        "GTM_PROD_CLASS_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_PROD_CLASS_CODE"
},
        "GTM_DATA_VERSION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_DATA_VERSION"
},
        "ROOT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
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
        "GTM_PROD_CLASS_CODE_PART",
        "GTM_PROD_CLASS_CODE_PART_DESC"
]
    }
  }
};