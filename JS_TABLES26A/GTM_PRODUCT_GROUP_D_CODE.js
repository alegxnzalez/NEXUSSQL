// GTM_PRODUCT_GROUP_D_CODE.js

window.GTM_PRODUCT_GROUP_D_CODE = {
  "tables": {
    "GTM_PRODUCT_GROUP_D_CODE": {
      "columns": {
        "GTM_PRODUCT_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_PRODUCT_GROUP"
},
        "GTM_PROD_CLASS_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_PROD_CLASS_TYPE"
},
        "CLASSIFICATION_CODE": {
          "type": "VARCHAR2(30)",
          "nullable": false,
          "key_value": true
},
        "IS_INCLUDED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
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