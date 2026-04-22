// SKU_QUANTITY_TYPE.js

window.SKU_QUANTITY_TYPE = {
  "tables": {
    "SKU_QUANTITY_TYPE": {
      "description": "SKU stock quantity.",
      "columns": {
        "SKU_QUANTITY_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "SKU quantity type id."
},
        "SKU_QUANTITY_TYPE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "SKU quantity type xid"
},
        "SKU_QUANTITY_TYPE_DESC": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "description of SKU quantity type."
},
        "IS_TOTAL": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "If this bucket is a totals bucket"
},
        "IS_AUTO_LINK": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "If this instance bucket should be automatically linked to asset"
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
        "SKU_EVENT_QUANTITY",
        "SKU_LEVEL",
        "SKU_QUANTITY",
        "SKU_QUANTITY_TYPE_HIERARCHY"
]
    }
  }
};